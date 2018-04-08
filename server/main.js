import {Meteor} from 'meteor/meteor';
import {Employees} from '../imports/collections/employees';
import _ from 'lodash';
import { image , helpers } from 'faker';

Meteor.startup(() => {
  // great place to generate data.

  const numberRecords = Employees.find({}).count();
  console.log(numberRecords)

  if( !numberRecords ) {
    _.times(5000, () => {     // _ provides a func. times, which is a better way than looping. It will call the func (2nd arg) 5000 times
      const { name, email, phone } = helpers.createCard();    // from faker to help generate fake data.

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      })
    })
  }

  // publish statement actually just bookmarks the cursor, unlike mongo query which returns it. Publish will bookmark the cursor,
  // and when asked for it , i.e. subscribed , it will return it.

  Meteor.publish('employees', (per_page) => {
    return Employees.find({}, { limit: per_page })
  })
})
