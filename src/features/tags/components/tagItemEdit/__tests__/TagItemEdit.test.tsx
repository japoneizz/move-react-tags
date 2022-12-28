import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import { getByDataCy } from '@/utils/custom-queries';
import TagItemEdit from '@/features/tags/components/tagItemEdit/TagItemEdit';

const tagItemEditPropsStub = {
  editTag: 'Tag 1',
  setEditTag: jest.fn(),
  handleUpdate: jest.fn((e) => e.preventDefault()),
  editInputRef: { current: null },
};

describe('testing TagItemEdit', () => {
  it('should call handleUpdate', async () => {
    const user = userEvent.setup();
    const tagLabel = 'New Tag';

    const handleUpdateSpy = jest.spyOn(tagItemEditPropsStub, 'handleUpdate');
    const setEditTagSpy = jest.spyOn(tagItemEditPropsStub, 'setEditTag');

    const { container } = render(<TagItemEdit viewModel={tagItemEditPropsStub} />);

    const input = getByDataCy(container, 'input') as HTMLInputElement;
    const btn = getByDataCy(container, 'submit');

    await user.click(input);
    await user.keyboard(tagLabel);
    await user.click(btn);

    expect(handleUpdateSpy).toHaveBeenCalled();
    expect(setEditTagSpy).toHaveBeenCalledTimes(tagLabel.length);
  });
});
