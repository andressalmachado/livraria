import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
