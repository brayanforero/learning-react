import "./App.css";
import Employ from "./Employ";
import users from "./user.json";

function App() {
  return (
    <>
      {users.results.map((u) => {
        const name = `${u.name.first} ${u.name.last}`;
        const location = `${u.location.city}, ${u.location.country}`;
        return (
          <Employ
            key={u.id}
            name={name}
            position={location}
            avatar={u.picture.medium}
          />
        );
      })}
    </>
  );
}

export default App;
