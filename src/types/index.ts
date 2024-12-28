export type Offer = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  location: string;
  createdAt: string;
  company: string;
  priceRange: string;
};

export type OfferDetails = {
  id: string;
  title: string;
  tags: string[];
  location: string;
  createdAt: string;
  company: string;
  priceRange: string;
  requirements: string;
  responsibilities: string;
  description: string;
};

export type SignUpCredentials = {
  email: string;
  password: string;
  username: string;
};

export type SignInCredentials = {
  username: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
};

export type TokenPayload = {
  token: string;
};
