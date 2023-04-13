import { useKeenSlider } from "keen-slider/react";
import { NavLink } from "react-router-dom";
import { PlusCircle } from "@phosphor-icons/react";
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
    850: {
      slidesPerView: 3.5,
    },

    1200: {
      slidesPerView: 4,
    },

    1800: {
      slidesPerView: 6,
    },
  };
  return (
    <section className="w-full overflow-y-scroll">
      <header className="flex justify-between pr-5 pt-8 pb-8 items-center">
        <strong className="text-2xl">Rodovias</strong>
        <NavLink className="flex items-center gap-1 hover:text-gold-400 hover:underline">
          <PlusCircle className="text-gold-400" size={22} />
          Cadastrar Rodovia
        </NavLink>
      </header>

      <Swiper
        spaceBetween={30}
        slidesPerView={4.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={breakpoints}
        className=" mb-8 cursor-pointer"
      >
        <SwiperSlide
          width={200}
          className="w-72 bg-gray-300 min-w-52 p-4 rounded-lg text-center  border-b-4 border-white rounded-md text-center border-b-8 "
        >
          <h1 className="text-xl font-bold">Total de Rodovias</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 01</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 02</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 03</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 04</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 05</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 06</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 07</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 08</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 09</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
          <h1 className="text-xl font-bold">Núcleo Regional 10</h1>
          <h2 className="pt-2 text-3xl font-bold">10</h2>
          <p>total</p>
          <div>
            <p> 10 Estaduais</p>
            <p>10 Federais</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
