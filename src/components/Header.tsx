import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div
        style={{
          background:
            "linear-gradient(90deg, var(--color-primary) 0%, #10CBE0 100%)",
        }}
      >
        <p className="py-3 max-w-5xl mx-auto font-figtree font-extrabold text-[22px] text-center leading-[22px]">
          <span>
            🚀{" "}
            <span className="text-secondary uppercase">
              FRESH BEGINNINGS SALE:
            </span>{" "}
            Extra 25% OFF,{" "}
          </span>
          <br className="hidden" />
          <span>Limited Spots - start your journey today!</span>
        </p>
      </div>
      <div className="mt-9">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={174} height={74} />
              </Link>
            </div>
            <ul className="inline-flex self-start items-center gap-10 text-lg text-[#A9A9A9] font-semibold">
              <li>
                <Link href="/">About us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
