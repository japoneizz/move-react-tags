import { ISerializedTag, Tag } from '@/features/tags/models/tag.model';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export interface ITagLocalStorage {
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<ISerializedTag[]>>;
}

const LOCAL_STORAGE_ID = 'move_tags';

export const TagLocalStorage = (): ITagLocalStorage => {
  const [tags, setTags] = useLocalStorage<ISerializedTag[]>(LOCAL_STORAGE_ID, []);
  const serializedTags = tags.map((tag) => Tag.deserialize(tag)).reverse();

  return {
    tags: serializedTags,
    setTags,
  };
};
