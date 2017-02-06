/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// import H1 from 'components/H1';
// import messages from './messages';
// import List from './List';
// import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle';


const options = {
  onRowClick: function (row) {
    alert(`You click row id: ${row.id}`);
  },
  onRowDoubleClick: function (row) {
    alert(`You double click row id: ${row.id}`);
  },
};
var products = [{
  id: 1,
  name: 'Product1',
  price: 120,
}, {
  id: 2,
  name: 'Product2',
  price: 80,
}];

export default class ProjectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      // <div>
      //   <Helmet
      //     title="Project Page"
      //     meta={[
      //       { name: 'description', content: 'Project page of React.js Boilerplate application' },
      //     ]}
      //   />
      //   <H1>
      //     <FormattedMessage {...messages.header} />
      //   </H1>
      //   <List>
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.scaffoldingHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.scaffoldingMessage} />
      //       </p>
      //     </ListItem>
      //
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.feedbackHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.feedbackMessage} />
      //       </p>
      //     </ListItem>
      //
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.routingHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.routingMessage} />
      //       </p>
      //     </ListItem>
      //
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.networkHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.networkMessage} />
      //       </p>
      //     </ListItem>
      //
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.intlHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.intlMessage} />
      //       </p>
      //     </ListItem>
      //   </List>
      // </div>
      <BootstrapTable data={products} options={options}>
        <TableHeaderColumn dataField="id" isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}