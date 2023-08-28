import { useEffect, useState } from "react";
import PodcastCard from "./PodcastCard";
import Api from "../../API";
import PodcastSkeleton from "../../Skeletons/PodcastSkeleton";

const ListPodcasts = () => {
  const [podcastData, setPodcastData] = useState(null);
  useEffect(() => {
    async function fetchPodcastData() {
      try {
        const response = await Api.RecentEpisodes();
        setPodcastData(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPodcastData();
  }, []);
  if (!podcastData) {
    return (
      <div className=" px-6 lg:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index}>
            <PodcastSkeleton />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className=" px-6 lg:px-40">
      <div className="flex py-4 items-center">
        <h1 className="text-2xl">Recent Episodes</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {podcastData.map((item) => (
          <div key={item.id}>
            <PodcastCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPodcasts;
