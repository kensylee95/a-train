export type Product = "Customer" | "Business";

export interface FeeItem {
  Service: string;
  Fee: string; // e.g., "FREE", "$15", "3%", "1.5% ($1 – $5)", "₦200"
  Description: string;
}

export type ProductCategories = Record<string, FeeItem[]>; // e.g., "US Virtual Bank Account": FeeItem[]

export type FeeSchedule = Record<Product, ProductCategories>;

export type FeesApiResponse = FeeSchedule;

export interface FXRateApiResponse {
  from: string;
  to: string;
  rate: number;
}
