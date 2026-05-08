import { useEffect, useState } from "react";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";
import StoryCard from "../components/StoryCard";
import "./Home.css";

const Bookmarks = () => {
  const { token } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchBookmarks = async () => {
    try {
      const response = await API.get("/stories/bookmarks/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
    return (
      <div className="container loading-container">
        <span className="loader"></span>
        <h2>Retrieving your bookmarks...</h2>
      </div>
    );
  }

  return (
    <div className="home-page" style={{ paddingTop: "2rem" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Your Bookmarks</h2>
          <p className="section-subtitle" style={{ margin: 0 }}>
            {bookmarks.length} stories saved
          </p>
        </div>

        {bookmarks.length === 0 ? (
          <div className="empty-state glass">
            <h2>No Bookmarks Yet</h2>
            <p>Stories you bookmark will appear here for quick access.</p>
          </div>
        ) : (
          <div className="stories-grid">
            {bookmarks.map((story) => (
              <StoryCard
                key={story._id}
                story={story}
                refreshStories={fetchBookmarks}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
