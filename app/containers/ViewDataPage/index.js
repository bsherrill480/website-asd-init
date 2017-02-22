/*
 * General comments:
 * At the moment, everything is rendered statically in the ViewData component.
 *
 * We're going to need to hook up the View Data page to some sagas, reducers, and selectors.
 *
 * This flow should look like this:
 *
 * 1. Your ViewDataPage loads. It sets off an action (in action.js) to retrieve the data's information. Let's call it getDataAction.
 * 2. You've got a saga listening for the getDataAction. The saga sees the getDataAction come in!
 *    So the saga makes an API call to retrieve the data information.
 * 3. If the saga returns with your data successfully, it sets off another action. Let's call that getDataSuccessAction.
 * 4. We'll have a reducer listening for getDataSuccessAction. It see the action happen, along with the information the action carries
 *    with it-- in this case, our data retrieved from the API.
 * 5. The reducer updates the store with the data!
 * 6. Now, a selector grabs that information from the store and allows us to access it as a prop.
 * 7. And that's the whole data flow in react-boilerplate!
 *
 * Please ask me questions on how to implement this!
 * This was really hard for me to learn so I understand that it's very confusing.
 * Ask Brian, it took him several explanations before I understood this data flow.
 *
 * -- Vy
 *
 */

/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import ViewData from '../../components/ViewData/index.js'

const options = {
  onRowClick: function (row) {
    alert(`You click row id: ${row.id}`);
  },
  onRowDoubleClick: function (row) {
    alert(`You double click row id: ${row.id}`);
  },
};

// var project = [
//   {
//   "project_id": 1,
//   "description": "Project 1",
//   "project_name": "Project 1",
//   "img": "",
//   "essentials" : [{
//     "year":2010,
//     "budget": 10000,
//     "source": "abc",
//     "location": "abc"
//   }],
//   "related_docs" : [{
//     "id": 1 ,
//     "link":"www.googledocs.com/abc.pdf"
//   },
//     {
//       "id":2,
//       "link":"www.abc.com/123.png"
//     }
//   ],
//   "datasets" : [
//     {
//       "id" : "data 1",
//       "updated":2052017,
//       "start":1052008,
//       "end":12082016,
//       "count":500,
//       "size":2000
//     },
//     {
//       "id" :"data 2",
//       "updated":2052012,
//       "start":1052007,
//       "end":12082011,
//       "count":800,
//       "size":3000
//     }
//   ]
// }];

export default class ViewDataPage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  /*
   * This container is not static; it should update if the data it's displaying gets updated.
   * You can take the "shouldComponentUpdate" method out.
   */

  // // Since state and props are static,
  // // there's no need to re-render this component
  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    //json used to display dataset table

    // See my note in ViewData/index.js for notes on how to pass data into a component.
    // (It'll look something like <ViewData data={datasets}></ViewData>)
    return (
      <div>
        <ViewData></ViewData>
      </div>

    );
  }
}
