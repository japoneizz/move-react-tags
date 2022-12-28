import React from 'react';
import styled from '@emotion/styled';

import TagItemEdit from '@/features/tags/components/tagItemEdit/TagItemEdit';
import TagItemDisplay from '@/features/tags/components/tagItemDisplay/TagItemDisplay';
import { Tag } from '@/features/tags/models/tag.model';
import { TagItemViewModel } from '@/features/tags/components/tagItem/tagItemViewModel';

const TagItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  border-radius: 10px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
  margin: 10px 0;
`;

interface ITagItemProps {
  tagItem: Tag;
}

const TagItem: React.FC<ITagItemProps> = ({ tagItem }) => {
  const { tag, onDelete, toggleEdit, editTag, setEditTag, handleUpdate, editInputRef } = TagItemViewModel(tagItem);

  return (
    <TagItemContainer>
      {tag.getEditing() && <TagItemEdit viewModel={{ editTag, setEditTag, handleUpdate, editInputRef }} />}
      {!tag.getEditing() && <TagItemDisplay viewModel={{ tag, onDelete, toggleEdit }} />}
    </TagItemContainer>
  );
};

export default TagItem;
