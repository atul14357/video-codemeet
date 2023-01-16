import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MeetProvider } from "./context/MeetContext";
import MeetPage from "./pages/MeetPage";
import StartupPage from "./pages/StartupPage";
import ThankYou from "./pages/ThankyouPage";

import "./styles/custom.css";

const App = () => {
  return (
    <MeetProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartupPage />}  ></Route>
          <Route path="/meet/:id" element={<MeetPage />}  ></Route>
          <Route path="/thank-you" element={<ThankYou />} ></Route>
        </Routes>
      </BrowserRouter>
    </MeetProvider>
  );
};

export default App;