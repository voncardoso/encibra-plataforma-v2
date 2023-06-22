import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Notebook,
  Truck,
  ChartBar,
  Calculator,
  CaretRight,
  Users,
  Browser,
  SignOut,
  User
} from "@phosphor-icons/react";
import Logo from "../../assets/Logo-sidbar.svg";
import LogoMobile from "../../assets/LogoSidbarMin.svg";
import { Container } from "./style";
import { useContext, useEffect } from "react";
import { UserContextLogin } from "../../Context/useContextLogin";

export function Sidbar() {
  const navigate = useNavigate();
  const {dataUser, getUserId} = useContext(UserContextLogin);
  const nameMobile = dataUser?.name;
  const partesName = String(nameMobile).split(" ");
  const firsLetterName = partesName[0]?.charAt(0)?.toUpperCase();
  const firstLetterLastName = partesName[1]?.charAt(0)?.toUpperCase();

  useEffect(() =>{
    getUserId()
  },[])

  function LogoOut(){
    window.localStorage.removeItem("encibraapptoken-v2")
    window.localStorage.removeItem("ncibraappId-v2")
    navigate("/")
  }

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
        
        {/**
         * <li className="md:hidden md:w-16 md:m-auto  mb-1 py-2.5 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md   ">
            <Calculator className="ml-2" size={24} />
            <p className="md:hidden md:m-auto">IGG</p>
          </li> 
        */}

        {/**
         * <li className="md:hidden md:w-16 md:m-auto mb-1 py-2.5  font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md   ">
            <Notebook className="ml-2" size={24} />
            <p className="md:hidden  md:invisible">Contratos</p>
          </li>
         */}
        
        {dataUser?.position === "ADMIN" && <NavLink
          className={` md:hidden md:w-16 md:m-auto mb-1 py-2.5 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md`}
          to="/user"
        >
          <Users className="ml-2" size={24} />
          <p className="md:hidden md:m-auto">Usuários</p>
        </NavLink>}

        {dataUser?.position === "ADMIN" &&
          <NavLink
            className={` md:hidden md:w-16 md:m-auto mb-1 py-2.5 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md`}
            to="https://fantastic-otter-f1d37a.netlify.app"
          >
            <Browser className="ml-2" size={24} />
            <p className="md:hidden md:m-auto">Site Antigo</p>
          </NavLink>
        }

        {dataUser?.position === "ANALYST_ENGINEER" && 
          <Link
          className={` md:hidden md:w-16 md:m-auto mb-1 py-2.5 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md`}
          to="https://fantastic-otter-f1d37a.netlify.app"
        >
          <Browser className="ml-2" size={24} />
          <p className="md:hidden md:m-auto">Site Antigo</p>
        </Link>
        }

        {/** mobile */}
        <div className="flex flex-col gap-1">
        <img className="hidden md:block m-auto pb-4" src={LogoMobile} alt="" />

          {/**
           *  <NavLink className="hidden md:block md:w-14 md:m-auto md:py-3 md:font-medium  md:cursor-pointer md:text-gray-400 md:hover:bg-gold-200 md:hover:text-gold-400 rounded-md">
             <ChartBar className="m-auto " size={28} />
           </NavLink>
           */}
           <NavLink to="/rodovias" className=" hidden md:block md:w-14 md:m-auto py-3 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md    ">
             <Truck className="m-auto w-8" size={28} />
           </NavLink>
         
           {/**
            * <li  className="hidden md:block md:w-14 md:m-auto py-3 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md   ">
             <Calculator className="m-auto" size={28} />
           </li>
            */}

           {dataUser?.position === "ADMIN" &&         
           <NavLink to="/user" className=" hidden md:block md:w-14 md:m-auto py-3  font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md   ">
             <Notebook className="m-auto " size={28} />
           </NavLink>}

           <NavLink to="https://fantastic-otter-f1d37a.netlify.app" className=" hidden md:block md:w-14 md:m-auto py-3 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md    ">
             <Browser className="m-auto w-8" size={28} />
           </NavLink>
        </div>
      </ul>
      
      <div className="absolute bottom-0 flex flex-col w-full p-2 md:hidden">
        <button
          className={`m-auto w-40 md:hidden md:w-16 md:m-auto mb-1 py-2.5 font-medium flex items-center gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md`}
          onClick={() =>{
            LogoOut()
          }}
        >
          <SignOut className="ml-2" size={24} />
          <p className="md:hidden md:m-auto">Sair</p>
        </button>
        
        <div className="m-auto w-40 flex p-2 border border-gray-400 gap-2 items-center rounded-md cursor-pointer">
          <User color="#A8A8A8" size={24} weight="duotone" />
          <div>
            <strong>{dataUser.name}</strong>
            <p className="text-xs">{dataUser?.position}</p>
          </div>
        </div>
      </div>
      {/** */}
      <div className=" hidden md:block absolute bottom-0 flex  w-full p-2">
        <button onClick={() =>{
          LogoOut()
        }} className="hidden md:block md:w-14 md:m-auto py-3 font-medium flex gap-2 cursor-pointer text-gray-400 hover:bg-gold-200 hover:text-gold-400 rounded-md    ">
               <SignOut className="m-auto w-8" size={24} />
        </button>
        <div className="m-auto mt-2 flex p-2 border border-gray-400 gap-2 items-center rounded-md cursor-pointer">
          <div>
            <strong className="bg-gray-400 p-1 rounded-full">{firsLetterName}{firstLetterLastName}</strong>
          </div>
          {/**<CaretRight color="#A8A8A8" size={24} weight="bold" /> */}
        </div>
      </div>
    </Container>
  );
}
