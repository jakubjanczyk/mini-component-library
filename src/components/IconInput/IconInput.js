import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    height: 24,
    iconSize: 16,
    borderSize: 1,
    fontSize: 14
  },
  large: {
    height: 36,
    iconSize: 24,
    borderSize: 2,
    fontSize: 18
  }
}

const Wrapper = styled.div`
  position: relative;
  
  color: ${COLORS.gray700};
  &:hover {
      color: ${COLORS.black};
  }
`

const Input = styled.input`
  border: none;
  width: ${({width}) => `${width}px`};
  padding-left: ${({size}) => `${size.height}px`};
  font-size: ${({size}) => `${size.fontSize}px`};
  height: ${({size}) => `${size.height}px`};
  line-height: ${({size}) => `${size.height}px`};;
  border-bottom: ${({size}) => `${size.borderSize}px`} solid ${COLORS.black};

  font-weight: 700;
  color: currentColor;

  outline-offset: 2px;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconUI = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size = 'large',
  placeholder,
}) => {
  const sizeConfig = SIZES[size]
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} size={sizeConfig} width={width} />
      <IconUI id={icon} size={sizeConfig.iconSize} strokeWidth={sizeConfig.borderSize}/>
    </Wrapper>
  );
};

export default IconInput;
