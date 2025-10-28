interface ServiceItem {
  Service: string;
  Fee: string;
  Description: string;
}

interface CustomerServices {
  "US Virtual Bank Account": ServiceItem[];
  "NG Virtual Bank Account": ServiceItem[];
  Payout: ServiceItem[];
  "Wallet to Wallet Transfer": ServiceItem[];
  "Freedom Virtual Card": ServiceItem[];
  FX: ServiceItem[];
}

interface BusinessServices {
  "US Virtual Bank Account": ServiceItem[];
  "NG Virtual Bank Account": ServiceItem[];
  "Business Collections": ServiceItem[];
  "Business Payout": ServiceItem[];
  "Wallet to Wallet Transfer": ServiceItem[];
  FX: ServiceItem[];
}

interface FeesInterface {
  Customer: CustomerServices;
  Business: BusinessServices;
}
