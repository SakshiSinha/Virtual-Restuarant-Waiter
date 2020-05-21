import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Admin from "./Admin";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NoMatch from "./NoMatch";
import TableSelection from "./TableSelection";
import UserDashboardRoutes from "./UserDashboardRoutes";
import AdminDashRoutes from "./AdminDashRoutes";

// import Register from "./Register";
// import NavBarPublic from "./NavbarPublic";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dash" render={() => <DashboardRoutes />} />
        <Route exact path="/admin" render={() => <Admin />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route exact path="/reservation" render={() => <TableSelection />} />
        <Route
          path="/reservation/:tableNo"
          render={() => <UserDashboardRoutes />}
        />
        <Route path="/admin/dash" render={() => <AdminDashRoutes />} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;
