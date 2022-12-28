import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { getByDataCy } from '@/utils/customQueries';

import TagItem from '@/features/tags/components/tagItem/TagItem';
import { Tag } from '@/features/tags/models/tag.model';
import { TagStorageContextProvider } from '@/features/tags/dataStores/tagStorageContext';
import client from '@/respositories/client';

const axiosMock = new MockAdapter(client);

const storageProviderStub = {
  tags: [],
  setTags: jest.fn(),
};

describe('testing TagItem', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should call setTags after click on delete btn', async () => {
    const user = userEvent.setup();
    const tag = new Tag('Tag 1');
    axiosMock.onDelete(`/tags/${tag.getIdentifier()}`).reply(202, tag);

    const setTagsSpy = jest.spyOn(storageProviderStub, 'setTags');

    const { container } = render(
      <TagStorageContextProvider value={storageProviderStub}>
        <TagItem tagItem={tag} />
      </TagStorageContextProvider>,
    );

    const deleteBtn = getByDataCy(container, 'delete-button');

    await user.click(deleteBtn);

    expect(deleteBtn).toBeInTheDocument();
    expect(setTagsSpy).toBeCalled();
  });

  it('should call setTags after click on edit btn', async () => {
    const user = userEvent.setup();
    const tag = new Tag('Tag 1');

    const setTagsSpy = jest.spyOn(storageProviderStub, 'setTags');

    const { container } = render(
      <TagStorageContextProvider value={storageProviderStub}>
        <TagItem tagItem={tag} />
      </TagStorageContextProvider>,
    );

    const editBtn = getByDataCy(container, 'edit-button');

    await user.click(editBtn);

    expect(editBtn).toBeInTheDocument();
    expect(setTagsSpy).toBeCalled();
  });

  it('should call handleSubmit after fill input and click on submit btn on edit mode', async () => {
    const user = userEvent.setup();
    const tag = new Tag('Tag 1');
    tag.toggleEditing();

    axiosMock.onPut(`/tags/${tag.getIdentifier()}`).reply(201, tag);

    const setTagsSpy = jest.spyOn(storageProviderStub, 'setTags');

    const { container } = render(
      <TagStorageContextProvider value={storageProviderStub}>
        <TagItem tagItem={tag} />
      </TagStorageContextProvider>,
    );

    const input = getByDataCy(container, 'input');
    const submitBtn = getByDataCy(container, 'submit');

    await user.click(input);
    await user.keyboard('New Tag');
    await user.click(submitBtn);

    expect(input).toBeInTheDocument();
    expect(input).toBeValid();
    expect(setTagsSpy).toBeCalled();
  });
});
