export interface AvatarCircleProps {
  avatar_url: string;
}
export interface ReviewsData {
  avatar_url: string;
  name: string;
  position: string;
  review: string;
}

export const avatarList: string[] = [
  "/homepage/avt-1.webp",
  "/homepage/avt-2.webp",
  "/homepage/avt-3.webp",
  "/homepage/avt-4.webp",
];
export const companiesHomepageList: string[] = [
  "/homepage/company-1.svg",
  "/homepage/company-2.svg",
  "/homepage/company-3.svg",
  "/homepage/company-4.svg",
  "/homepage/company-5.svg",
  "/homepage/company-6.svg",
  "/homepage/company-7.svg",
  "/homepage/company-8.svg",
  "/homepage/company-9.svg",
];

export const courseReviews: ReviewsData[] = [
  {
    avatar_url: avatarList[0],
    name: "Prima Riski Galih",
    position: "DevOps Engineer at Unilever",
    review:
      "Pembelajaran di Orimi sangat efektif dan to the point. Materi disampaikan dengan jelas.",
  },
  {
    avatar_url: avatarList[1],
    name: "Risma Raisa",
    position: "Frontend Developer at Tiket.com",
    review:
      "Recomended sih buat temanteman semua yang suka pembelajaran dari video dan teks secara bersamaan",
  },
  {
    avatar_url: avatarList[2],
    name: "Rizky Angkasa Perkasa",
    position: "Project Manager at PT Cahaya Maju",
    review:
      "Orimi benar-benar memudahkan belajar IT. Materinya terstruktur dengan baik. Sangat direkomendasikan bagi yang ingin belajar efektif!",
  },
];
