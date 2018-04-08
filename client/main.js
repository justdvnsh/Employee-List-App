import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list'

class App extends Component {
  render () {
    return (
      <div>
        <EmployeeList />
      </div>
    )
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('#my-render-area'))
})
