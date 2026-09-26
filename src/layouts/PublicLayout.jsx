import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#f8f8f6] text-zinc-900">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;