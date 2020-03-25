import React, { useState, useEffect } from "react";

function DevForm({ handleSubmit }) {

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [github_username, setGithubUserName] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 15000
      }
    );
  }, []);

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ github_username, latitude, longitude, techs })
      }
    }>
      <div className="input-block">
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input
            value={github_username}
            onChange={e => setGithubUserName(e.target.value)}
            name="github_username"
            id="github_username"
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs"> Tecnologias </label>
          <input
            value={techs}
            onChange={e => setTechs(e.target.value)}
            name="techs"
            id="techs"
            required
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude"> Latitude </label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              value={latitude}
              onChange={event => setLatitude(event.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude"> Longitude </label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              value={longitude}
              onChange={event => setLongitude(event.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <button type="submit"> Salvar </button>
    </form>
  );
}

export default DevForm;
