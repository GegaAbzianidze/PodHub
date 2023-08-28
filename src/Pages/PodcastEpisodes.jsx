import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../API";
import EpisodeDesign from "../Components/SingleEposode/EpisodeDesign";
import { useDispatch, useSelector } from "react-redux";
import EpisodeSkeleton from "../Skeletons/EpisodeSkeleton";
import { setCurrentMedia, setIsPlaying } from "../Redux/slices/playerSlice";

const PodcastEpisodes = () => {
  const { id } = useParams();
  const [episodeData, setEpisodeData] = useState(null);

  useEffect(() => {
    async function fetchPodcastData() {
      if (id === null) {
        return; // Exit early if id is null
      }

      try {
        const response = await Api.EpisodesByID(id);
        setEpisodeData(response.data.items);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPodcastData();
  }, [id]);

  const dispatch = useDispatch();

  const { isPlaying } = useSelector((state) => state.player);

  const playFirstEpisode = () => {
    dispatch(setCurrentMedia(episodeData[0]));
    if (isPlaying) {
      setTimeout(() => {
        dispatch(setIsPlaying(true));
      }, 100);
    } else {
      dispatch(setIsPlaying(true));
    }
  };

  const { podcastData } = useSelector((state) => state.podcast);
  return (
    <>
      <div className="bg-yellow-400 w-full h-96 -mt-24"></div>
      <div className="grid place-items-center -mt-56">
        <div className="bg-white rounded-3xl w-[85%] shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 p-10">
            <div className="w-full">
              <div className="flex gap-4 flex-col md:flex-row">
                <img
                  src={
                    podcastData.image ||
                    podcastData.artwork ||
                    "https://th.bing.com/th/id/R.e72be9b9abde3e223f6b86f271d5a21e?rik=XKl2YPu%2bCida9A&riu=http%3a%2f%2fcdn.playbuzz.com%2fcdn%2f4e9898c8-60d7-4094-971f-fc8c42dd89cc%2f042164b5-944e-4444-8f9e-3de4115b8dbf.jpg&ehk=BQ8%2bZ1hSo7PdPDam6aWROaDxRc60Bnuq3l1HVuRBJzw%3d&risl=&pid=ImgRaw&r=0"
                  }
                  alt="cover"
                  className="rounded-3xl object-cover h-44"
                />
                <div className="flex flex-col justify-center gap-2">
                  <p className="text-md">{podcastData.date}</p>
                  <h1 className="text-3xl">{podcastData.title}</h1>
                  <div className="flex gap-3 mt- flex-col md:flex-row">
                    <button className="btn btn-neutral btn-wide" onClick={playFirstEpisode}>Play</button>
                    <button>Share</button>
                  </div>
                </div>
              </div>
              <p className="mt-12">{podcastData.description}</p>

              {episodeData ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                  {episodeData.map((itemL) => (
                    <EpisodeDesign key={itemL.id} item={itemL} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                  {Array.from({ length: 26 }, (_, index) => (
                    <div key={index}>
                      <EpisodeSkeleton />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastEpisodes;
