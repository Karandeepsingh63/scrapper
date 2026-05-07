import { useEffect, useState } from "react";

import API from "../api/axios";

import StoryCard from "../components/StoryCard";

import { useAuth } from "../context/AuthContext";

const Home = () => {

  const { user, logout } = useAuth();

  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(true);


  // FETCH STORIES
  const fetchStories = async () => {
    try {

      const response = await API.get("/stories");

      setStories(response.data.stories);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchStories();
  }, []);


  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        paddingTop: "20px",
      }}
    >

      <h1>Hacker News Stories</h1>

      {user && (
        <div style={{ marginBottom: "20px" }}>

          <p>
            Welcome {user.name}
          </p>

          <button onClick={logout}>
            Logout
          </button>

        </div>
      )}

      {stories.length === 0 ? (
        <h2>No Stories Found</h2>
      ) : (
        stories.map((story) => (
          <StoryCard
            key={story._id}
            story={story}
            refreshStories={fetchStories}
          />
        ))
      )}

    </div>
  );
};

export default Home;