import { useParams } from "react-router-dom";

function TemplateDetails() {
  const { templateId } = useParams();

  return (
    <div className="page-container py-20">
      <p className="text-sm text-[#987542]">Template</p>

      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        {templateId}
      </h1>

      <p className="mt-4 text-zinc-500">
        Detailed template preview will be implemented in the template system stage.
      </p>
    </div>
  );
}

export default TemplateDetails;
