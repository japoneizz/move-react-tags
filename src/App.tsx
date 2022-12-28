import React from 'react';
import styled from '@emotion/styled';
import './App.css';

import TagHome from '@/features/tags/components/tagHome/TagHome';
import { TagLocalStorage } from '@/features/tags/dataStores/tagLocalStorage';
import { TagStorageContextProvider } from '@/features/tags/dataStores/tagStorageContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
  font-size: 24px;
  background-image: url(assets/images/bg.webp);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  height: 100vh;
  background-color: #145da0;
`;

const App: React.FC = () => {
  return (
    <Container>
      <TagStorageContextProvider value={TagLocalStorage()}>
        <TagHome />
      </TagStorageContextProvider>
    </Container>
  );
};

export default App;
