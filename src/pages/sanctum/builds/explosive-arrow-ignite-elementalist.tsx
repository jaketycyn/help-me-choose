import Link from "next/link";
import YouTube from "react-youtube";

const ExplosiveArrowIgniteElementalistPage = (props) => {
  const buildData = {
    name: "Explosive Arrow Ignite Elementalist",
    description: `This build is a totem build with excellent DPS, an easy gear curve and
        great damage. Because this build is a totem build it's great for players
        who find boss mechanics difficult as, like minions, it does damage
        without you having to be constantly targeting the boss - simply place
        the totems down and dodge. This build is excellent in both trade and SSF
        with the primary weapon for this build is a multimod weapon that uses a
        base that you can farm (Porcupine) and is crafted with essences. This
        build does have two delays in its damage, there is a wait time as totems
        "arm" themselves and a delay before the arrows explode.`,
    youtubeVideos: [
      {
        url: "grWNV7YLvIc",
        creator: "Palsteron",
        channelUrl: "https://www.youtube.com/@Palsteron",
      },
      {
        url: "-vLLTc1ytHU",
        creator: "Lighty",
        channelUrl: "https://www.youtube.com/@LightyGaming",
      },
    ],
    youtubeVideosVariant: [
      {
        url: "KLFV3L4eQ7A",
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
      <h1 className=" pt-4 pb-4 text-center text-3xl font-semibold text-neutral-200">
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
      <h2 className="pt-10 pb-4 text-2xl font-semibold text-neutral-200">
        Hardcore Variant (Champion)
      </h2>
      {buildData.youtubeVideosVariant.map((video, index) => (
        <div key={index}>
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
