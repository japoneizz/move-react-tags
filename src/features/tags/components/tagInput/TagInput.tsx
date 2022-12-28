import React from 'react';
import styled from '@emotion/styled';
import { ITagInputViewModel } from './tagInputModel';

const InputContainer = styled.div`
  padding: 20px;
  border: 1px solid #2e8bc0;
  border-radius: 10px;
  background-color: white;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
`;

const InputForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 80px;
  gap: 16px;
`;

const InputHeader = styled.h1`
  color: #145da0;
  margin: 0 0 16px 0;
  font-size: 30px;
`;

const Input = styled.input`
  border: 1px solid #2e8bc0;
  border-radius: 10px;
  outline: none;
  padding: 12px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #145da0;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export interface ITagInputProps {
  viewModel: ITagInputViewModel;
}

const TagInput: React.FC<ITagInputProps> = ({ viewModel }) => {
  const { handleSubmit, tagLabel, setTagLabel } = viewModel;

  return (
    <InputContainer>
      <InputHeader>My tags</InputHeader>
      <InputForm onSubmit={handleSubmit}>
        <Input
          type="text"
          data-cy="input"
          value={tagLabel}
          onChange={(event) => setTagLabel(event.target.value)}
          placeholder="Enter tag name"
          required
        />
        <Button type="submit" data-cy="submit">
          Add
        </Button>
      </InputForm>
    </InputContainer>
  );
};

export default TagInput;
