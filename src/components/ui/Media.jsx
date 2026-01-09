import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ---------- SIZE (NO CROP) ---------- */

const SIZE_WRAPPER = {
  full: "w-full",
  lg: "max-w-6xl mx-auto px-4",
  md: "max-w-4xl mx-auto px-6",
  sm: "max-w-2xl mx-auto px-6",
  xs: "max-w-xl mx-auto px-6",
};

/* ---------- GRID AUTO ---------- */

const AutoGrid = ({ mediaItems, onClick }) => {
  const count = mediaItems.length;

  const gridCols =
    count <= 2
      ? "grid-cols-2"
      : count <= 4
        ? "grid-cols-2"
        : "grid-cols-2 md:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-4`}>
      {mediaItems.map((media, index) => (
        <div
          key={index}
          onClick={() => onClick(index)}
          className="flex cursor-pointer items-center justify-center rounded-lg bg-black/5 p-2"
        >
          {media.type === "image" ? (
            <img
              src={media.src}
              alt={media.alt}
              className="max-h-64 w-auto object-contain"
            />
          ) : (
            <video muted loop className="max-h-64 w-auto object-contain">
              <source src={media.src} type="video/mp4" />
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

/* ---------- MAIN COMPONENT ---------- */

const Media = ({ mediaItems, size = "full", layout = "carousel" }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openFullscreen = (index = 0) => {
    setStartIndex(index);
    setIsFullScreen(true);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <div className={SIZE_WRAPPER[size]}>
        {layout === "grid" ? (
          <AutoGrid mediaItems={mediaItems} onClick={openFullscreen} />
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            onClick={() => openFullscreen(0)}
            className={`relative ${size === "full" ? "mb-8" : ""}`}
            style={{ paddingBottom: mediaItems.length > 1 ? "20px" : "0" }}
          >
            {mediaItems.map((media, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  {media.type === "image" ? (
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="max-h-[60vh] w-auto object-contain"
                    />
                  ) : (
                    <video
                      controls
                      muted
                      className="max-h-[60vh] w-auto object-contain"
                    >
                      <source src={media.src} type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="relative mt-2 mb-4 text-center">
                  <div className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <p className="relative z-10 px-3 py-2 text-sm font-semibold text-white md:text-base">
                    {media.alt}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {isFullScreen && (
        <div
          className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={toggleFullScreen}
        >
          <div
            className="relative h-full max-h-[90vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleFullScreen}
              className="bg-text border-primary hover:bg-accent text-primary absolute top-4 right-4 z-20 h-13 w-13 rounded-full border-4 p-2 text-lg"
            >
              ✖
            </button>

            <Swiper
              initialSlide={startIndex}
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
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex h-[75vh] w-full items-center justify-center">
                    {media.type === "image" ? (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="mx-auto max-h-full w-auto object-contain"
                      />
                    ) : (
                      <video
                        controls
                        loop
                        muted
                        className="mx-auto max-h-full w-auto object-contain"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <source src={media.src} type="video/mp4" />
                      </video>
                    )}
                  </div>
                  <div className="mx-auto w-full max-w-[90%] bg-black/50 py-2 text-center text-xl font-semibold text-white md:max-w-[80%]">
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
