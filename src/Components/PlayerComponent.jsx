import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../Redux/slices/playerSlice";

const PlayerComponent = () => {
  const { currentMedia, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  console.log(currentMedia);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying === true) {
        audioRef.current.play().catch((error) => {
          console.log("Failed to play audio:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime);
      });
    }
  }, [currentMedia]);

  const handleTogglePlay = () => {
    if (audioRef.current) {
      dispatch(setIsPlaying(!isPlaying));
    }
  };

  const handleVolumeChange = (event) => {
    const { value } = event.target;
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };
  return (
    <div>
      {currentMedia && (
        <div className="fixed bottom-0 left-0 right-0 bg-white">
          <div className="bg-gray-400 h-1 rounded">
            <div
              className="bg-[#0454d6] h-1 rounded"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {currentMedia.feedImage || currentMedia.image ? (
                <img
                  src={currentMedia.feedImage || currentMedia.image}
                  alt={currentMedia.title}
                  className="h-20 object-cover"
                />
              ) : null}

              <div>
                <div className="w-32 overflow-hidden">
                  <marquee
                    behavior="scroll"
                    direction="left"
                    scrollamount="2"
                    className="px-3"
                  >
                    <h1>{currentMedia.title}</h1>
                  </marquee>
                </div>
                {currentMedia.persons && (
                  <div className="w-32 overflow-hidden">
                    <marquee
                      behavior="scroll"
                      direction="left"
                      scrollamount="2"
                      className="px-3"
                    >
                      <p className="px-3 text-gray-400">
                        {currentMedia.persons[0].name}
                        {currentMedia.persons[1]?.name &&
                          ` and ${currentMedia.persons[1].name}`}
                      </p>
                    </marquee>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Icon
                icon="fluent:arrow-counterclockwise-48-regular"
                className="text-2xl text-gray-400  hidden md:block"
              />
              <Icon
                icon="fluent:skip-back-10-20-regular"
                className="text-2xl text-gray-400  hidden md:block"
              />
              <button
                onClick={handleTogglePlay}
                className="bg-[#0454d6] hover:bg-[#0243ab] rounded-full p-4 mr-1 md:mr-0"
              >
                {!isPlaying ? (
                  <Icon
                    icon="fluent:play-28-filled"
                    className="text-xl text-white"
                  />
                ) : currentTime === 0 ? (
                  <Icon
                    icon="fluent:spinner-ios-20-filled"
                    className="text-xl text-white animate-spin"
                  />
                ) : (
                  <Icon
                    icon="fluent:pause-28-filled"
                    className="text-xl text-white"
                  />
                )}
              </button>
              <Icon
                icon="fluent:skip-forward-10-20-regular"
                className="text-2xl text-gray-400  hidden md:block"
              />
              <button>
                <Icon
                  icon="fluent:bookmark-20-regular"
                  className="text-2xl text-gray-400  hidden md:block"
                />
              </button>
            </div>
            <div className="justify-center items-center gap-3 mr-2  hidden md:flex">
              <Icon
                icon="fluent:share-20-regular"
                className="text-2xl text-gray-400"
              />
              <Icon
                icon="fluent:speaker-1-20-regular"
                className="text-2xl text-gray-400"
              />
              <input
                type="range"
                min={0}
                max={1}
                step={0.1}
                defaultValue={1}
                onChange={handleVolumeChange}
                className="w-16"
              />
            </div>
          </div>
          <audio ref={audioRef} src={currentMedia.enclosureUrl} />
        </div>
      )}
    </div>
  );
};

export default PlayerComponent;
