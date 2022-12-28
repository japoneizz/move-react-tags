import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { getByDataCy } from '@/utils/customQueries';

import TagInput, { ITagInputProps } from '@/features/tags/components/tagInput/TagInput';

const tagInputViewModelProviderStub: ITagInputProps = {
  viewModel: {
    handleSubmit: jest.fn((e) => e.preventDefault()),
    setTagLabel: jest.fn(),
    tagLabel: 'First tag',
  },
};

describe('testing TagInput', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should trigger the handleSubmit function with a valid input', async () => {
    const user = userEvent.setup();
    const { viewModel } = tagInputViewModelProviderStub;

    const handleSpy = jest.spyOn(viewModel, 'handleSubmit');
    const setTagLabelSpy = jest.spyOn(viewModel, 'setTagLabel');

    const { container } = render(<TagInput viewModel={viewModel} />);

    const input = screen.getByRole('textbox');
    const btn = getByDataCy(container, 'submit');

    await user.click(input);
    await user.keyboard(viewModel.tagLabel);
    await user.click(btn);

    expect(setTagLabelSpy).toBeCalledTimes(viewModel.tagLabel.length);
    expect(input).toBeValid();
    expect(handleSpy).toHaveBeenCalled();
  });

  it('should not trigger the handleSubmit function with a invalid input', async () => {
    const user = userEvent.setup();
    const { viewModel } = tagInputViewModelProviderStub;
    viewModel.tagLabel = '';

    const handleSpy = jest.spyOn(viewModel, 'handleSubmit');
    const setTagLabelSpy = jest.spyOn(viewModel, 'setTagLabel');

    const { container } = render(<TagInput viewModel={viewModel} />);

    const input = screen.getByRole('textbox');
    const btn = getByDataCy(container, 'submit');

    await user.click(btn);

    expect(setTagLabelSpy).not.toHaveBeenCalled();
    expect(input).toBeInvalid();
    expect(handleSpy).not.toHaveBeenCalled();
  });
});
