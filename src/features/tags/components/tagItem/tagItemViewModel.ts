import { FormEvent, useEffect, useRef, useState } from 'react';

import tagRepository from '@/features/tags/repositories/tagRepository';
import { ITagItemViewModel } from '@/features/tags/components/tagItem/tagItemModel';
import { ISerializedTag, Tag } from '@/features/tags/models/tag.model';
import { useTagPersistentStorage } from '@/features/tags/dataStores/tagStorageContext';

export function TagItemViewModel(tag: Tag): ITagItemViewModel {
  const { setTags } = useTagPersistentStorage();
  const [editTag, setEditTag] = useState<string>(tag.getLabel());

  const editInputRef = useRef<HTMLInputElement>(null);

  const editing = tag.getEditing();

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editing]);

  const onDelete = async (tagId: string) => {
    try {
      await tagRepository.deleteTag(tagId);
      setTags((state) => state.filter((tag) => tag.id !== tagId));
    } catch (error) {
      // handle 404
      console.log(error);
    }
  };

  const toggleEdit = (tagId: string) => {
    setTags((state) =>
      state.map((tag) => {
        if (tag.id === tagId) {
          tag.editing = true;
        }

        return tag;
      }),
    );
  };

  const onEdit = async (id: string, label: string) => {
    try {
      const newTag: ISerializedTag = { id, label, editing: false };
      await tagRepository.updateTag(newTag);
      setTags((state) => state.map((tag) => (tag.id === id ? newTag : tag)));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (e: FormEvent): void => {
    e.preventDefault();
    onEdit(tag.getIdentifier(), editTag);
  };

  return {
    tag,
    onDelete,
    toggleEdit,
    editTag,
    setEditTag,
    handleUpdate,
    editInputRef,
  };
}
