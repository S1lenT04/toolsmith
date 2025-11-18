const changelog = () => {
  const items = [
    {
      date: "September 3, 2024",
      title: "Announcing Projects on Frontend Roadmap",
    },
    {
      date: "August 28, 2024",
      title: "Build your leaning habits with learning streaks",
    },
    { date: "August 25, 2024", title: "Git and GitHub Roadmap" },
    {
      date: "August 22, 2024",
      title: "Submit your project solution and get feedback",
    },
    { date: "August 15, 2024", title: "Backend Project Ideas" },
    { date: "August 10, 2024", title: "Redis roadmap" },
    {
      date: "August 1, 2024",
      title: "Changelog page to help you stay in the loop",
    },
  ];

  return (
    <main>
      {/* Change Log */}
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <h2 className="text-4xl font-medium">Changelog</h2>
        <p className="text-stone-400 text-sm text-center">
          Here's everything we have shipped in the past few days
        </p>

        <div className="w-full flex flex-col items-center relative">
          <div className="relative">
            {items.map((i, index) => (
              <div
                key={index}
                className="items-center grid grid-cols-[42px_1fr] sm:grid-cols-[160px_42px_400px] py-3"
              >
                <p
                  key={i.date}
                  className="text-stone-400 sm:block hidden text-right text-xs mr-4"
                >
                  {i.date}
                </p>
                {index === 0 && (
                  <div className="w-[1.5px] h-full bg-slate-500 absolute top-0 sm:left-[165.5px] left-[5.5px]" />
                )}
                <div
                  key={index}
                  className="w-3 h-3 bg-slate-500 rounded-full z-10"
                ></div>
                <div className="flex flex-col">
                  <p
                    key={i.date}
                    className="text-stone-400 sm:hidden block text-xs"
                  >
                    {i.date}
                  </p>
                  <p key={i.title} className="font-semibold">
                    {i.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-slate-500 text-white py-2 px-6 text-sm rounded-lg hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200">
          Visit Complete Changelog
        </button>
      </div>
    </main>
  );
};

export default changelog;
