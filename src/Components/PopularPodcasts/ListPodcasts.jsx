import { useEffect, useState } from "react";
import PodcastCard from "./PodcastCard";
import Api from "../../API";
import { useNavigate } from "react-router-dom";
import PodcastSkeleton from "../../Skeletons/PodcastSkeleton";

const ListPodcastsP = () => {
  const [podcastData, setPodcastData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPodcastData() {
      try {
        const response = await Api.TrendingPodcasts();

        setPodcastData(response.data.feeds);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPodcastData();
  }, []);

  if (podcastData === null) {
    return (
      <div className="px-6 lg:px-40">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-2xl">Popular Episodes</h1>
          <button
            className="bg-gray-100 rounded-full px-2"
            onClick={() => navigate("/podcasts")}
          >
            All Episodes
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index}>
              <PodcastSkeleton />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-40">
      <div className="flex justify-between py-4 items-center">
        <h1 className="text-2xl">Popular Episodes</h1>
        <button
          className="bg-gray-100 rounded-full px-2"
          onClick={() => navigate("/podcasts")}
        >
          All Episodes
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {podcastData.slice(1, 4).map((item) => (
          <div key={item.id}>
            <PodcastCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPodcastsP;
