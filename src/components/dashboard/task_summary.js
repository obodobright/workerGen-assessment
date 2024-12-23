import { activityData, userData } from "@/data/user_data";
import { ReviewCard } from "../card/review_card";
import { ProgressBar } from "./progress_bar";
import { ActivityCard } from "../card/activity_card";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Indicator } from "../indicator";

export const TaskSummaryComponent = () => {
  return (
    <section className="w-full   shadow-lg  border b relative p-[2px] bg-gradient-to-r from-[#747CD0] via-[#8AB1DF] to-[#C2CCED] rounded-md">
      <div className="relative bg-white rounded-md p-4">
        <section className="grid md:grid-cols-2 gap-2 ">
          <h3 className="text-lg font-semibold ">
            Hi Mona, <span className="text-[#2E2B86]">68%</span> of goal achieved by focusing on 20
            top leads.{" "}
          </h3>
          <div>
            <ProgressBar />
          </div>
        </section>
        <section className="my-4 relative md:grid gap-5 items-start grid-cols-[50fr_23fr]">
          <div>
            <p className="text-sm font-normal mb-2 text-[#797979]">
              Copilot has pinpointed 20 key leads that show strong purchase intent and are actively
              engaging. These leads need your focus.
            </p>
            <div className="grid gap-2 md:grid-cols-2">
              {userData.map((user, index) => (
                <ReviewCard key={index} data={user} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium">Other Key Activities</h3>
            {activityData.map((data, index) => (
              <ActivityCard key={index} data={data} />
            ))}
            <button className="text-sm font-semibold text-[#2E2B86] ">
              Show all my key activites
            </button>
          </div>
          <div className="absolute bottom-3 left-1/3 ">
            <Indicator />
          </div>
        </section>
      </div>
    </section>
  );
};
