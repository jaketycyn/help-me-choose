import Link from "next/link";
import YouTube from "react-youtube";

const ExplosiveArrowIgniteElementalistPage = (props) => {
  const buildData = {
    name: "Righteous Fire",
    description: `Righteous Fire is a build where you have a damaging fire aura that surrounds you, you clear maps by running head first into enemies and having them die to the damage over time effect surrounding you. This is a great build for those that wish to press less buttons while mapping. This build is very defensively strong and with investment scales into one of the tankiest builds in the game. This build can struggle for damage when it comes to late game bossing.`,
    youtubeVideos: [
      {
        url: "a3Tpggz5Lig",
        creator: "Pohx",
        channelUrl: "https://www.youtube.com/@PohxKappa",
      },
    ],
    youtubeVideosVariant: [
      {
        url: "UJfWk11D98k",
        creator: "Zizaren",
        channelUrl: "https://www.youtube.com/@Zizaran",
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

      <Link href={"https://www.pohx.net/FAQ"} legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="  py-2 text-xl font-semibold text-neutral-200"
        >
          <button className="h-10 w-72 rounded-3xl bg-zinc-800 hover:bg-zinc-700">
            Pohx RF Wiki - FAQ
          </button>
        </a>
      </Link>
      <div className="mx-auto grid grid-cols-1 items-center justify-center space-x-4 px-8 lg:grid-cols-1 lg:px-20">
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

export default ExplosiveArrowIgniteElementalistPage;
