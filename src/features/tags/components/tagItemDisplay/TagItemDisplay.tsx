import React from 'react';
import styled from '@emotion/styled';

import { ITagItemDisplayViewModel } from './tagItemDisplayModel';

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
  background: #145da0;
  border-radius: 0 10px 10px 0;
`;

const TagLabel = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TagButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 10px 0 0 0;
`;

const TagButton = styled.button`
  border: none;
  outline: none;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  border-radius: 10px;
  padding: 5px 20px;
  cursor: pointer;
`;

interface ITagItemDisplayProps {
  viewModel: ITagItemDisplayViewModel;
}

const TagItemDisplay: React.FC<ITagItemDisplayProps> = ({ viewModel }) => {
  const { tag, onDelete, toggleEdit } = viewModel;

  return (
    <TagItemContainer role="contentinfo">
      <TagItemId>{tag.getIdentifier()}</TagItemId>
      <TagItem>
        <TagLabel>{tag.getLabel()}</TagLabel>
        <TagButtonContainer>
          <TagButton data-cy="delete-button" onClick={() => onDelete(tag.getIdentifier())}>
            Delete
          </TagButton>
          <TagButton
            data-cy="edit-button"
            onClick={() => {
              toggleEdit(tag.getIdentifier());
            }}
          >
            Edit
          </TagButton>
        </TagButtonContainer>
      </TagItem>
    </TagItemContainer>
  );
};

export default TagItemDisplay;
