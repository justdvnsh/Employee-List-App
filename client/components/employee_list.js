import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail'

const PER_PAGE = 20

class EmployeeList extends Component {

  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick () {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render () {
    return (
      <div>
        <div className='employee-list'>
          {this.props.employees.map(employee => <EmployeeDetail employee={employee} key={employee._id}/>)}
        </div>
        <center><button className='btn btn-primary'
                onClick={this.handleButtonClick.bind(this)}
        >Load More...!</button></center>
      </div>
    )
  }
};

// the props is passed by the subscribe method.

export default createContainer(() => {
  // we would subscribe , i.e. ask for the bookmark/(publish-method) we just created
  Meteor.subscribe('employees', PER_PAGE);

  // whatever we return here, will be passed to the conmponent EmployeeList as props
  return { employees: Employees.find({}).fetch() }
}, EmployeeList);
