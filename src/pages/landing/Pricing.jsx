import Card from "../../components/ui/Card";

function Pricing() {
  return (
    <div className="page-container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-[#987542]">
          Pricing
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Simple, transparent pricing.
        </h1>

        <p className="mt-4 text-zinc-500">
          Pricing experience will be completed as part of the landing page stage.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-md">
        <Card>
          <p className="text-lg font-semibold">Resume Builder</p>
          <p className="mt-2 text-sm text-zinc-500">
            Premium resume creation experience.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Pricing;
