// Node modules.
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Relative imports
import { Wrapper } from "./styles";
import Header from "../Header";
import LoginPage from "../../pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Wrapper>
        <main>
          <Header />
          <div className="page">
            <Routes>
              <Route path="/" exact element={<LoginPage />} />
            </Routes>
          </div>
        </main>
      </Wrapper>
    </BrowserRouter>
  );
}

export default Router;
