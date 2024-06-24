export const navLinks = [
{
    label: "Home",
    route: "#home",
  },
  {
    label: "About",
    route: "#about",
  },
  {
    label: "Fitur",
    route: "#feature",
  },
  {
    label: "Harga",
    route: "#pricing",
  },
  {
    label: "Contact Us",
    route: "#contact-us",
  },
];

export const featureItem = [
  {
    icon: "/icons/chatbot.png",
    title: "Chatbot",
    desc: "Asisten virtual yang siap menemanimu sehari-hari."
  },
  {
    icon: "/icons/sosmed.png",
    title: "Ide Konten",
    desc: "Cari ide konten dan buat skrip untuk siapkan ide kontenmu."
  },
  {
    icon: "/icons/seo.png",
    title: "SEO Copywritting",
    desc: "Optimalkan kontenmu untuk mesin pencari tuk raih pelanggan."
  },
  {
    icon: "/icons/ads.png",
    title: "ADS Copywritting",
    desc: "Kembangkan kualitas pemasaran produk hebatmu."
  },
  {
    icon: "/icons/blog.png",
    title: "Blog Writting",
    desc: "Tingkatkan kualitas penulisan blog pribadimu agar lebih intuitif."
  },
  {
    icon: "/icons/homework.png",
    title: "Nugas Sekolah",
    desc: "Optimalkan pengalaman belajarmu agar lebih produktif."
  },
  
]

export const plans = [
  {
    _id: 1,
    name: "Gratis",
    icon: "/icons/free-plan.svg",
    price: 0,
    credits: 10,
    inclusions: [
      {
        label: "Akses dasar ke layanan",
        isIncluded: true,
      },
      {
        label: "Batas 10 pertanyaan per Hari",
        isIncluded: true,
      },
      {
        label: "Batas 1000 kata per Pertanyaan",
        isIncluded: true,
      },
      {
        label: "Pembaruan Prioritas",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Paket Pro",
    icon: "/icons/free-plan.svg",
    price: 20,
    credits: 120,
    inclusions: [
      {
        label: "Akses penuh ke layanan",
        isIncluded: true,
      },
      {
        label: "Batas 100 pertanyaan per Hari",
        isIncluded: true,
      },
      {
        label: "Batas 5000 kata per Pertanyaan",
        isIncluded: true,
      },
      {
        label: "Pembaruan Prioritas",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Paket Premium",
    icon: "/icons/free-plan.svg",
    price: 100,
    credits: 600,
    inclusions: [
      {
        label: "Akses penuh ke Layanan",
        isIncluded: true,
      },
      {
        label: "Unlimited Pertanyaan per Hari",
        isIncluded: true,
      },
      {
        label: "Unlimited Kata per Pertanyaan",
        isIncluded: true,
      },
      {
        label: "Pembaruan Prioritas",
        isIncluded: true,
      },
    ],
  },
];

export const contacts = [
  {
    id: 1,
    name: "Bantuan & Support",
    desc: "Dapatkan bantuan langsung dari tim kami untuk solusi cepat atas masalah Anda.",
    icon: "/icons/question.png",
    btn_title: "Dapatkan Bantuan"
  },
  {
    id: 2,
    name: "Sales dan Marketing",
    desc: "Temukan strategi penjualan dan pemasaran terbaik untuk produk atau layanan Anda.",
    icon: "/icons/report.png",
    btn_title: "Dapatkan Bantuan"
  },
  {
    id: 3,
    name: "Hubungi Kami!",
    desc: "Kirimkan email kepada kami untuk pertanyaan umum atau informasi lebih lanjut.",
    icon: "/icons/email.png",
    btn_title: "Email kami"
  },
  {
    id: 4,
    name: "Dokumentasi",
    desc: "Telusuri dokumentasi lengkap untuk memahami produk dan integrasi dengan lebih baik.",
    icon: "/icons/document.png",
    btn_title: "Lihat dokumentasi"
  },
  {
    id: 5,
    name: "Gabung Komunitas",
    desc: "Bergabunglah dengan komunitas kami di Discord untuk berdiskusi dan berbagi pengetahuan.",
    icon: "/icons/people.png",
    btn_title: "Gabung Discord"
  },
  {
    id: 6,
    name: "Pengembang",
    desc: "Akses dokumentasi pengembang untuk memulai integrasi dan pengembangan aplikasi.",
    icon: "/icons/setting.png",
    btn_title: "Lihat Dokumentasi"
  },
];
