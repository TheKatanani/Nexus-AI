export interface Package {
  name: string;
  img: string;
  title: string;
  description: string;
  features: {
    title: string;
    data: {
      title: string;
      items: string[];
    }[];
  }[];
  subscribeURL: string;
  subscribeText: string;
  color?: string;
}
export interface Review {
  text: string;
  name: string;
  country: string;
  avatar: string;
  rating?: number;
}

export interface Gallery {
  images: string[];
  videos: string[];
  reviews?: Review[];
}

export interface ServiceFeature {
  image: string;
  title: string;
  description: string;
  button: string;
}

export interface FeaturesSectionContent {
  features: {
    title: string;
    subtitle: string;
    services: ServiceFeature[];
  };
  showMore: string;
  showLess: string;
}
