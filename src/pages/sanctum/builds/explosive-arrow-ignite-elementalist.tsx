import YouTube, { YouTubeProps } from "react-youtube";

const ExplosiveArrowIgniteElementalistPage = (props) => {
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div className="h-fit bg-zinc-800 text-center">
      {/* Build Slot */}
      <h1 className=" pt-4 pb-4 text-center text-3xl font-semibold text-neutral-200">
        Explosive Arrow Ignite Elementalist
      </h1>
      {/* Description */}
      <h3 className="lg:neutraltext-neutral-200 px-10 py-4 font-semibold text-neutral-200 md:px-20">
        This build is a totem build with excellent DPS, an easy gear curve and
        great damage. Because this build is a totem build it’s great for players
        who find boss mechanics difficult as, like minions, it does damage
        without you having to be constantly targeting the boss - simply place
        the totems down and dodge. This build is excellent in both trade and SSF
        with the primary weapon for this build is a multimod weapon that uses a
        base that you can farm (Porcupine) and is crafted with essences. This
        build does have two delays in its damage, there is a wait time as totems
        “arm” themselves and a delay before the arrows explode.
      </h3>
      <div className="mx-auto grid grid-cols-1 items-center justify-center space-x-4 px-8 lg:grid-cols-2 lg:px-20">
        <div>
          <YouTube
            videoId="grWNV7YLvIc"
            opts={opts}
            className="flex justify-center  "
          />
          <h4 className="py-2 text-xl font-semibold text-neutral-200">
            Palsteron
          </h4>
        </div>
        <div>
          <YouTube
            videoId="-vLLTc1ytHU"
            opts={opts}
            className="flex justify-center"
          />
          <h4 className="py-2 text-xl font-semibold text-neutral-200">
            Lighty
          </h4>
        </div>
      </div>
      {/* hardcore variant slot */}
      <h2 className="pt-10 pb-4 text-2xl font-semibold text-neutral-200">
        Hardcore Variant (Champion)
      </h2>
      <div>
        <YouTube
          videoId="KLFV3L4eQ7A"
          opts={opts}
          className="flex justify-center "
        />
        <h4 className="py-2 text-xl font-semibold text-neutral-200">Zizaren</h4>
      </div>
    </div>
  );
};

export default ExplosiveArrowIgniteElementalistPage;
