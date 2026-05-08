import { useEffect, useState } from "react";

import API from "../api/axios";

import { useAuth } from "../context/AuthContext";

import StoryCard from "../components/StoryCard";

const Bookmarks = () => {

  const { token } = useAuth();

  const [bookmarks, setBookmarks] = useState([]);

  const [loading, setLoading] = useState(true);


  // FETCH BOOKMARKS
  const fetchBookmarks = async () => {
    try {

      const response = await API.get(
        "/stories/bookmarks/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookmarks(response.data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchBookmarks();
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

      <h1>Bookmarked Stories</h1>

      {bookmarks.length === 0 ? (
        <h2>No Bookmarks Found</h2>
      ) : (
        bookmarks.map((story) => (
          <StoryCard
            key={story._id}
            story={story}
            refreshStories={fetchBookmarks}
          />
        ))
      )}

    </div>
  );
};

export default Bookmarks;