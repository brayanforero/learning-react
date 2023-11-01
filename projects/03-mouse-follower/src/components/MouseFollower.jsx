import { useEffect, useState } from "react";

function MouseFollower() {
  const [follow, setFollow] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position;

  useEffect(() => {
    const handleMouseFollower = (e) => {
      const { clientX, clientY } = e;
      setPosition({
        x: clientX,
        y: clientY,
      });
    };

    if (follow) window.addEventListener("mousemove", handleMouseFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseFollower);
    };
  }, [follow]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", follow);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [follow]);
  return (
    <>
      <div
        className="mouseFollower"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      ></div>
      <button onClick={() => setFollow(!follow)}>
        {follow ? "Do not follow mouse" : "Follow mouse"}
      </button>
    </>
  );
}

export default MouseFollower;
