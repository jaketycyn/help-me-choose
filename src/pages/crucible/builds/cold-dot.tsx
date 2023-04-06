import Link from "next/link";
import YouTube from "react-youtube";

const BuildPage = () => {
  const buildData = {
    name: "Cold DoT",
    description: `This build utilizes a variety of different cold skills to apply cold damage over time effects to bring down your enemies. You run around dropping areas of damaging cold This build is a solid bossing build but the map clear is not top end, though it's still respectable. Because this build is a damage over time build the DPS uptime is near constant which makes bossing very comfortable. There are a few different variants of this build (primarily elementalist, trickster and occultist), Elementalist has great clear and the highest damage, Trickster is more defensive focused and Occulist has easy access to explosions to boost clear.`,
    youtubeVideos: [
      {
        url: "qn-TwAXDwF0",
        creator: "Tripolar Bear",
        channelUrl: "https://www.youtube.com/@TripolarBear",
      },
      {
        url: "WHAUGGhJY4w",
        creator: "Zizaran",
        channelUrl: "https://www.youtube.com/@Zizaran",
      },
    ],
    youtubeVideosVariant: [
      {
        url: "C2IInQFreeY",
        creator: "Jungroan",
        channelUrl: "https://www.youtube.com/@jungroan",
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

      <Link
        href={"https://www.pathofexile.com/forum/view-thread/2661120"}
        legacyBehavior
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="  py-2 text-xl font-semibold text-neutral-200"
        >
          <button className="h-10 w-72 rounded-3xl bg-zinc-800 hover:bg-zinc-700">
            Shak Central - Poe Forum Link
          </button>
        </a>
      </Link>
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
      <h2 className="pt-10 pb-4 text-2xl font-semibold text-neutral-200">
        Trickster Variant
      </h2>
      {buildData.youtubeVideosVariant.map((video, index) => (
        <div key={index} className="py-4">
          <YouTube
            videoId={video.url}
            opts={opts}
            className="flex justify-center pb-4 "
          />
          <Link href={video.channelUrl} legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-xl font-semibold text-neutral-200"
            >
              <button className="h-10 w-40 rounded-3xl bg-zinc-800 hover:bg-zinc-700">
                {video.creator}
              </button>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BuildPage;
