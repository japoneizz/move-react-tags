import React from 'react';
import styled from '@emotion/styled';

import { TagListViewModel } from '@/features/tags/components/tagList/tagListViewModel';
import TagList from '@/features/tags/components/tagList/TagList';
import TagInput from '@/features/tags/components/tagInput/TagInput';
import { TagInputViewModel } from '@/features/tags/components/tagInput/tagInputViewModel';

const TagHomeContainer = styled.div`
  width: 400px;
  max-width: 400px;
`;

const TagHome: React.FC = () => {
  return (
    <TagHomeContainer>
      <TagInput viewModel={TagInputViewModel()} />
      <TagList viewModel={TagListViewModel()} />
    </TagHomeContainer>
  );
};

export default TagHome;
