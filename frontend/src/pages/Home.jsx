import { useEffect, useState } from "react";
import API from "../api/axios";
import StoryCard from "../components/StoryCard";
import { useAuth } from "../context/AuthContext";
import "./Home.css";

const Home = () => {
  const { user } = useAuth();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStories = async () => {
    try {
     const response = await API.get("/api/stories");
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
    return (
      <div className="container loading-container">
        <span className="loader"></span>
        <h2>Discovering latest stories...</h2>
      </div>
    );
  }

  return (
    <div className="page page-home">
      <section className="hero glass-card">
        <div className="container hero-inner">
          <div className="hero-badge">Latest Technology Stories</div>
          <h1 className="hero-title">Stay ahead of the curve</h1>
          <p className="hero-subtitle">
            Scrapper brings curated tech insights from trusted sources into one fast, bookmarkable feed.
          </p>

          {!user && (
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg" type="button">
                Join the Community
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="container">
        <div className="page-section-header">
          <div>
            <h2 className="page-section-title">Trending now</h2>
            <p className="page-section-subtitle">Fresh picks from the scraper feed</p>
          </div>
        </div>

        {stories.length === 0 ? (
          <div className="empty-state glass-card">
            <h2>No stories found</h2>
            <p>Check back later for fresh updates.</p>
          </div>
        ) : (
          <div className="stories-grid">
            {stories.map((story) => (
              <StoryCard
                key={story._id}
                story={story}
                refreshStories={fetchStories}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

};

export default Home;
