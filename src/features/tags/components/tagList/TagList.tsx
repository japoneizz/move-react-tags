import React from 'react';
import styled from '@emotion/styled';

import TagItem from '@/features/tags/components/tagItem/TagItem';
import { ITagListViewModel } from '@/features/tags/components/tagList/tagListModel';

const TagListContainer = styled.div`
  margin: 20px 0;
  border-radius: 10px;
  height: calc(100vh - 220px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 98%;
`;

interface ITagListProps {
  viewModel: ITagListViewModel;
}

const TagList: React.FC<ITagListProps> = ({ viewModel }) => {
  const { tags } = viewModel;

  return (
    <TagListContainer>
      <List>
        {tags.map((tag) => {
          return (
            <li key={tag.getIdentifier()}>
              <TagItem tagItem={tag} />
            </li>
          );
        })}
      </List>
    </TagListContainer>
  );
};

export default TagList;

/**
 * Tried to use DI on the list but React started to complain when adding new tags and eventually broke the app.
 *
 * <li key={tag.id}>
 *   <TagItem viewModel={TagItemViewModel(tag)} />
 * </li>
 *
 * Warning: React has detected a change in the order of Hooks called by TagList.
 * This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hook
 */
