import API from "../api/axios";

import { useAuth } from "../context/AuthContext";

const StoryCard = ({ story, refreshStories }) => {

  const { token } = useAuth();

  const handleBookmark = async () => {
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
      alert(
        error.response?.data?.message ||
        "Bookmark failed"
      );
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "8px",
      }}
    >

      <a
        href={story.url}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <h2>{story.title}</h2>
      </a>

      <p>
        <strong>Points:</strong> {story.points}
      </p>

      <p>
        <strong>Author:</strong> {story.author}
      </p>

      <p>
        <strong>Posted:</strong> {story.postedAt}
      </p>

      {token && (
        <button onClick={handleBookmark}>
          Bookmark
        </button>
      )}

    </div>
  );
};

export default StoryCard;