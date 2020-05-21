import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./DashMenu.module.css";
// import { Link } from "react-router-dom";
import { addItem } from "../../redux/cart/CartAction";

const DashMenu = props => {
  const { foodMenu, add } = props;
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
                  <div
                    key={item.id}
                    className="col-8 offset-2 col-sm-6 offset-sm-0 col-md-4 col-lg-3 mb-4"
                  >
                    <div className="card d-flex justify-content-center">
                      <img
                        src={item.imageUrl}
                        className={`card-img-top img-fluid ${styles.card}`}
                        alt={item.name}
                      />
                      <div className="card-body mx-auto">
                        <h4 className="card-text text-center">{item.name}</h4>
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
                        <div className="d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => add(item, item.price)}
                          >
                            ADD TO CART
                          </button>
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

DashMenu.propTypes = {
  foodMenu: PropTypes.arrayOf(PropTypes.any),
  add: PropTypes.func.isRequired
};

DashMenu.defaultProps = {
  foodMenu: []
};

const mapStateToProps = state => ({
  foodMenu: state.user.foodMenu
});

const mapDispatchToProps = dispatch => ({
  add: (item, price) => dispatch(addItem(item, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashMenu);
