import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import { FormProvider } from "./contexts/FormContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </FormProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
