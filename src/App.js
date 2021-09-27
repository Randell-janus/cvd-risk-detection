import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import { FormProvider } from "./contexts/FormContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </FormProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
