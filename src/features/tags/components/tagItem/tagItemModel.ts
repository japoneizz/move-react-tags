import { FormEvent } from 'react';
import { Tag } from '@/features/tags/models/tag.model';

export interface ITagItemViewModel {
  tag: Tag;
  onDelete: (id: string) => Promise<void>;
  toggleEdit: (id: string) => void;
  editTag: string;
  setEditTag: React.Dispatch<React.SetStateAction<string>>;
  handleUpdate: (e: FormEvent) => void;
  editInputRef: React.RefObject<HTMLInputElement>;
}
