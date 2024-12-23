import { TfiTimer } from "react-icons/tfi";

export const ProgressBar = () => {
  return (
    <div className="w-full">
      <section>
        <div className="flex items-center justify-between mb-2 ">
          <div className="flex items-center gap-1">
            <TfiTimer color="" fontSize={12} />
            <p className="text-[#ACACAE] text-sm font-medium">1 month until Q4 ends</p>
          </div>
          <div className="flex text-sm items-center justify-start gap-12">
            <p className="font-medium ">
              Target: <span className="text-black font-semibold">$45million</span>
            </p>
            <p className="text-[#ACACAE] font-medium">68% of target achieved</p>
          </div>
        </div>

        <div className="h-2 border bg-[#F1F1F6] rounded-full relative">
          <div className="w-2/6 z-30 bg-[#A6C9A4] absolute h-full rounded-full"></div>
          <div className="w-2/4 z-20 bg-[#86AFE8] absolute h-full rounded-full"></div>
          <div className="w-2/3 z-10 bg-[#E3ACFF] absolute h-full rounded-full"></div>
          <div className=" w-5/6 bg-[#FBC887] absolute h-full rounded-full"></div>
          {/*  */}
        </div>
        <div className="mt-3 flex items-center gap-5">
          <ProgressBarSts bg="#A6C9A4" statsValue="Won $18m" />
          <ProgressBarSts bg="#86AFE8" statsValue=" Committed $8m" />
          <ProgressBarSts bg="#E3ACFF" statsValue="Best case $7m" />
          <ProgressBarSts bg="#FBC887" statsValue="Qualified $3m" />
          <ProgressBarSts bg="#E3E3E3" statsValue="Leads $75m" />
        </div>
      </section>
    </div>
  );
};

export const ProgressBarSts = ({ bg, statsValue }) => {
  return (
    <div className="flex items-center gap-1">
      <div style={{ background: bg }} className="h-3 w-3 rounded-full "></div>
      <p className="text-[9px] font-semibold text-[#ACACAE]"> {statsValue}</p>
    </div>
  );
};
