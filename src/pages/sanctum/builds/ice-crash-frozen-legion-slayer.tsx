import Link from "next/link";
import YouTube from "react-youtube";

const BuildPage = () => {
  const buildData = {
    name: "Frozen Legion (Slayer / Chieftan)",
    description: `New Skill - Play at your own risk`,
    youtubeVideos: [
      {
        url: "IOUWX4cnSXU",
        creator: "CaptainLance",
        channelUrl: "https://www.youtube.com/@CaptainLance9",
      },
      {
        url: "WuFzMh_wf8E",
        creator: "Mathil",
        channelUrl: "https://www.youtube.com/@Mathilification",
      },
    ],
    youtubeVideosVariant: [
      {
        url: "KLFV3L4eQ7A",
        creator: "Zizaran",
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
      <div className="mx-auto grid grid-cols-1 items-center justify-center space-x-4 px-8 lg:grid-cols-2 lg:px-20">
        {buildData.youtubeVideos.map((video, index) => (
          <div key={index}>
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
