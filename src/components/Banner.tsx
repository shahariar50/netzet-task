import { INFOS } from "@/utils/const";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="md:max-w-3xl lg:max-w-5xl mx-auto">
        <div className="w-full relative z-10">
          <div className="md:absolute bottom-0 md:right-[calc(0%-90px)] -z-1 animate__animated animate__fadeIn">
            <Image
              src="/banner.png"
              alt="banner"
              className="hidden sm:block w-[550px] lg:w-[666px] mx-auto "
              width={666}
              height={679}
            />
            <Image
              src="/banner_mobile.png"
              alt="banner"
              className="w-full sm:hidden"
              width={1018}
              height={1114}
            />
          </div>
          <div className="container -mt-15 sm:-mt-4 md:mt-0">
            <div className="max-w-[516px] md:pt-14 lg:pt-18 pb-10 md:pb-12 lg:pb-20">
              <div className="flex flex-col">
                <div className="px-2 md:px-0 text-center md:text-left mb-4 animate__animated animate__fadeInDown">
                  <h3>Want to Turn Social Media Into a Profitable Career?</h3>
                  <h3 className="text-secondary drop-shadow-[0px_4px_2px_var(--color-primary)]">
                    Discover your way to success with Fametonic:
                  </h3>
                </div>
                <ul className="mb-2 md:mb-5 animate__animated animate__fadeInRight">
                  {INFOS.map((info) => (
                    <li
                      className="flex items-center gap-2.5 mb-3 leading-[21px] md:leading-[22px]"
                      key={info.id}
                    >
                      <Image
                        src="/sprinkle.png"
                        alt="check"
                        width={22}
                        height={22}
                        className="mr-2.5"
                      />{" "}
                      {info.text}
                    </li>
                  ))}
                </ul>
                <div className="md:mb-[30px] md:w-min order-2 md:order-1 animate__animated animate__fadeInUp">
                  <button className="mb-2.5 py-2 px-10 bg-primary w-full md:w-[313px] text-xl leading-[24px] rounded-[10px] uppercase font-bold cursor-pointer shadow-[2px_2px_10px_0px_var(--color-secondary)]">
                    GET STARTED
                  </button>
                  <p className="text-xs text-center">
                    1-minute quiz for personalized Insights
                  </p>
                </div>
                <div className="text-[#ababab] order-1 md:order-2 max-w-[281px] md:max-w-full mx-auto text-center md:text-left mb-8 md:mb-0 animate__animated animate__fadeInUp">
                  <p className="mb-[21px] md:mb-3 text-xs leading-[14px]">
                    By clicking &quot;Get Started&quot;, you agree with Terms
                    and Conditions, Privacy Policy, Subscription Terms
                  </p>
                  <p className="text-[10px] leading-[12px]">
                    Fametonic 2025 ©All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
