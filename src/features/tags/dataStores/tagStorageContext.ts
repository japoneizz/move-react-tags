import { createContext, useContext } from 'react';
import { ITagLocalStorage } from '@/features/tags/dataStores/tagLocalStorage';

const TagStorageContext = createContext<ITagLocalStorage | undefined>(undefined);

export const TagStorageContextProvider = TagStorageContext.Provider;

export const useTagPersistentStorage = () => {
  const tagPersistentStorage = useContext(TagStorageContext);

  if (!tagPersistentStorage) {
    throw new Error('useTagPersistentStorage must be used inside of a TagStorageContext');
  }

  return tagPersistentStorage;
};
