import React from 'react';
import styled from '@emotion/styled';
import EditIcon from '@mui/icons-material/Edit';

import { ITagItemEditViewModel } from '@/features/tags/components/tagItemEdit/tagItemEditModel';

const TagItemContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  height: 100%;
  width: 100%;
  border-radius: 0 10px 10px 0;
`;

const TagItemId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #145da0;
  height: 100%;
  background-color: white;
  border-radius: 10px 0 0 10px;
  border: 1px solid #b1d4e0;
`;

const TagItem = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: #b1d4e0;
  border-radius: 0 10px 10px 0;
`;

const InputForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 80px;
  gap: 16px;
`;

const Input = styled.input`
  border: none;
  color: #4e4e4e;
  border-radius: 10px;
  outline: none;
  padding: 12px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: white;
  color: #145da0;
  border-radius: 10px;
  cursor: pointer;
`;

interface ITagItemEditProps {
  viewModel: ITagItemEditViewModel;
}

const TagItemEdit: React.FC<ITagItemEditProps> = ({ viewModel }) => {
  const { editTag, setEditTag, handleUpdate, editInputRef } = viewModel;

  return (
    <TagItemContainer>
      <TagItemId>
        <EditIcon />
      </TagItemId>
      <TagItem>
        <InputForm onSubmit={(e) => handleUpdate(e)}>
          <Input
            type="text"
            value={editTag}
            onChange={(e) => setEditTag(e.target.value)}
            ref={editInputRef}
            required
            data-cy="input"
          />
          <Button data-cy="submit" type="submit">
            Save
          </Button>
        </InputForm>
      </TagItem>
    </TagItemContainer>
  );
};

export default TagItemEdit;
