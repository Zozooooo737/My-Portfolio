import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Media = ({ mediaItems }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      {/* Carrousel principal */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        onClick={toggleFullScreen}
        className="relative h-full w-full"
        style={{ paddingBottom: "50px" }} // Marge pour les points de pagination
      >
        {mediaItems.map((media, index) => (
          <SwiperSlide key={index} className="flex flex-col">
            <div className="flex-1">
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="h-full w-full object-contain"
                />
              ) : (
                <video
                  controls
                  autoPlay // Démarre automatiquement
                  loop // Joue en boucle
                  muted // Mode muet pour permettre l'autoplay
                  className="h-full w-full object-contain"
                >
                  <source src={media.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            {/* Légende */}
            <div className="bg-black/50 py-2 text-center text-xl font-semibold text-white">
              {media.alt}
            </div>
          </SwiperSlide>
        ))}

        {/* Boutons de navigation personnalisés en bas */}
        <div className="custom-prev absolute bottom-1.5 left-4 z-10 cursor-pointer">
          <div className="swiper-button-prev !static !m-0"></div>
        </div>
        <div className="custom-next absolute right-4 bottom-1.5 z-10 cursor-pointer">
          <div className="swiper-button-next !static !m-0"></div>
        </div>
      </Swiper>

      {/* Mode plein écran */}
      {isFullScreen && (
        <div
          className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={toggleFullScreen}
        >
          {/* Conteneur du carrousel en plein écran */}
          <div
            className="h-full max-h-[90vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".custom-next-fullscreen",
                prevEl: ".custom-prev-fullscreen",
              }}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="relative h-full w-full"
              style={{ paddingBottom: "50px" }} // Marge pour les points de pagination
            >
              {mediaItems.map((media, index) => (
                <SwiperSlide key={index} className="flex flex-col">
                  <div className="flex flex-1 items-center justify-center">
                    {media.type === "image" ? (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="max-h-[80vh] w-auto object-contain"
                      />
                    ) : (
                      <video
                        controls
                        autoPlay // Démarre automatiquement
                        loop // Joue en boucle
                        muted // Mode muet pour permettre l'autoplay
                        className="max-h-[80vh] w-auto object-contain"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <source src={media.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  {/* Légende */}
                  <div className="bg-black/50 py-2 text-center text-xl font-semibold text-white">
                    {media.alt}
                  </div>
                </SwiperSlide>
              ))}

              {/* Boutons de navigation personnalisés en bas pour le mode plein écran */}
              <div className="custom-prev-fullscreen absolute bottom-4 left-4 z-10 cursor-pointer">
                <div className="swiper-button-prev !static !m-0"></div>
              </div>
              <div className="custom-next-fullscreen absolute right-4 bottom-4 z-10 cursor-pointer">
                <div className="swiper-button-next !static !m-0"></div>
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Media;
