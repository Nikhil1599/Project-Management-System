import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Auth from "./Pages/Auth/Auth";
import { useState } from "react";

function App() {
  const { user } = useState(false);
  return (
    <>
      {user ? (
        <div>
          <Navbar />
          <Home />
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
