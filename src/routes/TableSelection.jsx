import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { tableSelected } from "../redux/userData/actions";
import styles from "./TableSelection.module.css";
import NavbarPublic from "./NavbarPublic";

const TableSelection = ({ tableNo, table }) => {
  const handleClick = id => {
    table(id);
    // alert(`Your Table No is ${id}`);
  };

  return (
    <>
      <NavbarPublic />
      <div className="container-fluid bg-light">
        <div className="row py-4">
          <div className="col d-flex justify-content-center">
            <h3>Please Select a Table</h3>
          </div>
        </div>
        <div className="row">
          {/* Tables */}
          {tableNo.map(item => (
            <Link to={`reservation/${item}`}>
              <div
                key={item}
                className="col-8 offset-2 col-lg-3 offset-lg-0 mb-4"
              >
                <div
                  className={`card ${styles.cardSize}`}
                  onClick={() => handleClick(item)}
                  onKeyPress={handleClick(item)}
                  role="menuitem"
                  tabIndex="0"
                >
                  <img
                    src="https://m.media-amazon.com/images/I/A1NGhamblCL._SS500_.jpg"
                    className="card-img-top"
                    alt="Table1"
                  />
                  <div className="card-body text-danger">
                    <h3 className="text-center">{item}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

TableSelection.propTypes = {
  tableNo: PropTypes.arrayOf(PropTypes.any),
  table: PropTypes.func.isRequired
};

TableSelection.defaultProps = {
  tableNo: []
};

const mapStateToProps = state => ({
  tableNo: state.user.tableNo
});

const mapDispatchToProps = dispatch => ({
  table: payload => dispatch(tableSelected(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableSelection);
