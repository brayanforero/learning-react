import { useState } from "react";

function FollowCard({ children, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "x-followCard-button is-following"
    : "x-followCard-button";
  return (
    <article className="x-followCard">
      <header className="x-followCard-header">
        <img
          className="x-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="profile avatar"
        />
        <div className="x-followCard-info">
          <strong>{children}</strong>
          <span className="x-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <section>
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={buttonClassName}
          type="button"
        >
          <span className="x-followCard-text">{text}</span>
          <span className="x-followCard-stopFollow">Stop Follow</span>
        </button>
      </section>
    </article>
  );
}
export default FollowCard;
