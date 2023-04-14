import { useKeenSlider } from "keen-slider/react";
import { Link, NavLink } from "react-router-dom";
import { CaretRight, PlusCircle } from "@phosphor-icons/react";
import "../../../Global/slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export function Dashboard() {
  //responsividade do slider
  const breakpoints = {
    // Largura mínima de 640 pixels
    240: {
      slidesPerView: 1.3,
    },
    440: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2.5,
    },
    // Largura maior que 640 pixels
    1000: {
      slidesPerView: 3.5,
    },

    1200: {
      slidesPerView: 3.8,
    },

    1800: {
      slidesPerView: 6.5,
    },
  };

  return (
    <section className="w-full overflow-y-scroll ">
      <header className="flex justify-between pr-5 pt-8 pb-8 items-center">
        <strong className="text-2xl">Rodovias</strong>
        <NavLink className="flex items-center gap-1 hover:text-gold-400 hover:underline">
          <PlusCircle className="text-gold-400" size={22} />
          Cadastrar Rodovia
        </NavLink>
      </header>

      {/**Slider */}
        <nav className="pr-5">
            <Swiper
        spaceBetween={20}
        slidesPerView={4.5}

        breakpoints={breakpoints}
        className=" mb-8 cursor-pointer pr-5"
      >
        <SwiperSlide
          width={200}
          className="w-72 bg-gray-300 min-w-52 p-4 rounded-lg text-center text-text-100 border-b-4 border-white rounded-md  border-b-8 "
        >
          <h1 className="text-xl font-bold">Total de Rodovias</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 01</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400  w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 02</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 03</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 04</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 05</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 06</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 07</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 08</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 09</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 10</h1>
          <h2 className="pt-2.5 text-3xl font-bold">10</h2>
          <p className="mb-2.5">Total</p>
          <div className="flex justify-center gap-8">
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Estaduais</span>
            </p>
            <p className="flex flex-col">
              {" "}
              <span>10</span> <span>Federais</span>
            </p>
          </div>
        </SwiperSlide>
            </Swiper>
        </nav>

        <div className="pr-5">
            <table className="w-full text-center">
        <thead>
          <tr className="bg-gray-300 ">
            <th className="p-2 rounded-ss-md">Rodovia</th>
            <th className="p-2">Tipo</th>
            <th className="p-2">Extensão</th>
            <th className="p-2">Latitude</th>
            <th className="p-2">Longitude</th>
            <th className="p-2">UF</th>
            <th className="p-2 rounded-se-md text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
            <td className="p-2  ">PA-999</td>
            <td className="p-2  ">Estadual</td>
            <td className="p-2  ">10</td>
            <td className="p-2  ">10</td>
            <td className="p-2  ">10</td>
            <td className="p-2  ">10</td>
            <td className="p-2  ">
                <Link className="flex justify-center" to={``}>
                <CaretRight size={20} />
              </Link>
            </td>
          </tr>
          <tr className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200 ">
            <td className="p-2">PA-999</td>
            <td className="p-2">Estadual</td>
            <td className="p-2">10</td>
            <td className="p-2">10</td>
            <td className="p-2">10</td>
            <td className="p-2">10</td>
            <td className="p-2">
              <Link className="flex justify-center" to={``}>
                <CaretRight size={20} />
              </Link>
            </td>
          </tr>
          <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
            <td colSpan={7} className="p-2 rounded-ee-md rounded-es-md"></td>
          </tr>
        </tbody>
            </table>
        </div>
    </section>
  );
}
