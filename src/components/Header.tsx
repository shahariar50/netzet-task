const Header = () => {
  return (
    <div className="header">
      <div
        style={{
          background:
            "linear-gradient(90deg, var(--color-primary) 0%, #10CBE0 100%)",
        }}
      >
        <p className="py-3 max-w-7xl mx-auto font-figtree font-bold text-[22px] text-center leading-[22px]">
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
      <div>
        <div className="max-w-7xl mx-auto"></div>
      </div>
    </div>
  );
};

export default Header;
