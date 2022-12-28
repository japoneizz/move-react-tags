import { FormEvent } from 'react';

export interface ITagInputViewModel {
  tagLabel: string;
  handleSubmit: (e: FormEvent) => void;
  setTagLabel: React.Dispatch<React.SetStateAction<string>>;
}
