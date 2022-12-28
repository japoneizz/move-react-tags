import { Tag } from '@/features/tags/models/tag.model';

export interface ITagItemDisplayViewModel {
  tag: Tag;
  onDelete: (id: string) => Promise<void>;
  toggleEdit: (id: string) => void;
}
