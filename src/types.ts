export interface API {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: 'Free' | 'Paid' | 'Freemium';
  url: string;
  imageUrl?: string;
  tags: string[];
  country: string;
  type: 'REST' | 'GraphQL' | 'SOAP' | 'WebSocket' | 'gRPC';
}

export type Category = {
  name: string;
  icon: string;
  description: string;
};

export interface Filters {
  category: string | null;
  country: string | null;
  pricing: string | null;
  type: string | null;
}