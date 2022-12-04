import "./App.css";
import InfoForm from "./components/InfoForm/InfoForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import InfoFormt from "./components/InfoFormt/InfoFormt";
import Result from "./components/Result/Result";

function App() {
  const [formdata, setformdata] = useState({});
  return (
    <div className="h-screen justify-center flex items-center flex-col flex-wrap">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<InfoForm formdata={formdata} setformdata={setformdata} />}
          />
          <Route
            path="/InfoForm-two"
            element={
              <InfoFormt formdata={formdata} setformdata={setformdata} />
            }
          />
          <Route
            path="/result"
            element={
              <Result formdata={formdata} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
