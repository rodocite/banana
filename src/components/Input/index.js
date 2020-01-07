import React from 'react'
import styled from 'styled-components'
import Card from 'creditcards/card'
import types from 'creditcards-types'

const Container = styled.div`
  position: relative;
  grid-area: input;
`

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 52px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1.2rem;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 27px;
  color: #bdbdbd;

  :placeholder {
    color: #bdbdbd;
  }

  :focus {
    outline: none;
  }
`

const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 1.2rem;
`

const CCMap = {
  amex: <img src="/amex.svg" style={{ width: '50px' }} />,
  discover: <img src="/discover.svg" style={{ width: '50px', marginLeft: '10px' }} />,
  generic: <img src="/generic.svg" style={{ width: '50px', marginLeft: '10px' }} />,
  mastercard: <img src="/mastercard.svg" style={{ width: '50px', marginLeft: '10px' }} />,
  visa: <img src="/visa.svg" style={{ width: '50px', marginLeft: '10px' }} />
}

const card = Card(types)

export default ({ setCCNumber, ccNumber, cardType, setMarker }) => {
  const defaultValue = '1234 1234 1234 1234'
  const length = cardType !== 'amex' ? 19 : 17
  const format = card.format(ccNumber)

  return (
    <Container>
      <Input type="tel" placeholder={defaultValue} onChange={e => setCCNumber(card.parse(e.target.value))} value={format} maxLength={length} onBlur={() => setMarker(true)} />
      <Icon data-test="cardType">{CCMap[cardType]}</Icon>
    </Container>
  )
}
