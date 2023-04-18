import { NavLink, useParams } from "react-router-dom";

export function RoadCore() {
  const params = useParams();
  console.log(params);
  return (
    <section className="w-full overflow-y-scroll ">
      <header className="flex justify-between pr-5 pt-8 pb-8 items-center">
        <nav>
          <NavLink to={"/rodovias"}>
            <strong className="text-2xl">Rodovias </strong>
          </NavLink>
          <NavLink to={"/rodovias"}>
            <strong className="text-2xl"> NR-{params.id}</strong>
          </NavLink>
        </nav>
        <input type="text" />
      </header>
    </section>
  );
}
