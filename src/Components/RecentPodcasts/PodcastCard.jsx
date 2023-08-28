import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMedia, setIsPlaying } from "../../Redux/slices/playerSlice";

const PodcastCard = ({ item }) => {
  const timestamp = item.datePublished;
  const date = new Date(timestamp * 1000);
  const formattedDate = date.toLocaleDateString().replace(/\//g, ".");
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

  return (
    <div>
      <div className="w-full flex flex-col">
        <div className="">
          <img
            src={
              item.feedImage ||
              item.image ||
              "https://th.bing.com/th/id/R.e72be9b9abde3e223f6b86f271d5a21e?rik=XKl2YPu%2bCida9A&riu=http%3a%2f%2fcdn.playbuzz.com%2fcdn%2f4e9898c8-60d7-4094-971f-fc8c42dd89cc%2f042164b5-944e-4444-8f9e-3de4115b8dbf.jpg&ehk=BQ8%2bZ1hSo7PdPDam6aWROaDxRc60Bnuq3l1HVuRBJzw%3d&risl=&pid=ImgRaw&r=0"
            }
            alt={item.title}
            className="w-full h-full rounded-t-3xl"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-10 gap-14 bg-gray-100 rounded-b-3xl">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-md uppercase">
                <p>{formattedDate}</p>
              </p>
              <h1 className="text-lg font-bold text-black">{item.feedTitle}</h1>
            </div>
            <p className="text-ellipsis whitespace-nowrap overflow-hidden">
              {item.description
                ? item.description.replaceAll("<p>", "").replaceAll("</p>", "")
                : "No description available"}
            </p>
          </div>
          <div className="flex justify-between">
            <button onClick={handleTogglePlay}>Listen Now</button>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;

PodcastCard.propTypes = {
  item: PropTypes.object,
};
