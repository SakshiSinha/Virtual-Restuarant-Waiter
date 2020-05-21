import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import TableOrders from "./TableOrders";

const Orders = ({ tables }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col text-center">
            <h1>ORDERS</h1>
          </div>
        </div>
        <div className="row bg-light">
          <div className="offset-1" />
          {tables.map(item => (
            <div className="col-1">
              <div className="row">
                <div className="col text-center pb-1">
                  <Link to={`/admin/dash/orders/${item}`}>
                    <button type="button" className="btn btn-light">
                      <h3>{item}</h3>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Route
        path="/admin/dash/orders/:tableNo"
        render={() => <TableOrders />}
      />
    </>
  );
};

Orders.propTypes = {
  tables: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tables: state.user.tableNo
});

export default connect(mapStateToProps, null)(Orders);
