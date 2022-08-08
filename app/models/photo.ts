interface IPhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface IPhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface IPhotoSponsorshipSponsor {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url: string;
  bio: string;
  location?: string;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  };
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: {
    instagram_username: string;
    portfolio_url: string;
    twitter_username?: string;
    paypal_email?: string;
  };
}

interface IPhotoSponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: IPhotoSponsorshipSponsor;
}

interface IPhotoTopicSubmissions {
  [key: string]: string;
}

interface IPhotoUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface IPhotoUserProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface IPhotoUserSocial {
  instagram_username: string;
  portfolio_url: string;
  twitter_username?: string;
  paypal_email?: string;
}

interface IPhotoUser {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url: string;
  bio: string;
  location?: string;
  links: IPhotoUserLinks;
  profile_image: IPhotoUserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: IPhotoUserSocial;
}

export interface IPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description?: string;
  urls: IPhotoUrls;
  links: IPhotoLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: IPhotoSponsorship;
  topic_submissions: IPhotoTopicSubmissions;
  user: IPhotoUser;
}
