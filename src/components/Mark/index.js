import React from 'react'
import styled from 'styled-components'

const Mark = styled.div`
  grid-area: mark;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
`

const markMap = {
  true: <img src="/check.svg" style={{ width: '35px', marginLeft: '10px' }} />,
  false: <img src="/x.svg" style={{ width: '27px', marginLeft: '10px' }} />
}

export default ({ isValid = true, isVisible = false }) => (
  <Mark data-test="mark" isVisible={isVisible}>
    {markMap[Boolean(isValid)]}
  </Mark>
)
