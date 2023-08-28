import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMedia, setIsPlaying } from "../../Redux/slices/playerSlice";

const EpisodeDesign = ({ item }) => {
  function formatTime(duration) {
    if (!duration || isNaN(duration)) {
      return <div className="w-16 h-3 bg-slate-200 animate-pulse"></div>;
    }

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    if (hours > 0) {
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  }

  const dispatch = useDispatch();

  const { isPlaying } = useSelector((state) => state.player);

  const handleTogglePlay = () => {
    console.log(item);
    dispatch(setCurrentMedia(item));
    if (isPlaying) {
      setTimeout(() => {
        dispatch(setIsPlaying(true));
      }, 100);
    } else {
      dispatch(setIsPlaying(true));
    }
  };

  const formattedDuration = formatTime(item.duration);

  return (
    <div
      className="flex gap-2 p-3 border w-full rounded-3xl"
      onClick={handleTogglePlay}
    >
      <img
        src={
          item.feedImage ||
          item.image ||
          "https://th.bing.com/th/id/R.e72be9b9abde3e223f6b86f271d5a21e?rik=XKl2YPu%2bCida9A&riu=http%3a%2f%2fcdn.playbuzz.com%2fcdn%2f4e9898c8-60d7-4094-971f-fc8c42dd89cc%2f042164b5-944e-4444-8f9e-3de4115b8dbf.jpg&ehk=BQ8%2bZ1hSo7PdPDam6aWROaDxRc60Bnuq3l1HVuRBJzw%3d&risl=&pid=ImgRaw&r=0"
        }
        alt="cover"
        className="h-20 rounded-lg"
      />
      <div className="flex flex-col justify-center gap-1">
        <p>{formattedDuration}</p>
        <h1
          className="lg:text-xl w-36 text-ellipsis whitespace-nowrap overflow-hidden"
          title={item.title}
        >
          {item.title}
        </h1>
      </div>
    </div>
  );
};

export default EpisodeDesign;

EpisodeDesign.propTypes = {
  item: PropTypes.object,
};
