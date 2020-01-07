import styled from 'styled-components'

export default styled.div`
  position: relative;
  grid-row-gap: 0.8rem;
  display: grid;
  width: 692px;
  padding: 3rem 0;
  background: #f3f3f3;
  grid-template-columns: 136px 447px 35px;
  margin: 0 auto;
  text-align: left;
  grid-template-areas:
    'a label b'
    'c input mark'
    'd error e';
`
