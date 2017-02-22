/*
 * General comments: (repeat from BootstrapTableViewData.js)
 *
 * This is a design/organizational thing. Your code itself looks good!
 *
 * The BootstrapTableView.js and BootstrapTable1.js tables are extremely specific to the ViewData component.
 * You're (probably) not going to reuse them anywhere outside of the ViewData component.
 * Therefore, they don't need to be a stand-alone component as you have them here.
 * Thus, it'd be best to move BootstrapTableView.js and BootstrapTable1.js into the components/ViewData directory.
 * Then, at the top of ViewData/index.js, you can import them.
 *
 * Let me know if that makes sense! Holla if you need further explanation.
 *
 * --Vy
 */

/**
 * Created by shraddha on 2/8/17.
 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class BootstrapTable1 extends React.Component{

  /*
   * In our react-boilerplate way of doing things, we shouldn't be using a constructor in a component.
   * The component should get all its information from somewhere else. So, you don't need
   * a constructor to set any properties on the component.
   *
   * On a side note, if you want to give your containers props, here's how you do it:
   *    mapDispatchToProps: this will allow you to connect actions to your container's properties.
   *    mapStateToProps: this will allow you to connect your store's properties to your container's properties.
   * Check out HomePage/index.js for an example on how this is done.
   *
   * Also, please ask me if you'd like a code walk of how this works, I'd be happy to do it.
   * This was super hard for me to understand, Brian had to give me a lot of tutoring!
   *
   * Basically: you can delete any constructors from your components/containers.
   */
  constructor()
  {
    super();
    /*this.datasets = [
      {id: 'data 1',
        updated: 2052017,
        start: 1052008,
        end: 12082016,
        count: 500,
        size: 2000,},
      {id:'data 2',
        updated: 2052012,
        start: 1052007,
        end: 12082011,
        count: 800,
        size: 3000,},
    ];*/
  }


  render()
  {
    return (<BootstrapTable data={this.props.datasets} search={ true } striped = {true} hover = {true}>
      <TableHeaderColumn dataField="id" isKey>Dataset ID</TableHeaderColumn>
      <TableHeaderColumn dataField="updated">Updated</TableHeaderColumn>
      <TableHeaderColumn dataField="start">Start</TableHeaderColumn>
      <TableHeaderColumn dataField="end">End</TableHeaderColumn>
      <TableHeaderColumn dataField="count">Count</TableHeaderColumn>
      <TableHeaderColumn dataField="size">Size</TableHeaderColumn>
    </BootstrapTable>);
  }




}
