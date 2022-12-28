import React from 'react';
import { render } from '@testing-library/react';
import { getByDataCy } from '@/utils/customQueries';
import userEvent from '@testing-library/user-event';

import { Tag } from '@/features/tags/models/tag.model';
import TagItemDisplay from '../TagItemDisplay';

const tagItemViewModelStub = {
  tag: new Tag('Tag 1', false),
  onDelete: jest.fn(),
  toggleEdit: jest.fn(),
};

describe('testing TagItemDisplay', () => {
  it('should call onDelete', async () => {
    const user = userEvent.setup();
    const deleteSpy = jest.spyOn(tagItemViewModelStub, 'onDelete');

    const { container } = render(<TagItemDisplay viewModel={tagItemViewModelStub} />);

    const btn = getByDataCy(container, 'delete-button');
    await user.click(btn);

    expect(deleteSpy).toHaveBeenCalled();
  });

  it('should call toggleEdit', async () => {
    const user = userEvent.setup();
    const editSpy = jest.spyOn(tagItemViewModelStub, 'toggleEdit');

    const { container } = render(<TagItemDisplay viewModel={tagItemViewModelStub} />);

    const btn = getByDataCy(container, 'edit-button');
    await user.click(btn);

    expect(editSpy).toHaveBeenCalled();
  });
});
