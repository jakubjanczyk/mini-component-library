import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const BuiltInSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  cursor: pointer;
`

const Wrapper = styled.div`
  width: max-content;
  
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  
  position: relative;
  
  &:hover {
    color: ${COLORS.black};
  }
`

const Content = styled.div`
  height: 100%;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  
  background-color: ${COLORS.transparentGray15};
  
  ${BuiltInSelect}:focus + & {
    outline: 1px solid -webkit-focus-ring-color;
  }
`

const IconUI = styled(Icon)`
  margin-left: 24px;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <BuiltInSelect value={value} onChange={onChange}>
        {children}
      </BuiltInSelect>
      <Content>
        {displayedValue}
        <IconUI id="chevron-down" />
      </Content>
    </Wrapper>

  );
};

export default Select;
