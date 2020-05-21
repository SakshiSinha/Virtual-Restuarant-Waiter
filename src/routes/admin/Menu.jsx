import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Menu.module.css";
// import { Link } from "react-router-dom";

const Menu = props => {
  const { foodMenu } = props;
  return (
    <div className="container-fluid">
      {/* Starter */}
      {foodMenu.map(data => (
        <div key={data.id} className={`row p-2 ${styles.menu}`}>
          <div className="col-12 mb-4">
            <div className="row my-4">
              <div className="col d-flex justify-content-center text-white">
                <h1 className="">{data.category.toUpperCase()}</h1>
              </div>
            </div>
            <div className="row px-4">
              {data.items
                .filter((item, idx) => idx < 4)
                .map(item => (
                  <div key={item.id} className="col-3 px-4">
                    <div className="card">
                      <img
                        src={item.imageUrl}
                        className={`card-img-top img-fluid ${styles.card}`}
                        alt={item.name}
                      />
                      <div className="card-body mx-auto ">
                        <h4 className="card-text text-center py-4">
                          {item.name}
                        </h4>
                        {item.cuisine ? (
                          <p className="card-text text-center font-weight-bold">
                            Cuisine:{item.cuisine}
                          </p>
                        ) : null}
                        <p className="card-text text-center font-weight-bold">
                          Rating:{item.rating}
                        </p>
                        <p className="card-text text-center font-weight-bold mt-4">
                          Price: {item.price}
                        </p>
                        <div className="row my-2">
                          <div className="col text-center">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              DELETE ITEM
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Menu.propTypes = {
  foodMenu: PropTypes.arrayOf(PropTypes.any)
};

Menu.defaultProps = {
  foodMenu: []
};

const mapStateToProps = state => ({
  foodMenu: state.user.foodMenu
});

export default connect(mapStateToProps, null)(Menu);
