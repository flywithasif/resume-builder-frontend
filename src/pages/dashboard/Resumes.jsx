import EmptyState from "../../components/ui/EmptyState";
import Button from "../../components/ui/Button";

function Resumes() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[#987542]">
            Workspace
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
            My Resumes
          </h1>
        </div>

        <Button>Create Resume</Button>
      </div>

      <div className="mt-6 rounded-2xl border border-stone-200 bg-white">
        <EmptyState
          title="No resumes yet"
          description="Create your first resume and start building a polished professional profile."
          action={<Button>Create Your First Resume</Button>}
        />
      </div>
    </div>
  );
}

export default Resumes;
