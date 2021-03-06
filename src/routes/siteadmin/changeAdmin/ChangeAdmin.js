import React from 'react';
import PropTypes from 'prop-types';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ChangeAdmin.css';

// Component
import ChangeAdminForm from '../../../components/siteadmin/ChangeAdminForm';

class ChangeAdmin extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return <ChangeAdminForm />
  }
}

export default withStyles(s)(ChangeAdmin); 