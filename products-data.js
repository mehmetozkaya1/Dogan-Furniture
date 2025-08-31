const PRODUCTS = {
  1: {
    id: 1,
    slug: "kanepe",
    title: "Tuğra Modern Kanepe",
    short: "Şık ve konforlu 3 kişilik kanepe — yüksek yoğunluklu sünger.",
    images: [
      "images/kanepe/IMG-20250724-WA0022.jpg",
      "images/kanepe/IMG-20250724-WA0027.jpg",
      "images/kanepe/IMG-20250724-WA0032.jpg",
      "images/kanepe/IMG-20250724-WA0033.jpg",
      "images/kanepe/WhatsApp%20Image%202025-08-30%20at%2022.51.07.jpeg",
      "images/kanepe/WhatsApp%20Image%202025-08-30%20at%2022.51.14%20(1).jpeg"
    ],
    features: [
      "Malzeme: Masif ahşap iskelet, yüksek yoğunluklu sünger",
      "Kumaş: Leke tutmaz, değişebilir kılıf seçenekleri",
      "El oyması klasik detaylar",
      "Altın varaklı dekoratif süslemeler",
      "Parlak lake cila",
      "Dayanıklı ve uzun ömürlü malzeme",
      "Şık ve klasik iç mekanlara uyumlu",
      "Kolay temizlenebilir yüzey"
    ],
    desc: "Modern kanepe; geniş oturma alanı, ergonomik sırt yapısı ve uzun ömürlü dolgu malzemesi ile tasarlandı. Hem şehir dairelerine hem de geniş salonlara uyum sağlar."
  },

  2: {
    id: 2,
    slug: "berjer",
    title: "Tuğra Estetik Berjer",
    short: "Konforlu tek kişilik koltuk — okuma köşeleri için ideal.",
    images: [
      "images/berjer/IMG-20250724-WA0030.jpg",
      "images/berjer/IMG-20250724-WA0036.jpg",
      "images/berjer/IMG-20250724-WA0043.jpg",
      "images/berjer/WhatsApp%20Image%202025-08-30%20at%2022.51.05%20(3).jpeg"
    ],
    features: [
      "Malzeme: Masif ahşap iskelet",
      "Dolgu: Yüksek elastikiyetli sünger",
      "Kumaş: Silinebilir ve leke tutmaz",
      "El oyması klasik detaylar",
      "Altın varaklı dekoratif süslemeler",
      "Parlak lake cila",
      "Ergonomik oturum",
      "Kolay temizlenebilir yüzey"
    ],
    desc: "Şık hatlara sahip berjerimiz, okunacak köşeler, balkonlar veya bekleme alanları için konfor ve estetik bir çözüm sunar. Farklı kumaş ve renk seçenekleri mevcuttur."
  },

  3: {
    id: 3,
    slug: "orta_masa",
    title: "Tuğra Orta Sehpa / Masa",
    short: "Minimal ve fonksiyonel orta sehpa — salonlarınıza modern dokunuş.",
    images: [
      "images/orta_masa/IMG-20250724-WA0016.jpg",
      "images/orta_masa/IMG-20250724-WA0017.jpg",
      "images/orta_masa/IMG-20250724-WA0021.jpg",
      "images/orta_masa/WhatsApp%20Image%202025-08-30%20at%2022.51.05%20(5).jpeg",
      "images/orta_masa/WhatsApp%20Image%202025-08-30%20at%2022.51.05.jpeg",
      "images/orta_masa/WhatsApp%20Image%202025-08-30%20at%2022.51.07.jpeg",
      "images/orta_masa/WhatsApp%20Image%202025-08-30%20at%2022.51.14%20(2).jpeg"
    ],
    features: [
      "Malzeme: Masif ahşap",
      "El oyması klasik detaylar",
      "Altın varaklı süslemeler",
      "Parlak lake yüzey",
      "Çizilmeye dayanıklı kaplama",
      "Kolay temizlenebilir yüzey"
    ],
    desc: "Günlük kullanım için dayanıklı ve estetik bir orta sehpa. Çay-kahve servisleri ve dekoratif objeler için ideal yüzeye sahiptir."
  },

  4: {
    id: 4,
    slug: "tv_unit",
    title: "Tuğra TV Ünitesi",
    short: "Geniş depolama alanlı TV ünitesi",
    images: [
      "images/tv_unit/IMG-20250724-WA0028.jpg",
      "images/tv_unit/WhatsApp%20Image%202025-08-30%20at%2022.51.15%20(3).jpeg",
      "images/tv_unit/WhatsApp%20Image%202025-08-30%20at%2022.51.15%20(4).jpeg"
    ],
    features: [
      "Malzeme: Masif ahşap",
      "Kapaklı dolap ve açık raf kombinasyonu",
      "El oyması klasik detaylar",
      "Altın varaklı dekoratif süslemeler",
      "Parlak lake yüzey",
      "Dayanıklı ve uzun ömürlü malzeme",
      "Kolay temizlenebilir yüzey"
    ],
    desc: "Modern hatları ve işlevsel depolama çözümleriyle TV ünitemiz multimedya ekipmanlarını düzenli tutar ve salon dekorunuza uyum sağlar."
  },

  5: {
    id: 5,
    slug: "yan_sehpa",
    title: "Tuğra Yan Sehpa / Komodin",
    short: "Küçük ama kullanışlı yan sehpa — gece veya oturma grubu için.",
    images: [
      "images/yan_sehpa/WhatsApp%20Image%202025-08-30%20at%2022.51.05%20(4).jpeg"
    ],
    features: [
      "Malzeme: Masif ahşap",
      "Hafif taşınabilir",
      "Çizilmeye dayanıklı kaplama",
      "El oyması klasik detaylar",
      "Altın varaklı dekoratif süslemeler",
      "Parlak lake yüzey",
      "Kolay temizlenebilir yüzey"
    ],
    desc: "Klasik ve modern seçenekleriyle yan sehpalarımız, hem dekoratif hem de fonksiyonel kullanım sağlar."
  },

  6: {
    id: 6,
    slug: "sandalye",
    title: "Tuğra Tasarım Sandalye",
    short: "Ergonomik ve zarif yemek sandalyesi — set olarak veya tekil.",
    images: [
      "images/sandalye/IMG-20250724-WA0020.jpg",
      "images/sandalye/IMG-20250724-WA0038.jpg",
      "images/sandalye/IMG-20250724-WA0040.jpg",
      "images/sandalye/IMG-20250724-WA0041.jpg",
      "images/sandalye/WhatsApp%20Image%202025-08-30%20at%2022.51.06%20(3).jpeg",
      "images/sandalye/WhatsApp%20Image%202025-08-30%20at%2022.51.08.jpeg"
    ],
    features: [
      "Malzeme: Masif ahşap",
      "Koltuk: Süngerli ve kumaş/kauçuk seçenekleri",
      "Stabil ve hafif tasarım",
      "El oyması klasik detaylar",
      "Altın varaklı süslemeler",
      "Parlak lake yüzey",
      "Uzun oturumlarda konforlu",
      "Kolay temizlenebilir yüzey"
    ],
    desc: "Yemek masalarına modern bir dokunuş getiren sandalyelerimiz, uzun oturumlarda bile konforu korur."
  },

  7: {
    id: 7,
    slug: "vitrin",
    title: "Tuğra Vitrin",
    short: "Cam kapaklı şık vitrin — dekoratif obje ve porselen saklama.",
    images: [
      "images/vitrin/IMG-20250724-WA0018.jpg",
      "images/vitrin/IMG-20250724-WA0026.jpg",
      "images/vitrin/WhatsApp%20Image%202025-08-30%20at%2022.51.14.jpeg"
    ],
    features: [
      "Malzeme: Masif ahşap",
      "Dayanıklı menteşe ve kaplama",
      "Cam kapaklı şık tasarım",
      "El oyması klasik detaylar",
      "Altın varaklı süslemeler",
      "Parlak lake yüzey",
      "Kolay temizlenebilir yüzey"
    ],
    desc: "Vitrin, koleksiyonlarınızı sergilemenize imkan tanır. Şık ve güvenli depolama sunan tasarımıyla yemek odası ve salonlarda öne çıkar."
  },

  8: {
    id: 8,
    slug: "yemek_seti",
    title: "Tuğra Yemek Takımı (Masa + Sandalye)",
    short: "Tam takım yemek seti — masa ve 6 sandalyeden oluşan set.",
    images: [
      "images/yemek_seti/IMG-20250724-WA0035.jpg",
      "images/yemek_seti/WhatsApp%20Image%202025-08-30%20at%2022.51.06%20(3).jpeg",
      "images/yemek_seti/WhatsApp%20Image%202025-08-30%20at%2022.51.13.jpeg",
      "images/yemek_seti/WhatsApp%20Image%202025-08-30%20at%2022.51.14%20(3).jpeg"
    ],
    features: [
      "Malzeme: Masif ahşap masa ve sandalyeler",
      "Sandalyeler: 6 adet, sünger dolgulu oturum",
      "El oyması klasik detaylar",
      "Altın varaklı süslemeler",
      "Parlak lake yüzey",
      "Dayanıklı ve uzun ömürlü malzeme",
      "Kolay temizlenebilir yüzey"
    ],
    desc: "Aile yemekleri ve misafir ağırlamalar için tasarlanmış sağlam ve estetik bir yemek seti. Farklı yüzey finisajları ile sunulur."
  },

  9: {
    id: 9,
    slug: "konsol",
    title: "Tuğra Konsol",
    short: "Salon veya koridor için şık konsol.",
    images: [
      "images/konsol/IMG-20250724-WA0019.jpg",
      "images/konsol/IMG-20250724-WA0034.jpg",
      "images/konsol/IMG-20250724-WA0037.jpg",
      "images/konsol/WhatsApp%20Image%202025-08-30%20at%2022.51.06%20(2).jpeg",
      "images/konsol/WhatsApp%20Image%202025-08-30%20at%2022.51.14%20(4).jpeg",
      "images/konsol/WhatsApp%20Image%202025-08-30%20at%2022.51.15%20(2).jpeg"
    ],
    features: [
      "Malzeme: Masif ahşap",
      "Alt raf veya çekmece seçenekleri",
      "El oyması klasik detaylar",
      "Altın varaklı süslemeler",
      "Parlak lake yüzey",
      "Dayanıklı ve uzun ömürlü malzeme",
      "Kolay temizlenebilir yüzey"
    ],
    desc: "Hem depolama hem estetik kazandıran konsol modellerimiz, ev dekorasyonunuza sıcak bir başlangıç sağlar."
  }
};
