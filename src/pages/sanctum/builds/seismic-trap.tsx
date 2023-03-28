import Link from "next/link";
import YouTube from "react-youtube";

const ExplosiveArrowIgniteElementalistPage = () => {
  const buildData = {
    name: "Seismic Trap",
    description: `Seismic Trap is a build that utilizes two skills, one for clear (exsanguinate traps) and one for single target damage (seismic trap). The build is a trap build so that means you'll be throwing out traps which will detonate themselves targeting enemies around them. For the purpose of this section of the index we will be including mostly just the poison variant of this build as it's the most league start friendly but it can transition into a crit based version with some investment. This build excels at single target damage and has decent clear, though you may struggle against moving bosses.`,
    youtubeVideos: [
      {
        url: "IRC9wSHSVKs",
        creator: "Zizaren",
        channelUrl: "https://www.youtube.com/@Zizaran",
      },
      {
        url: "VlxRvimLc0c",
        creator: "Jungroan",
        channelUrl: "https://www.youtube.com/@jungroan",
      },
    ],
    youtubeVideosVariant: [
      {
        url: "PfDqogjBdxo",
        creator: "Tripolar Bear",
        channelUrl: "https://www.youtube.com/@TripolarBear",
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
      <h4 className="text-md pt-20 text-center font-semibold italic text-neutral-200">
        You know better than me to ask what is best{" "}
      </h4>
      <h1 className="pt-2  pb-4 text-center text-3xl font-semibold text-neutral-200">
        {buildData.name}
      </h1>

      {/* Description */}
      <h3 className=" lg:px-1/2 px-10 py-4 font-semibold text-neutral-200 md:px-72">
        {buildData.description}
      </h3>
      {/* Main Videos */}

      <Link href={"RkzMXdBPX92okCLNaq_mkMBJttV04"} legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="  py-2 text-xl font-semibold text-neutral-200"
        >
          <button className="h-10 w-72 rounded-3xl bg-zinc-800 hover:bg-zinc-700">
            Ventrua - Seismic Bible
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
        Poison Variant
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

export default ExplosiveArrowIgniteElementalistPage;
