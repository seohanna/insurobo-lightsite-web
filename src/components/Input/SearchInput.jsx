import React from 'react';
import styled from 'styled-components';
import Input from '.';
import search from '../../assets/icon/common/icon-input_serch.png';

const SearchInput = ({ name, onClick }) => {
  return (
    <Wrap>
      <Input name={name} placeholder='검색어를 입력해 주세요.' />
      <SearchButton onClick={onClick} />
    </Wrap>
  )
}


export default SearchInput;

const Wrap = styled.div`
  width: 100%;
  position: relative;
  > input {
    padding-right: 52px;
  }
`;

const SearchButton = styled.button`
  width: 36px;
  height: 36px;
  background-image: url(${search});
  background-size: contain;
  position: absolute;
  top: 50%;
  right: 8px;
  margin-top: -18px;
`;


