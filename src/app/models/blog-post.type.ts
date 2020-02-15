import { Paragraph } from './paragraph.type';
import { BlogPostContent } from './blog-post-content.type';
import { BlogMedia } from './blog-media.type';
import { firestore } from 'firebase';

export interface BlogPost {
  title: string;
  previewTitle: string;
  previewImage: string;
  uploadTime: firestore.Timestamp;
  largeImage: string;
}
