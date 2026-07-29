import type { CertificationItem } from "./types";

export const CERTIFICATIONS: CertificationItem[] = [
  { id: 1, name: "회계관리2급", issuer: "삼일회계법인", date: "2021.07", category: "accounting" },
  { id: 2, name: "전산회계운용사3급", issuer: "대한상공회의소", date: "2021.05", category: "accounting" },
  { id: 3, name: "FAT1급", issuer: "한국공인회계사회", date: "2020.12", category: "accounting" },
  { id: 4, name: "FAT2급", issuer: "한국공인회계사회", date: "2020.11", category: "accounting" },
  { id: 5, name: "전산회계1급", issuer: "한국세무사회자격시험", date: "2020.10", category: "accounting" },
  { id: 6, name: "ERP정보관리사 회계2급", issuer: "한국생산성본부", date: "2020.08", category: "accounting" },
  { id: 7, name: "일러스트1급", issuer: "한국생산성본부", date: "2020.06", category: "design" },
  { id: 8, name: "전산회계2급", issuer: "한국세무사회자격시험", date: "2019.12", category: "accounting" },
  { id: 9, name: "DIAT한글, 파워포인트, 엑셀", issuer: "한국정보통신진흥협회", date: "2019.03", category: "office" },
  { id: 10, name: "일러스트2급, GTQ포토샵1급", issuer: "한국생산성본부", date: "2019.07", category: "design" },
  { id: 11, name: "GTQ포토샵2급", issuer: "한국생산성본부", date: "2018.07", category: "design" },
  { id: 12, name: "ITQ한글, 파워포인트, 엑셀, 액세스", issuer: "한국생산성본부", date: "2018.05", category: "office" },
];

export const CERT_CATEGORY_LABEL: Record<CertificationItem["category"], string> = {
  accounting: "회계",
  design: "디자인",
  office: "OA",
};
