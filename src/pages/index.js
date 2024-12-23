import { TaskSummaryComponent } from "@/components/dashboard/task_summary";
import { ComponentLayout } from "@/components/layouts";
import { TableComponent } from "@/components/table";

export default function Home() {
  return (
    <ComponentLayout>
      <div className="mt-20">
        <TaskSummaryComponent />
        <TableComponent />
      </div>
    </ComponentLayout>
  );
}
