import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <div>
          <div>
            <Image src="/banner.png" alt="banner" width={666} height={679} />
          </div>
          <div>
            <h3>Want to Turn Social Media Into a Profitable Career?</h3>
            <h3>Discover your way to success with Fametonic:</h3>
            <ul>
              <li></li>
            </ul>
            <div>
              <button>GET STARTED</button>
              <p>1-minute quiz for personalized Insights</p>
            </div>
            <p>
              By clicking &quot;Get Started&quot;, you agree with Terms and
              Conditions, Privacy Policy, Subscription Terms
            </p>
            <p>Fametonic 2025 ©All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
