import { Route, Switch, Redirect } from "react-router-dom";

import AllStudent from "./pages/AllStudent";
import NewStudent from "./pages/NewStudent";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Student" />
        </Route>
        <Route path="/Student" exact>
          <AllStudent />
        </Route>
        <Route path="/new-student">
          <NewStudent />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
