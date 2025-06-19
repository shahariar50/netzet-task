import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full">
        <Header />
      </div>
      <div className="pt-40">
        <Banner />
      </div>
    </div>
  );
}
