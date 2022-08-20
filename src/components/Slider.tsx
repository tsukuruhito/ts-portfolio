import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/future/image";

const Slider = () => {
  return (
    <Splide
      hasTrack={false}
      aria-label="撮影写真"
      options={{
        type: "loop",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="p-4 my-8 h-fit max-w-2xl mx-auto">
        <SplideTrack>
          <SplideSlide>
            <Image
              src="/scene01.jpg"
              alt="レトロな雰囲気のお台場"
              width={900}
              height={500}
              loading="lazy"
            />
          </SplideSlide>
          <SplideSlide>
            <Image src="/scene02.jpg" alt="海岸線" width={900} height={500} />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/scene03.jpg"
              alt="夕方の東京駅"
              width={900}
              height={500}
              loading="lazy"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/scene04.jpg"
              alt="飛行機からの夕景"
              width={900}
              height={500}
              loading="lazy"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/scene05.jpg"
              alt="カフェから眺める港"
              width={900}
              height={500}
              loading="lazy"
            />
          </SplideSlide>
        </SplideTrack>
      </div>
      <div className="max-w-2xl absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="splide__arrows" />
      </div>
    </Splide>
  );
};
export default Slider;
