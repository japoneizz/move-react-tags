import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Tag } from '@/features/tags/models/tag.model';

describe('testing useLocalStorageHook', () => {
  const LOCAL_STORAGE_ID = 'move_tags';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should be be able to add a Tag', () => {
    const { result } = renderHook(() => useLocalStorage<Tag[]>(LOCAL_STORAGE_ID, []));
    const [, setValue] = result.current;

    const tag = new Tag('New Tag', false);
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    act(() => {
      setValue((state) => [...state, tag]);
    });

    const localStorageItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID)!);

    expect(setItemSpy).toHaveBeenCalled();
    expect(localStorageItem).toEqual([tag]);
    expect(localStorageItem).toHaveLength(1);
  });

  it('should be be able to add multiple Tag', () => {
    const { result } = renderHook(() => useLocalStorage<Tag[]>(LOCAL_STORAGE_ID, []));
    const [, setValue] = result.current;

    const tag = [new Tag('New Tag', false), new Tag('New Tag 2', false)];

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    act(() => {
      setValue((state) => [...state, ...tag]);
    });

    const localStorageItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID)!);

    expect(setItemSpy).toHaveBeenCalled();
    expect(localStorageItem).toEqual(tag);
    expect(localStorageItem).toHaveLength(2);
  });
});
