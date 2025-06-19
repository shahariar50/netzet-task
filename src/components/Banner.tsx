import { INFOS } from "@/utils/const";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <div className="w-full relative">
          <div className="absolute bottom-0 right-[calc(0%-90px)] -z-1">
            <Image src="/banner.png" alt="banner" width={666} height={679} />
          </div>
          <div className="max-w-[516px] pt-14 pb-20">
            <div>
              <h3>Want to Turn Social Media Into a Profitable Career?</h3>
              <h3 className="text-secondary drop-shadow-[0px_4px_2px_var(--color-primary)] mb-4">
                Discover your way to success with Fametonic:
              </h3>
              <ul className="mb-8">
                {INFOS.map((info) => (
                  <li
                    className="flex items-center gap-2.5 mb-3 leading-[22px]"
                    key={info.id}
                  >
                    <Image
                      src="/sprinkle.png"
                      alt="check"
                      width={22}
                      height={22}
                    />{" "}
                    {info.text}
                  </li>
                ))}
              </ul>
              <div className="mb-[30px] w-min">
                <button className="mb-2.5 py-2 px-10 bg-primary w-[313px] text-xl leading-[24px] rounded-[10px] uppercase font-bold cursor-pointer shadow-[2px_2px_10px_0px_var(--color-secondary)]">
                  GET STARTED
                </button>
                <p className="text-xs text-center">
                  1-minute quiz for personalized Insights
                </p>
              </div>
              <div className="text-[#ababab]">
                <p className="mb-3 text-xs leading-[14px]">
                  By clicking &quot;Get Started&quot;, you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
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
  );
};

export default Banner;
