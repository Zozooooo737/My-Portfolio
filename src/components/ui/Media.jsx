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
        style={{ paddingBottom: "40px" }}
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
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-contain"
                >
                  <source src={media.src} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="bg-black/50 py-1 text-center text-sm font-semibold text-white md:py-2 md:text-xl">
              {media.alt}
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-prev absolute bottom-2 left-2 z-10 cursor-pointer md:bottom-1.5 md:left-4">
          <div className="swiper-button-prev !static !m-0 !h-6 !w-6 md:!h-8 md:!w-8"></div>
        </div>
        <div className="custom-next absolute right-2 bottom-2 z-10 cursor-pointer md:right-4 md:bottom-1.5">
          <div className="swiper-button-next !static !m-0 !h-6 !w-6 md:!h-8 md:!w-8"></div>
        </div>
      </Swiper>

      {isFullScreen && (
        <div
          className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={toggleFullScreen}
        >
          <div
            className="relative h-full max-h-[90vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fullscreen Close Button */}
            <button
              onClick={toggleFullScreen}
              className="bg-text border-primary hover:bg-accent absolute top-4 right-4 z-20 rounded-full border-4 p-2 text-lg text-white"
            >
              ✖
            </button>

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
              style={{ paddingBottom: "50px" }}
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
                        autoPlay
                        loop
                        muted
                        className="max-h-[80vh] w-auto object-contain"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <source src={media.src} type="video/mp4" />
                      </video>
                    )}
                  </div>
                  <div className="bg-black/50 py-2 text-center text-xl font-semibold text-white">
                    {media.alt}
                  </div>
                </SwiperSlide>
              ))}

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
