import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Landingpage = (props: any) => {
  // const gameData = [
  //   {
  //     id: 1,
  //     name: "Elden Ring",
  //     image: "/gamecovers/eldenring_01.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "God of War: Ragnarok",
  //     image: "/gamecovers/godofwarragnarok.jpg",
  //   },
  // ];
  const [isLoading, setLoading] = useState(true);
  return (
    <div>
      <div className="grid grid-cols-3">
        {/* {gameData.map((game, index) => {
          return (
            <div key={game.id}>
              <Image
                src={game.image}
                alt={game.name}
                width="240"
                height="240"
                style={{ objectFit: "contain" }}
                className={cn(
                  "h-auto w-full duration-700 ease-in-out group-hover:scale-110",
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                )}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
          );
        })}
      */}
      </div>
      <Link href={"/sanctum/question/what-are-your-league-plans"}>
        <button className="h-full w-full rounded-lg bg-zinc-900 p-4 text-2xl  font-semibold text-neutral-200 hover:bg-zinc-700">
          Help me find a leaguestarter
        </button>
      </Link>
      landingpage
    </div>
  );
};

export default Landingpage;
