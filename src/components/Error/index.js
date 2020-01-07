import styled from 'styled-components'

export default styled.div`
  grid-area: error;
  background: #ffffff;
  border: 1px solid #eb5757;
  box-sizing: border-box;
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  color: #eb5757;
  padding: 0.5rem;
  grid-column: 4/2;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
`
