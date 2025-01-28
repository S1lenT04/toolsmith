import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col justify-center mt-8 px-4">
        <p className="text-center text-3xl font-bold max-w-[80%] mx-auto">
          Built to empower your{" "}
          <span className="bg-gradient-to-r from-slate-500 from-30% to-slate-200 dark:to-[#2D3848] to-90% bg-clip-text text-transparent">
            workflow.
          </span>
        </p>
        <p className="text-center mt-1 font-semibold text-neutral-700 dark:text-zinc-300">
          Discover ready-to-use components instantly. Customize, copy, and
          craft-your way!
        </p>

        <div className="w-full flex justify-center mt-6">
          <Link
            href={"/docs/button"}
            className="bg-slate-500 py-2 px-4 transition-all rounded-lg hover:rounded-[50px] ease-in-out duration-500 text-sm text-white hover:bg-slate-600"
          >
            Browse Components
          </Link>
        </div>
      </section>
    </>
  );
}
