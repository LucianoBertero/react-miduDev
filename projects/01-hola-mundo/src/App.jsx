import React from "react";

import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

function App() {
  const midudev = {
    name: "Miguel Angel Duran",
    userName: "midudev",
  };
  const pheralb = {
    name: "Pablo Peralta",
    userName: "pheralb",
  };
  const addAt = (userName) => `@${midudev}`;

  const formattedUserName = <span>@midudev</span>;
  return (
    <section className="App">
      <TwitterFollowCard
        userName={midudev.userName}
        name={midudev.name}
      ></TwitterFollowCard>
      <TwitterFollowCard userName={pheralb.userName} name={pheralb.name}>
        {" "}
      </TwitterFollowCard>
    </section>
  );
}

export default App;
