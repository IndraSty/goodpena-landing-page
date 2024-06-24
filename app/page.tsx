import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import CardFitur from "@/components/shared/CardFitur";
import { contacts, featureItem, plans } from "@/constant";
import CardContact from "@/components/shared/CardContact";

export default function Home() {
  return (
    <>
      <main id="home" className="hero">
        <div className="absolute top-0 left-0">
          <div className="circle-blur"></div>
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="circle-blur-second"></div>
        </div>
        <h1>
          <span>Tingkatkan</span> Ide
          <br /> <span>Kreatifmu</span> Dengan <span>AI</span>
        </h1>
        <p>
          Temukan inspirasi tanpa batas dan transformasikan cara Anda mencipta
          dengan AI. Dari konten yang menarik hingga solusi cepat untuk setiap
          pertanyaan, kami membawa kecerdasan buatan ke ujung jari Anda.
        </p>

        <div className="relative p-0.5 mt-10 bg-my-gradient rounded-xl">
          <Button variant={"outline"} className="btn-hero hover:bg-my-gradient">
            Mulai Gratis
          </Button>
        </div>
      </main>

      {/* about page */}
      <section id="about" className="wrapper relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="circle-blur"></div>
        </div>
        <div className="title">
          <Badge className="bg-dark-200 px-3 py-2 text-primary font-semibold text-sm lg:text-base ">
            About GoodPena
          </Badge>

          <h1>
            Temui Asisten Menulis <br />
            Cerdas Anda yang Baru
          </h1>

          <p>
            GoodPena dirancang untuk membantu Anda menghasilkan teks berkualitas
            tinggi secara instan, tanpa bersusah payah. dengan antarmuka
            intuitif kami dan fitur canggih.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <div className="box-container">
            <Image
              src={"/images/about-img.png"}
              layout="fill"
              alt="about img"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      {/* fitur page */}
      <section id="feature" className="wrapper relative">
        <div className="absolute top-1/2 md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
          <div className="circle-blur"></div>
        </div>
        <div className="md:hidden absolute top-3/4 md:top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
          <div className="circle-blur"></div>
        </div>
        <div className="title">
          <Badge className="bg-dark-200 px-3 py-2 text-primary font-semibold text-sm lg:text-base ">
            Fitur GoodPena
          </Badge>

          <h1>
            Nikmati Tools GoodPena <br />
            Untuk Memudahkan Kerjaanmu
          </h1>
        </div>

        <div className="card-container">
          {featureItem.map((item) => (
            <CardFitur
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>

      {/* pricing page */}
      <section id="pricing" className="wrapper relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
          <div className="circle-blur"></div>
        </div>
        <div className="title">
          <Badge className="bg-dark-200 px-3 py-2 text-primary font-semibold text-sm lg:text-base ">
            Penawaran
          </Badge>

          <h1>
            Penetapan Harga <br /> Yang Fleksibel
          </h1>

          <p>
            Paket fleksibel dan terjangkau yang disesuaikan dengan kebutuhanmu.{" "}
            <br /> Hemat hingga 20% untuk waktu terbatas.
          </p>
        </div>

        <ul className="credits-list">
          {plans.map((plan) => (
            <li key={plan.name} className="credits-item">
              <div className="flex justify-center items-center flex-col gap-3">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="text-xl font-semibold mt-2 text-white">
                  {plan.name}
                </p>
                {plan.name === "Gratis" ? (
                  <p className="h1-semibold">Rp{plan.price}</p>
                ) : (
                  <p className="h1-semibold text-secondary">Rp{plan.price}k</p>
                )}
              </div>

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9 mt-6">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/icons/${
                        inclusion.isIncluded ? "check.svg" : "cross.svg"
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="p-16-regular text-gray-400">
                      {inclusion.label}
                    </p>
                  </li>
                ))}
              </ul>

              {plan.name === "Gratis" ? (
                <Button
                  variant="outline"
                  className="credits-free-btn hover:bg-white/10 hover:text-sky-300"
                >
                  Item Gratis
                </Button>
              ) : (
                <Button className="credits-btn">Beli Paket</Button>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* contact */}
      <section id="contact-us" className="wrapper relative mb-0 md:mb-10">
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
          <div className="circle-blur"></div>
        </div>
        <div className="title">
          <Badge className="bg-dark-200 px-3 py-2 text-primary font-semibold text-sm lg:text-base ">
            Contact Us
          </Badge>

          <h1>
            Hubungi Tim Kami
          </h1>

          <p>
          Hubungi tim penjualan dan dukungan kami untuk demo, 
          dukungan <br className="hidden md:block"/> orientasi, atau pertanyaan produk.
          </p>
        </div>
        
        <div className="card-container">
          {contacts.map((item) => (
            <CardContact
              key={item.name}
              icon={item.icon}
              title={item.name}
              desc={item.desc}
              btn_title={item.btn_title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
