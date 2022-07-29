import styled from "styled-components";

export const RemoveButton = styled.button`
  border-style: none;
  width: 100%;
  height: 1.2rem;
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  tr {
    padding: 0;
    margin: 0;
  }
  td {
    padding: 0;
    margin: 0;
    &:focus {
      border: 5px solid yellow;
    }
  }
`;
export const Input = styled.input`
  border-style: none;
  border: 1px solid rgb(220, 220, 220);
  width: 5rem;
  height: 1.2rem;
  padding: 1px;
  color: rgb(100, 100, 100);
  &::placeholder {
    color: rgb(220, 220, 220);
  }
  &:hover {
    cursor: default;
  }
  &:focus {
    color: rgb(5, 5, 5);
    outline: none;
    padding: 0px;
    border: 2px solid #1a73e8;
    cursor: text;
  }

  &::before {
    content: " - Remember this";
    background-color: yellow;
    color: red;
    font-weight: bold;
  }
`;
