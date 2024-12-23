export const Indicator = () => {
  return (
    <section className="flex items-center gap-1">
      <div className="w-14 h-2 rounded-full bg-[#465A9E]"></div>
      {Array.from({ length: 4 }).map((data) => (
        <div className="w-2 cursor-pointer h-2 bg-[#E1E2E3] rounded-full" key={data}></div>
      ))}
    </section>
  );
};
