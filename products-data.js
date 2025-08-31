const PRODUCTS = {
  1: {
    id: 1,
    slug: "kanepe",
    title: "Modern Kanepe",
    short: "Şık ve konforlu 3 kişilik kanepe — yüksek yoğunluklu sünger.",
    price: "₺8.900",
    images: [
      "images/kanepe/IMG-20250724-WA0022.jpg",
      "images/kanepe/IMG-20250724-WA0027.jpg",
      "images/kanepe/IMG-20250724-WA0032.jpg",
      "images/kanepe/IMG-20250724-WA0033.jpg",
      "images/kanepe/WhatsApp%20Image%202025-08-30%20at%2022.51.05%20(1).jpeg",
      "images/kanepe/WhatsApp%20Image%202025-08-30%20at%2022.51.05%20(6).jpeg",
      "images/kanepe/WhatsApp%20Image%202025-08-30%20at%2022.51.07.jpeg",
      "images/kanepe/WhatsApp%20Image%202025-08-30%20at%2022.51.14%20(1).jpeg"
    ],
    features: [
      "Boyut: 220cm x 95cm x 85cm",
      "Malzeme: Masif ahşap iskelet, yüksek yoğunluklu sünger",
      "Kumaş: Leke tutmaz, değişebilir kılıf seçenekleri"
    ],
    desc: "Modern kanepe; geniş oturma alanı, ergonomik sırt yapısı ve uzun ömürlü dolgu malzemesi ile tasarlandı. Hem şehir dairelerine hem de geniş salonlara uyum sağlar."
  },

  2: {
    id: 2,
    slug: "berjer",
    title: "Estetik Berjer",
    short: "Konforlu tek kişilik koltuk — okuma köşeleri için ideal.",
    price: "₺2.400",
    images: [
      "images/berjer/IMG-20250724-WA0030.jpg",
      "images/berjer/IMG-20250724-WA0031.jpg",
      "images/berjer/IMG-20250724-WA0036.jpg",
      "images/berjer/IMG-20250724-WA0043.jpg",
      "images/berjer/WhatsApp%20Image%202025-08-30%20at%2022.51.05%20(3).jpeg"
    ],
    features: [
      "Boyut: 85cm x 80cm x 90cm",
      "Ayak: Masif ahşap",
      "Dolgu: Yüksek elastikiyetli sünger"
    ],
    desc: "Şık hatlara sahip berjerimiz, okunacak köşeler, balkonlar veya bekleme alanları için konfor ve estetik bir çözüm sunar. Farklı kumaş ve renk seçenekleri mevcuttur."
  },

  3: {
    id: 3,
    slug: "orta_masa",
    title: "Orta Sehpa (Orta Masa)",
    short: "Minimal ve fonksiyonel orta sehpa — salonlarınıza modern dokunuş.",
    price: "₺1.800",
    images: [
      "images/orta_masa/IMG-20250724-WA0016.jpg",
      "images/orta_masa/IMG-20250724-WA0017.jpg",
      "images/orta_masa/IMG-20250724-WA0021.jpg",
      "images/orta_masa/WhatsApp%20Image%202025-08-30%20at%2022.51.05%20(5).jpeg",
      "images/orta_masa/WhatsApp%20Image%202025-08-30%20at%2022.51.05.jpeg",
      "images/orta_masa/WhatsApp%20Image%202025-08-30%20at%2022.51.07.jpeg",
      "images/orta_masa/WhatsApp%20Image%202025-08-30%20at%2022.51.14%20(2).jpeg",
      "images/orta_masa/WhatsApp%20Image%202025-08-30%20at%2022.51.15.jpeg"
    ],
    features: [
      "Boyut: 120cm x 60cm x 45cm (örnek)",
      "Malzeme: MDF / Kaplama ahşap",
      "Depolama: Gizli alt raf"
    ],
    desc: "Günlük kullanım için dayanıklı ve estetik bir orta sehpa. Çay-kahve servisleri ve dekoratif objeler için ideal yüzeye sahiptir."
  },

  4: {
    id: 4,
    slug: "tv_unit",
    title: "TV Ünitesi",
    short: "Geniş depolama alanlı TV ünitesi — kablo yönetimi dahil.",
    price: "₺4.200",
    images: [
      "images/tv_unit/IMG-20250724-WA0028.jpg",
      "images/tv_unit/IMG-20250724-WA0029.jpg",
      "images/tv_unit/WhatsApp%20Image%202025-08-30%20at%2022.51.15%20(3).jpeg",
      "images/tv_unit/WhatsApp%20Image%202025-08-30%20at%2022.51.15%20(4).jpeg"
    ],
    features: [
      "Genişlik: 180cm (seçenekli)",
      "Kapaklı dolap ve açık raf kombinasyonu",
      "Kablo geçiş delikleri ve güçlü montaj ekipmanı"
    ],
    desc: "Modern hatları ve işlevsel depolama çözümleriyle TV ünitemiz multimedya ekipmanlarını düzenli tutar ve salon dekorunuza uyum sağlar."
  },

  5: {
    id: 5,
    slug: "yan_sehpa",
    title: "Yan Sehpa (Komodin)",
    short: "Küçük ama kullanışlı yan sehpa — gece veya oturma grubu için.",
    price: "₺650",
    images: [
      "images/yan_sehpa/WhatsApp%20Image%202025-08-30%20at%2022.51.05%20(4).jpeg"
    ],
    features: [
      "Boyut: 45cm x 45cm x 55cm",
      "Hafif taşınabilir",
      "Çizilmeye dayanıklı kaplama"
    ],
    desc: "Klasik ve modern seçenekleriyle yan sehpalarımız, hem dekoratif hem de fonksiyonel kullanım sağlar. Komodin olarak yatak yanında da tercih edilir."
  },

  6: {
    id: 6,
    slug: "sandalye",
    title: "Tasarım Sandalye",
    short: "Ergonomik ve zarif yemek sandalyesi — set olarak veya tekil.",
    price: "₺1.250",
    images: [
      "images/sandalye/IMG-20250724-WA0020.jpg",
      "images/sandalye/IMG-20250724-WA0038.jpg",
      "images/sandalye/IMG-20250724-WA0039.jpg",
      "images/sandalye/IMG-20250724-WA0040.jpg",
      "images/sandalye/IMG-20250724-WA0041.jpg",
      "images/sandalye/IMG-20250724-WA0042.jpg",
      "images/sandalye/WhatsApp%20Image%202025-08-30%20at%2022.51.05%20(2).jpeg",
      "images/sandalye/WhatsApp%20Image%202025-08-30%20at%2022.51.06%20(3).jpeg",
      "images/sandalye/WhatsApp%20Image%202025-08-30%20at%2022.51.08.jpeg"
    ],
    features: [
      "Malzeme: Ahşap / Metal iskelet opsiyonları",
      "Koltuk: Süngerli ve kumaş/kauçuk seçenekleri",
      "Stabil ve hafif tasarım"
    ],
    desc: "Yemek masalarına modern bir dokunuş getiren sandalyelerimiz, uzun oturumlarda bile konforu korur. Renk ve döşeme opsiyonlarıyla kişiselleştirilebilir."
  },

  7: {
    id: 7,
    slug: "vitrin",
    title: "Vitrin",
    short: "Cam kapaklı şık vitrin — dekoratif obje ve porselen saklama.",
    price: "₺6.300",
    images: [
      "images/vitrin/IMG-20250724-WA0018.jpg",
      "images/vitrin/IMG-20250724-WA0026.jpg",
      "images/vitrin/WhatsApp%20Image%202025-08-30%20at%2022.51.14.jpeg",
      "images/vitrin/WhatsApp%20Image%202025-08-30%20at%2022.51.15%20(1).jpeg"
    ],
    features: [
      "Cam raflar ve dahili aydınlatma (opsiyonel)",
      "Kilitleme mekanizmalı kapaklar",
      "Dayanıklı menteşe ve kaplama"
    ],
    desc: "Vitrin, koleksiyonlarınızı sergilemenize imkan tanır. Şık ve güvenli depolama sunan tasarımıyla yemek odası ve salonlarda öne çıkar."
  },

  8: {
    id: 8,
    slug: "yemek_seti",
    title: "Yemek Seti (Masa + Sandalye)",
    short: "Tam takım yemek seti — masa ve 4 sandalyeden oluşan set.",
    price: "₺12.500",
    images: [
      "images/yemek_seti/IMG-20250724-WA0035.jpg",
      "images/yemek_seti/WhatsApp%20Image%202025-08-30%20at%2022.51.06%20(1).jpeg",
      "images/yemek_seti/WhatsApp%20Image%202025-08-30%20at%2022.51.06%20(3).jpeg",
      "images/yemek_seti/WhatsApp%20Image%202025-08-30%20at%2022.51.13.jpeg",
      "images/yemek_seti/WhatsApp%20Image%202025-08-30%20at%2022.51.14%20(3).jpeg"
    ],
    features: [
      "Masa boyutu: 160cm x 90cm (isteğe göre genişletilebilir)",
      "Sandalyeler: 4 adet (aynı model)",
      "Malzeme: Masif ahşap / dayanıklı yüzey"
    ],
    desc: "Aile yemekleri ve misafir ağırlamalar için tasarlanmış sağlam ve estetik bir yemek seti. Farklı yüzey finisajları ile sunulur."
  },

  9: {
    id: 9,
    slug: "konsol",
    title: "Konsol",
    short: "Giriş veya koridor için şık konsol — anahtar ve posta için ideal.",
    price: "₺3.500",
    images: [
      "images/konsol/IMG-20250724-WA0019.jpg",
      "images/konsol/IMG-20250724-WA0034.jpg",
      "images/konsol/IMG-20250724-WA0037.jpg",
      "images/konsol/WhatsApp%20Image%202025-08-30%20at%2022.51.06%20(2).jpeg",
      "images/konsol/WhatsApp%20Image%202025-08-30%20at%2022.51.14%20(4).jpeg",
      "images/konsol/WhatsApp%20Image%202025-08-30%20at%2022.51.15%20(2).jpeg"
    ],
    features: [
      "Dar alanlar için ideal ölçüler",
      "Alt raf veya çekmece seçenekleri",
      "Duvara monte veya ayaklı modeller"
    ],
    desc: "Giriş alanına hem depolama hem estetik kazandıran konsol modellerimiz, ev dekorasyonunuza sıcak bir başlangıç sağlar."
  }
};
