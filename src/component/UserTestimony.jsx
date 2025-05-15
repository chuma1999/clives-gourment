import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "./UserTestimonyArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import user1 from "../images/testimony/profile1.jpg";
import user2 from "../images/testimony/profile2.jpg";
import user3 from "../images/testimony/profile3.jpg";
import user4 from "../images/testimony/profile4.jpg";
import user5 from "../images/testimony/profile6.jpg";
import fiveStar from "../images/testimony/5star.png";

const UserTestimony = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="testimonial_container">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="single_user_cover bg-white rounded-2xl overflow-hidden">
                <div className="client_feed p-[2rem] relative">
                  <h1 className="font-bold mb-[1rem]">Client feedback</h1>
                  <p className="mb-[3rem]">
                    Excellent service and fantastic food. The atmosphere is
                    perfect for a romantic dinner.
                  </p>
                  <div className="client_name_image flex items-center gap-[1rem] absolute bottom-8 left-8">
                    <div className="client_img w-[4rem] h-[4rem] rounded-full overflow-hidden">
                      <img src={user1} alt="client profile" />
                    </div>
                    <div className="w-[8rem] flex flex-col">
                      <h3 className="font-bold mb-2">Tinenyasha M.</h3>
                      <div className="h-3 w-[5rem]">
                        <img
                          src={fiveStar}
                          alt="5star icon"
                          className="w-[100%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client_image_bg"></div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="single_user_cover bg-white rounded-2xl overflow-hidden">
                <div className="client_feed p-[2rem] relative">
                  <h1 className="font-bold mb-[1rem]">Client feedback</h1>
                  <p className="mb-[3rem]">
                    The best restaurant I've visited in this city. The flavors
                    are unmatched! Every dish is crafted to perfection, and the
                    atmosphere makes you feeel like you're having a truly
                    special evening.
                  </p>
                  <div className="client_name_image flex items-center gap-[1rem]  absolute bottom-8 left-8">
                    <div className="client_img w-[4rem] h-[4rem] rounded-full overflow-hidden">
                      <img src={user2} alt="client profile" />
                    </div>
                    <div className="w-[8rem] flex flex-col">
                      <h3 className="font-bold mb-2">Raquel C.</h3>
                      <div className="h-3 w-[5rem]">
                        <img
                          src={fiveStar}
                          alt="5star icon"
                          className="w-[100%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client_image_bg_2"></div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="single_user_cover bg-white rounded-2xl overflow-hidden">
                <div className="client_feed p-[2rem] relative">
                  <h1 className="font-bold mb-[1rem]">Client feedback</h1>
                  <p className="mb-[3rem]">
                    The crust is thin and crispy, just the way I like it. And
                    the toppings are fresh and flavorful, Best pizza I've ever
                    had!
                  </p>
                  <div className="client_name_image flex items-center gap-[1rem]   absolute bottom-8 left-8">
                    <div className="client_img w-[4rem] h-[4rem] rounded-full overflow-hidden">
                      <img src={user3} alt="client profile" />
                    </div>
                    <div className="w-[8rem] flex flex-col">
                      <h3 className="font-bold mb-2">Tinevimbo M.</h3>
                      <div className="h-3 w-[5rem]">
                        <img
                          src={fiveStar}
                          alt="5star icon"
                          className="w-[100%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client_image_bg_3"></div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="single_user_cover bg-white rounded-2xl overflow-hidden">
                <div className="client_feed p-[2rem] relative">
                  <h1 className="font-bold mb-[1rem]">Client feedback</h1>
                  <p className="mb-[3rem]">
                    We had an amazing time at @Clive's Gourment! If you have a
                    chance, definitely check them out! the music band did
                    amazing 👏👏.
                  </p>
                  <div className="client_name_image flex items-center gap-[1rem] absolute bottom-8 left-8">
                    <div className="client_img w-[4rem] h-[4rem] rounded-full overflow-hidden">
                      <img src={user4} alt="client profile" />
                    </div>
                    <div className="w-[8rem] flex flex-col">
                      <h3 className="font-bold mb-2">Joan N.</h3>
                      <div className="h-3 w-[5rem]">
                        <img
                          src={fiveStar}
                          alt="5star icon"
                          className="w-[100%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client_image_bg_4"></div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
              <div className="single_user_cover bg-white rounded-2xl overflow-hidden">
                <div className="client_feed p-[2rem] relative">
                  <h1 className="font-bold mb-[1rem]">Client feedback</h1>
                  <p className="mb-[3rem]">
                    My first time here was an absolute dream! Everything from
                    the exquisite flavors to the thoughtful service left me
                    feeling completely satisfied and happy.
                  </p>
                  <div className="client_name_image flex items-center gap-[1rem] absolute bottom-8 left-8">
                    <div className="client_img w-[4rem] h-[4rem] rounded-full overflow-hidden">
                      <img src={user5} alt="client profile" />
                    </div>
                    <div className="w-[8rem] flex flex-col">
                      <h3 className="font-bold mb-2">Richie B.</h3>
                      <div className="h-3 w-[5rem]">
                        <img
                          src={fiveStar}
                          alt="5star icon"
                          className="w-[100%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="client_image_bg_5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default UserTestimony;
