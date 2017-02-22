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
