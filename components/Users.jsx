import User from "./User";

const Users = ({ catchUsers, deletUserHandler }) => {
  return (
    <ul className="users">
      {catchUsers?.map((user) => (
        <User
          key={user?.id}
          id={user?.id}
          avatar_url={user?.avatar_url}
          login={user?.login}
          deletUserHandler={deletUserHandler}
        />
      ))}
    </ul>
  );
};

export default Users;
