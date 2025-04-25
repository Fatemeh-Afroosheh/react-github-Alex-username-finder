import Users from "./components/Users";
import { useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [catchUsers, setCatchUsers] = useState([]);

  const fetchUserHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=alex`
      );
      const data = await response.json();
      setCatchUsers(data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deletUserHandler = (userId) => {
    const filteredUser = catchUsers.filter((user) => user.id !== userId);
    setCatchUsers(filteredUser);
  };

  return (
    <div className="app">
      <div className="app-child">
        <h1>Users App</h1>
        {catchUsers.length === 0 &&
          (isLoading ? (
            <button className="fetch-users">
              <div className="spinner"></div>
            </button>
          ) : (
            <button className="fetch-users" onClick={fetchUserHandler}>
              <span>Fetch Alex's name's Users</span>
            </button>
          ))}
        {catchUsers.length > 0 ? (
          <Users catchUsers={catchUsers} deletUserHandler={deletUserHandler} />
        ) : (
          <h2>There is not any users! </h2>
        )}
      </div>
    </div>
  );
};

export default App;
