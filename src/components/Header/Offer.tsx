const Offer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, var(--color-primary) 0%, #10CBE0 100%)",
      }}
    >
      <p className="py-5 sm:py-3 container font-figtree font-semibold text-base md:text-lg lg:text-[22px] text-center leading-[18px] sm:leading-[22px] animate__animated animate__fadeInDown">
        <span>
          🚀{" "}
          <span className="text-secondary uppercase font-extrabold">
            FRESH BEGINNINGS SALE:
          </span>{" "}
          Extra 25% OFF,{" "}
        </span>
        <br className="lg:hidden" />
        <span className="text-[15px] md:text-lg lg:text-[22px]">
          Limited Spots - start your journey today!
        </span>
      </p>
    </div>
  );
};

export default Offer;
