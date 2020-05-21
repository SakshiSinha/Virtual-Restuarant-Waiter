import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AdminDash from "./admin/AdminDash";
import Navbar from "./admin/Navbar";
import Menu from "./admin/Menu";
import Orders from "./admin/Orders";
import AddItem from "./admin/AddItem";
import Admin from "./Admin";
import NoMatch from "./NoMatch";

const AdminDashRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <Route path="/admin/dash" render={() => <Navbar />} />
      <Switch>
        <Route path="/admin/dash" exact render={() => <AdminDash />} />
        <Route path="/admin/dash/menu" render={() => <Menu />} />
        <Route path="/admin/dash/orders" render={() => <Orders />} />
        <Route path="/admin/dash/addItem" render={() => <AddItem />} />
        <Route path="/admin" render={() => <Admin />} />
        <Route render={() => <NoMatch />} />
      </Switch>
    </>
  ) : (
    <Redirect to="/admin" />
  );
};

AdminDashRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.user.admin.isLoggedIn
});

export default connect(mapStateToProps, null)(AdminDashRoutes);
