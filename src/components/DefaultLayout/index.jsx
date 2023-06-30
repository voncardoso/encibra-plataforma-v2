import { Outlet } from "react-router-dom";
import { Sidbar } from "../Sidbar";

export function DefaultLayout() {
  return (
    <main className="flex bg-background h-screen ">
      <div>
        <Sidbar />
      </div>
        <Outlet />
    </main>
  );
}
