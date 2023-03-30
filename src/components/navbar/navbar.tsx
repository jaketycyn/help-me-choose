import Link from "next/link";

export default function DesktopNavBar() {
  return (
    <>
      <div className="bg-surface-primary flex h-12 w-full min-w-fit items-center pl-2 pr-2">
        <div className="flex min-w-fit items-center space-x-2">
          <Link
            className="hover:text-content-accent font-semibold"
            href={`/sanctum/question/what-are-your-league-plans`}
          >
            <h3 className="mx-auto  flex h-8 w-20 flex-row items-center justify-center rounded-xl bg-neutral-800 text-center text-white hover:bg-neutral-600">
              Home
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}
