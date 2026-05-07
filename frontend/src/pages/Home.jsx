import { useAuth } from "../context/AuthContext";

const Home = () => {

  const { user, logout } = useAuth();

  return (
    <div>

      <h1>Home Page</h1>

      {user && (
        <>
          <p>Welcome {user.name}</p>

          <button onClick={logout}>
            Logout
          </button>
        </>
      )}

    </div>
  );
};

export default Home;