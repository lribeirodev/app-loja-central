import { SafeResourceUrl } from "@angular/platform-browser";

export interface IProductItem {
  thumb: string;
  name: string;
  description: string;
  video: string;
  group: string;
  release: number;
  type: string;
  link: string;
  safeVideo: SafeResourceUrl;
}
