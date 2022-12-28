import { FormEvent } from 'react';

export interface ITagItemEditViewModel {
  editTag: string;
  setEditTag: React.Dispatch<React.SetStateAction<string>>;
  handleUpdate: (e: FormEvent) => void;
  editInputRef: React.RefObject<HTMLInputElement>;
}
