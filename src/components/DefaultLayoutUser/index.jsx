import { Outlet } from "react-router-dom";
import { Sidbar } from "../Sidbar";


export function DefaultLayoutUser(){
    return (
        <main className="flex gap-5 bg-background h-screen ">
          <div>
            <Sidbar />
          </div>
            <Outlet />
        </main>
      );
}