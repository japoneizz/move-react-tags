import { ISerializedTag, Tag } from '@/features/tags/models/tag.model';

export interface ITagListViewModel {
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<ISerializedTag[]>>;
}
