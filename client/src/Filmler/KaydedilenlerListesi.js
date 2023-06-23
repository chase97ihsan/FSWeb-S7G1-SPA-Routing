import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">
          {props.movies.find((a) => a.id == movie).title}
        </span>
      ))}
      <NavLink to="/">
        <div className="home-button">Anasayfa</div>
      </NavLink>
    </div>
  );
}
