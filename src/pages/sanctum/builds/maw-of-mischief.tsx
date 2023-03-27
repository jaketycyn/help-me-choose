import Link from "next/link";
import YouTube from "react-youtube";

const BuildPage = (props) => {
  const buildData = {
    name: "Maw of Mischief",
    description: "",
    youtubeVideos: [
      {
        url: "kYprS6wMyns",
        creator: "Tripolar Bear",
        channelUrl: "https://www.youtube.com/@TripolarBear",
      },
      {
        url: "https://www.youtube.com/watch?v=Bj90jl_GA50",
        creator: "Palsteron",
        channelUrl: "https://www.youtube.com/@Palsteron",
      },
    ],
  };

  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="h-fit  text-center">
      {/* Build Slot */}
      <h1 className=" pt-20 pb-4 text-center text-3xl font-semibold text-neutral-200">
        {buildData.name}
      </h1>
      {/* Description */}
      <h3 className=" lg:px-1/2 px-10 py-4 font-semibold text-neutral-200 md:px-72">
        {buildData.description}
      </h3>
      {/* Main Videos */}
      <div className="mx-auto grid grid-cols-1 items-center justify-center space-x-4 px-8 lg:grid-cols-2 lg:px-20">
        {buildData.youtubeVideos.map((video, index) => (
          <div key={index} className="py-4">
            <YouTube
              videoId={video.url}
              opts={opts}
              className="flex justify-center  pb-4 "
            />
            <Link href={video.channelUrl} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="  py-2 text-xl font-semibold text-neutral-200"
              >
                <button className="h-10 w-40 rounded-3xl bg-zinc-800 hover:bg-zinc-700">
                  {video.creator}
                </button>
              </a>
            </Link>
          </div>
        ))}
      </div>
      {/* hardcore variant slot */}
    </div>
  );
};

export default BuildPage;
