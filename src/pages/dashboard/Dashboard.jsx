import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Dashboard() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-[#987542]">
            Workspace
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Manage your resumes and continue building your career profile.
          </p>
        </div>

        <Button>
          Create New Resume
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          ["Total Resumes", "0"],
          ["Completed Resumes", "0"],
          ["Recent Downloads", "0"],
        ].map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm text-zinc-500">{label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
              {value}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
