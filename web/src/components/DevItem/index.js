import React from "react";

import './styles.css';

function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img alt="profile" src={dev.avatar_url} />
        <div className="user-info">
          <strong>{dev.name || dev.github_username}</strong>
          <span>{dev.techs.join(",")}</span>
        </div>
      </header>
      <p>{dev.bio || "Eita... tem BIO não T_T"}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no github
      </a>
    </li>
  );
}

export default DevItem;