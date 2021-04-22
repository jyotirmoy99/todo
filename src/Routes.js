import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import FormOutput from "./components/FormOutput";
import NewForm from "./components/NewForm";
import ShowList from "./components/ShowList";
function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={(e, props) => <Form1 {...e} data={props} />}
          />
          <Route
            exact={true}
            path="/form2"
            render={(e, props) => <Form2 {...e} data={props} />}
          />
          <Route
            exact={true}
            path="/view"
            render={(e, props) => <FormOutput {...e} data={props} />}
          />
          <Route
            exact={true}
            path="/show"
            render={(e, props) => <ShowList {...e} data={props} />}
          />
          {/* <Route
            exact={true}
            path="/form_update/:id"
            render={(e, props) => <NewForm {...e} data={props} />}
          />
          */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
