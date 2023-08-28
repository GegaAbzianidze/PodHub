import axios from "axios";
import sha1 from "crypto-js/sha1";
import moment from "moment";

const generateAuthHeader = () => {
  const currentTimestamp = moment().unix();
  const authHeader = sha1(import.meta.env.VITE_API_KEY + import.meta.env.VITE_API_SECRET + currentTimestamp).toString();

  return {
    "X-Auth-Key": import.meta.env.VITE_API_KEY,
    "X-Auth-Date": currentTimestamp,
    Authorization: authHeader,
  };
};

const instance = axios.create({
  baseURL: "https://api.podcastindex.org/api/1.0",
  headers: {
    "User-Agent": "SuperPodcastPlayer/1.3",
    ...generateAuthHeader(),
  },
});

const Api = {
  RecentEpisodes: () =>
    instance({
      method: "GET",
      url: "/recent/episodes?pretty&max=3",
      headers: generateAuthHeader(),
    }),
  TrendingPodcasts: () =>
    instance({
      method: "GET",
      url: `/podcasts/trending?pretty&max=16`,
      headers: generateAuthHeader(),
    }),
  Category: (selectedCategory) =>
    instance({
      method: "GET",
      url: `/podcasts/trending?pretty&max=16&cat=${selectedCategory}`,
      headers: generateAuthHeader(),
    }),
  EpisodesByID: (id) =>
    instance({
      method: "GET",
      url: `/episodes/byfeedid?id=${id}&pretty`,
      headers: generateAuthHeader(),
    }),
  SearchPodcasts: (searchTerm) =>
    instance({
      method: "GET",
      url: `/search/byterm?q=${encodeURIComponent(searchTerm)}&pretty`,
      headers: generateAuthHeader(),
    }),
};

export default Api;
