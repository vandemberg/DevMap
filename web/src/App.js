import React, { useEffect, useState } from "react";

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleSubmit({ github_username, techs, latitude, longitude }) {
    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });

    const dev = response.data;
    setDevs([...devs, dev]);
  }

  return (
    <div id="app">
      <aside>
        <strong> Cadastrar </strong>
        <DevForm handleSubmit={handleSubmit} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
