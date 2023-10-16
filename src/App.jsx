import React, { useEffect, useState } from "react";
import { persons } from "./utils/persons";
import "./styles.css";

export const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < 6) {
        setIndex((index) => index + 1);
      } else {
        setIndex(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="container">
      <div className="card">
        <div className="progress-bar"></div>
        <p className="testimony">{persons[index].text}</p>
        <div className="person-info">
          <img src={persons[index].photo} className="img" alt="" />
          <div className="person-info-text">
            <p className="name">{persons[index].name}</p>
            <p className="role">{persons[index].position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
