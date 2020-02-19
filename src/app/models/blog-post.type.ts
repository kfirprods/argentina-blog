import { Paragraph } from './paragraph.type';
export interface BlogPost {
  id: string;
  title: string;
  previewTitle: string;
  previewImage: string;
  uploadTime: Date;
  largeImage: string;
  gallery: string[];

  paragraphs: Paragraph[];
}
