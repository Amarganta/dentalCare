import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DentistsContex from "./context/dentistsContext";
function App() {
  const [dentists, setDentists] = useState();

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data);
  };

  useEffect(() => {
    getDentists();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <DentistsContex.Provider value={dentists}>
        <Outlet />
      </DentistsContex.Provider>
      <Footer />
    </div>
  );
}

export default App;
