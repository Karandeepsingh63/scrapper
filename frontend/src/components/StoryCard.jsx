import API from "../api/axios";
import { useAuth } from "../context/AuthContext";
import "./StoryCard.css";

const StoryCard = ({ story, refreshStories }) => {
  const { token } = useAuth();

  const handleBookmark = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await API.post(
        `/stories/${story._id}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      refreshStories();
    } catch (error) {
      alert(error.response?.data?.message || "Bookmark failed");
    }
  };

  return (
    <div className="glass-card story-card animate-fade-in">
      <a
        href={story.url}
        target="_blank"
        rel="noreferrer"
        className="story-link"
      >
        <h2 className="story-title">{story.title}</h2>
      </a>

      <div className="story-meta">
        <div className="meta-item">
          <span className="meta-label">Points:</span>
          <span className="meta-value">{story.points}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Author:</span>
          <span className="meta-value">{story.author}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Posted:</span>
          <span className="meta-value">{story.postedAt}</span>
        </div>
      </div>

      {token && (
        <div className="story-actions">
          <button onClick={handleBookmark} className="btn btn-bookmark">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
            Bookmark
          </button>
        </div>
      )}
    </div>
  );
};

export default StoryCard;