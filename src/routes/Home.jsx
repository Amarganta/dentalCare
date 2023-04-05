import React, { useContext } from "react";
import Card from "../components/Card";
import DentistsContex from "../context/dentistsContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const dentists = useContext(DentistsContex);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentists &&
          dentists.map((item) => (
            <Card name={item.name} username={item.username} id={item.id} />
          ))}
      </div>
    </main>
  );
};

export default Home;
