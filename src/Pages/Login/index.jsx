import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import Backgorund from "../../assets/Background-login.png";
import Logo from "../../assets/Logo.svg"
import { useContext } from "react";
import { UserContextLogin } from "../../Context/useContextLogin";

export function Login(){
    const {userLogin, errorAuth, loadingAuth} = useContext(UserContextLogin)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [typeInput, setTypeInput] = useState("password");

    console.log(errorAuth)

    function handleTypeInput() {
        if (typeInput === "password") {
            setTypeInput("text");
        } else {
            setTypeInput("password");
        }
    }

    const handleLogin = (data) =>{
        console.log(data)
        userLogin(data.email, data.password)
    }
    console.log(errors)

    return(
        <main className="container mx-auto h-screen grid grid-cols-2 lg:grid-cols-1 gap-4 min-h-full items-center justify-center bg-background">
        <section className="p-5">
          <div className="mb-16">
            <img className="mx-auto h-12 w-auto" src={Logo} alt="" />
          </div>
          <h1 className="mx-auto max-w-md text-2xl mb-5 font-bold text-text-100">
            Login
          </h1>
         {errorAuth ?  <div className="mx-auto max-w-md mb-4 p-2 text-center border-2 border-red-400 rounded-md bg-red-400 font-medium ">
            <h2>E-mail ou senha incorretos</h2>
          </div> : ""}
          <form className=" mx-auto max-w-md" onSubmit={handleSubmit(handleLogin)}>
            <label className="text-lg" htmlFor="">
              E-mail
            </label>
            <input
              type="email"
              className="block w-full text-lg rounded-md border-0 py-3 pl-2  text-gray-900 mt-1.5  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-400 sm:text-sm sm:leading-6 mb-5"
              placeholder="exemple@exemple.com.br"
              {...register("email", {required: true})}
            />

            <label className="text-lg relative block" htmlFor="">
              Senha
              <input
                type={typeInput}
                className="block w-full text-lg rounded-md border-0 py-3 pl-2  text-gray-900 mt-1.5  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-400 sm:text-sm sm:leading-6"
                {...register("password", {required: true})}
              />
              {typeInput === "password" ? (
                <EyeSlash
                  onClick={handleTypeInput}
                  size={24}
                  color="#39332E"
                  className=" absolute inset-y-0 right-4 flex items-center top-12 cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={handleTypeInput}
                  size={24}
                  color="#39332E"
                  className=" absolute inset-y-0 right-4 flex items-center top-12 cursor-pointer"
                />
              )}
            </label>
                
            {loadingAuth === true ?             
              <button
                className="w-full mt-10 bg-gold-400 text-xl py-2.5 rounded-md text-white hover:bg-gold-300"
                onClick={handleLogin}
                >
                  Entrando...
              </button> 
              :             
              <button
                className="w-full mt-10 bg-gold-400 text-xl py-2.5 rounded-md text-white hover:bg-gold-300"
                onClick={handleLogin}
                >
                Entrar
              </button>}
          </form>
        </section>
        <img
          src={Backgorund}
          alt=""
          className="h-screen flex w-full box-border lg:hidden"
        />
      </main>
    )
}