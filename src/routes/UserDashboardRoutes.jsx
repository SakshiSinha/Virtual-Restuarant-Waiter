import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "./User/Dashboard";
import Navbar from "./User/Navbar";
import Bill from "./User/Bill";
import Cart from "./User/Cart";
import NoMatch from "./NoMatch";

const UserDashboardRoutes = props => {
  const { tableSelected } = props;
  return tableSelected.length !== 0 ? (
    <>
      <Route path={`/reservation/${tableSelected}`} render={() => <Navbar />} />
      <Switch>
        <Route
          path={`/reservation/${tableSelected}`}
          exact
          render={() => <Dashboard />}
        />
        <Route
          path={`/reservation/${tableSelected}/bill`}
          render={() => <Bill />}
        />
        <Route
          exact
          path={`/reservation/${tableSelected}/cart`}
          render={() => <Cart />}
        />
        <Route component={NoMatch} />
      </Switch>
    </>
  ) : (
    <Redirect to="/reservation" />
  );
};

UserDashboardRoutes.propTypes = {
  tableSelected: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  tableSelected: state.user.tableSelected
});

export default connect(mapStateToProps)(UserDashboardRoutes);
