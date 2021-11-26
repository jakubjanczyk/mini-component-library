/* eslint-disable no-unused-vars */
import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZE_HEIGHT = {
  large: 24,
  medium: 12,
  small: 8
}

const Container = styled.div`
  width: 370px;
  height: ${({ size }) => `${SIZE_HEIGHT[size]}px`};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 8px;
  padding: ${({ size }) => size === 'large' ? '4px' : '0'};
`

const Bar = styled.div`
  width: ${({ value }) => `${value}%`};
  background-color: ${COLORS.primary};
  height: 100%;
  border-radius: 4px;

  ${({ value }) => value !== 100 && css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
`

const ProgressBar = ({ value = 0, size = 'medium' }) => {
  return (
    <Container size={size} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <Bar value={value} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Container>
  )
}

export default ProgressBar
