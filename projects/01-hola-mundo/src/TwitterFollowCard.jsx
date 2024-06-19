import { useState } from "react";

export function TwitterFollowCard({ formatUserName, userName, name }) {
  const imgSrc = `https://unavatar.io/${userName}`;

  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleCLick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={imgSrc}
          alt="El avatar de MiduDev"
          className=" tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-info">{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
        <aside>
          <button className={buttonClassName} onClick={handleCLick}>
            {text}{" "}
          </button>
        </aside>
      </header>
    </article>
  );
}
