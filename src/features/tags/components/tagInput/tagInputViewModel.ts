import { FormEvent, useState } from 'react';

import { ITagInputViewModel } from '@/features/tags/components/tagInput/tagInputModel';
import { useTagPersistentStorage } from '@/features/tags/dataStores/tagStorageContext';
import tagRepository from '@/features/tags/repositories/tagRepository';

export function TagInputViewModel(): ITagInputViewModel {
  const { setTags } = useTagPersistentStorage();

  const [tagLabel, setTagLabel] = useState<string>('');

  const onAddTag = async (label: string) => {
    try {
      const newTag = await tagRepository.createTag({ label, editing: false });
      setTags((state) => [...state, newTag]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onAddTag(tagLabel);
    setTagLabel('');
  };

  return {
    tagLabel,
    handleSubmit,
    setTagLabel,
  };
}
