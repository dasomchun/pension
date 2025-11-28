export interface Room {
  id: string;
  name: string;
  engName: string;
  summary: string;
  description: string;
  features: string[];
  imageUrl: string;
  price: string;
}

export interface Amenity {
  id: string;
  title: string;
  engTitle: string;
  description: string;
  icon: string; // Using string identifiers for icons
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum Page {
  HOME = 'home',
  ROOMS = 'rooms',
  AMENITIES = 'amenities',
  RESERVATION = 'reservation'
}