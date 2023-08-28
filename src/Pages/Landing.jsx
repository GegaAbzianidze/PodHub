import BottomComponents from "../Components/BottomComponents";
import ListPodcasts from "../Components/RecentPodcasts/ListPodcasts";
import ListPodcastsP from "../Components/PopularPodcasts/ListPodcasts";
import Popular from "../Components/Popular";

const Landing = () => {
  return (
    <>
      <Popular />
      <ListPodcastsP />
      <BottomComponents />
      <ListPodcasts />
    </>
  );
};

export default Landing;
