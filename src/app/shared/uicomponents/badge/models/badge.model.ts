export interface badgeColorModel {
  text_color: string;
  background_color: string;
  value:string;
}

export class BadgeModel {
  status?: string;
  role?: string;
  email?: string;
  teams?: string[];
}
