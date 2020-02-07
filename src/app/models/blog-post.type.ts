import { Paragraph } from './paragraph.type';
import { BlogPostContent } from './blog-post-content.type';
import { BlogMedia } from './blog-media.type';
import { firestore } from 'firebase';

export interface BlogPost {
  id: string;
  title: string;
  uploadTime: firestore.Timestamp;
  titleImage: string;
  paragraphs: Paragraph[];
}
