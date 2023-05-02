import { NavLink } from "react-router-dom";
import {
  Notebook,
  Truck,
  Gear,
  SignIn,
  ChartBar,
  Calculator,
  CaretRight,
  Users,
} from "@phosphor-icons/react";
import Logo from "../../assets/Logo-sidbar.svg";
import LogoMobile from "../../assets/LogoSidbarMin.svg";
import { Container } from "./style";

export function Sidbar() {
  return (
    <Container className="bg-white w-48 h-screen md:w-20 relative">
      <img className="md:hidden m-auto pt-5" src={Logo} alt="" />
      <ul className="m-auto pt-5 w-40 md:w-16">
        {/**
           * <NavLink h className="md:hidden md:w-16 md:m-auto py-2.5 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md" href="/dasborad">
              <ChartBar className="ml-2" size={24} />
              <p className="md:hidden md:m-auto">Dasboard</p>
            </NavLink> 
          */}

        <NavLink
          className={` md:hidden md:w-16 md:m-auto mb-1 py-2.5 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md`}
          to="/rodovias"
        >
          <Truck className="ml-2" size={24} />
          <p className="md:hidden md:m-auto">Rodovias</p>
        </NavLink>
        <li className="md:hidden md:w-16 md:m-auto  mb-1 py-2.5 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md   ">
          <Calculator className="ml-2" size={24} />
          <p className="md:hidden md:m-auto">IGG</p>
        </li>
        <li className="md:hidden md:w-16 md:m-auto mb-1 py-2.5  font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md   ">
          <Notebook className="ml-2" size={24} />
          <p className="md:hidden  md:invisible">Contratos</p>
        </li>
        <NavLink
          className={` md:hidden md:w-16 md:m-auto mb-1 py-2.5 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md`}
          to="/user"
        >
          <Truck className="ml-2" size={24} />
          <p className="md:hidden md:m-auto">Usuários</p>
        </NavLink>

        {/** mobile */}
        <img className="hidden md:block m-auto pb-4" src={LogoMobile} alt="" />

        <li className="hidden md:block md:w-14 md:m-auto md:py-3 md:font-medium  md:cursor-pointer md:text-gray-400 md:hover:bg-gold-200 md:hover:text-gold-400 rounded-md">
          <ChartBar className="m-auto " size={28} />
        </li>
        <li className="hidden md:block md:w-14 md:m-auto py-3 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md    ">
          <Truck className="m-auto w-8" size={28} />
        </li>
        <li className="hidden md:block md:w-14 md:m-auto py-3 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md   ">
          <Calculator className="m-auto" size={28} />
        </li>
        <li className="hidden md:block md:w-14 md:m-auto py-3  font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md   ">
          <Notebook className="m-auto" size={28} />
        </li>
      </ul>

      <div className="absolute bottom-0 flex w-full p-2 md:hidden">
        <div className="m-auto flex p-2 border border-gray-400 gap-2 items-center rounded-md cursor-pointer">
          <img src="" alt="" />
          <div>
            <strong>Von Harrison</strong>
            <p className="text-xs">Desenvolvedor</p>
          </div>
          <CaretRight color="#A8A8A8" weight="bold" />
        </div>
      </div>
      {/** */}
      <div className=" hidden md:block absolute bottom-0 flex w-full p-2">
        <div className="m-auto flex p-2 border border-gray-400 gap-2 items-center rounded-md cursor-pointer">
          <div>
            <strong className="bg-gray-400 p-1 rounded-full">VH</strong>
          </div>
          <CaretRight color="#A8A8A8" size={24} weight="bold" />
        </div>
      </div>
    </Container>
  );
}
