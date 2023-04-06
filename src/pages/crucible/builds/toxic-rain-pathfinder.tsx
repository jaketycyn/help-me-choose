import Image from "next/image";
import Link from "next/link";
import YouTube from "react-youtube";
import { useRouter } from "next/router";

const BuildPage = () => {
  const router = useRouter();
  const buildData = {
    name: "Toxic Rain  Pathfinder",
    description: "",
    youtubeVideos: [
      {
        url: "W20G6bZJqR4",
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
        <div className="pt-20">
          <button
            className=" h-20 w-72 rounded-md bg-zinc-800 font-semibold text-neutral-200 hover:bg-zinc-700"
            onClick={() => router.push("/crucible/question/what-kind-of-dot")}
          >
            <div className="mx-auto flex flex-row items-center justify-center p-2 text-center ">
              <Image
                src="/prayge.png"
                alt="copium.jpg"
                width={70}
                height={70}
                className="mb-2 "
              />
              Please anything but chaos dot
            </div>
          </button>
        </div>
      </div>
      {/* hardcore variant slot */}
    </div>
  );
};

export default BuildPage;
