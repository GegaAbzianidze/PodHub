import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerComponent from "./Components/PlayerComponent";

const Landing = lazy(() => import("./Pages/Landing"));
const PodcastEpisodes = lazy(() => import("./Pages/PodcastEpisodes"));
const PopularPodcasts = lazy(() => import("./Pages/PopularPodcasts"));
const Search = lazy(() => import("./Pages/Search"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} exact />
            <Route path="/episodes/:id" element={<PodcastEpisodes />} />
            <Route path="/podcasts" element={<PopularPodcasts />} />
            <Route path="/search/:searchTerm" element={<Search />} />
            {/* <Route path="/categories" element={<Categories />} /> */}
          </Routes>
        </Suspense>
        <PlayerComponent />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
