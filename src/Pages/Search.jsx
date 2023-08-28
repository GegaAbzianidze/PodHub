import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../API";
import PodcastCard from "../Components/PopularPodcastsFull/PodcastCard";
import PodcastSkeleton from "../Skeletons/PodcastSkeleton";

const Search = () => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        const response = await Api.SearchPodcasts(searchTerm);
        setSearchResults(response.data.feeds);
      } catch (error) {
        console.log(error);
      }
    }

    if (searchTerm) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className=" px-6 lg:px-40">
      <h1>Search Results for {searchTerm}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {searchResults ? (
          searchResults.map((item) => (
            <div key={item.id}>
              <PodcastCard item={item} />
            </div>
          ))
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index}>
                <PodcastSkeleton />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
