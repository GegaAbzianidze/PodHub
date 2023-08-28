import { useEffect, useState } from "react";
import Api from "../API";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPodcastData } from "../Redux/slices/podcastSlice";

const Popular = () => {
  const [podcastDataL, setPodcastDataL] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPodcastData() {
      try {
        const response = await Api.TrendingPodcasts();

        setPodcastDataL(response.data.feeds[0]);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPodcastData();
  }, []);
  const dispatch = useDispatch();

  const handlePodcastRedirect = () => {
    navigate(`/episodes/${podcastDataL.id}`);
    dispatch(setPodcastData(podcastDataL));
  };
  return (
    <div className="w-full px-3 md:px-36 flex flex-col md:flex-row md:h-[600px]">
      <div className="md:w-3/5">
        <img
          src={
            podcastDataL.image ||
            podcastDataL.artwork ||
            "https://th.bing.com/th/id/R.e72be9b9abde3e223f6b86f271d5a21e?rik=XKl2YPu%2bCida9A&riu=http%3a%2f%2fcdn.playbuzz.com%2fcdn%2f4e9898c8-60d7-4094-971f-fc8c42dd89cc%2f042164b5-944e-4444-8f9e-3de4115b8dbf.jpg&ehk=BQ8%2bZ1hSo7PdPDam6aWROaDxRc60Bnuq3l1HVuRBJzw%3d&risl=&pid=ImgRaw&r=0"
          }
          alt={podcastDataL.title}
          className="w-full h-full object-cover md:rounded-s-3xl rounded-s-none "
        />
      </div>
      <div className="md:w-2/5 flex flex-col justify-center p-5 lg:px-16 gap-5 bg-gray-100 md:rounded-e-3xl rounded-e-none">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-md uppercase">Latest Episodes</p>
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-black">
              {podcastDataL.title}
            </h1>
          </div>
          <p>{podcastDataL.description}</p>
        </div>
        <div className="flex justify-between">
          <button onClick={handlePodcastRedirect}>View Episodes</button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
