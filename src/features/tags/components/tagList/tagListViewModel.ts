import { useEffect } from 'react';

import { useTagPersistentStorage } from '@/features/tags/dataStores/tagStorageContext';
import { ITagListViewModel } from '@/features/tags/components/tagList/tagListModel';
import tagRepository from '@/features/tags/repositories/tagRepository';

export function TagListViewModel(): ITagListViewModel {
  const { tags, setTags } = useTagPersistentStorage();

  useEffect(() => {
    tagRepository.getAllTags().then((tagList) => setTags(tagList));
  }, [setTags]);

  return {
    tags,
    setTags,
  };
}
