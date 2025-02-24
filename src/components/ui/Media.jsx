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
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        onClick={toggleFullScreen}
        className="relative h-full w-full"
      >
        {mediaItems.map((media, index) => (
          <SwiperSlide key={index} className="relative">
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={media.alt}
                className="h-full w-full object-cover"
              />
            ) : (
              <video controls className="h-full w-full object-cover">
                <source src={media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {/* Légende */}
            <div className="text-md absolute bottom-10 left-0 w-full bg-black/50 py-2 text-center font-semibold text-white">
              {media.alt}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mode plein écran */}
      {isFullScreen && (
        <div
          className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={toggleFullScreen}
        >
          {/* Conteneur du carrousel en plein écran */}
          <div
            className="h-full max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="relative h-full w-full"
            >
              {mediaItems.map((media, index) => (
                <SwiperSlide key={index} className="relative">
                  {media.type === "image" ? (
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <video
                      controls
                      className="h-full w-full object-contain"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <source src={media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {/* Légende */}
                  <div className="text-md absolute bottom-10 left-0 w-full bg-black/50 py-2 text-center font-semibold text-white">
                    {media.alt}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Media;
