import Link from "next/link";

const Landingpage = () => {
  return (
    <div>
      <Link href={"patch"}>
        <button className="h-full w-full rounded-lg bg-zinc-900 p-4 text-2xl  font-semibold text-neutral-200 hover:bg-zinc-700">
          Help me find a leaguestarter
        </button>
      </Link>
    </div>
  );
};

export default Landingpage;
