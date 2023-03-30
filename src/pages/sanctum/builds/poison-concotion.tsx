import Link from "next/link";
import YouTube from "react-youtube";

const ExplosiveArrowIgniteElementalistPage = () => {
  const buildData = {
    name: "Poison Concoction",
    description: `Poisonous Concoction is a skill which throws out poisonous vials that cause overlapping explosions which can stack up poison very quickly. It is a build requiring very little gear to get going (as part of the skill you can not use a weapon at all), since this build scales its damage off your life flask a solid version of this build can come online very quickly as well as clearing the campaign very comfortably. This build uses Plague Bearer for rapid clear as it zooms through maps. There are two common variants of this build, the Pathfinder and the Occultist versions. This build can struggle with single target in the late game but as long as you’re comfortable with boss mechanics can carry you through to 4 watchstones at great speed.`,
    youtubeVideos: [
      {
        url: "30eBAGJvB84",
        creator: "Asmodeus",
        channelUrl: "https://www.youtube.com/@AsmodeusClips",
      },
      {
        url: "RACrehjy_Xg",
        creator: "Subtractem",
        channelUrl: "https://www.youtube.com/@subtractem",
      },
    ],
    youtubeVideosVariant: [
      {
        url: "UJfWk11D98k",
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

      <Link
        href={
          "https://maxroll.gg/poe/build-guides/poisonous-concoction-pathfinder-league-starter-guide"
        }
        legacyBehavior
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="  py-2 text-xl font-semibold text-neutral-200"
        >
          <button className="h-10 w-72 rounded-3xl bg-zinc-800 hover:bg-zinc-700">
            Palsteron MaxRoll Article
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
    </div>
  );
};

export default ExplosiveArrowIgniteElementalistPage;
