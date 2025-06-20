import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full z-20">
        <Header />
      </div>
      <div className="pt-19 sm:pt-33 md:pt-30 lg:pt-40 bg-background">
        <Banner />
      </div>
    </div>
  );
}
