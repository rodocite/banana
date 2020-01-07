import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Box from './components/Box'
import Input from './components/Input'
import Label from './components/Label'
import Error from './components/Error'
import Mark from './components/Mark'

import './styles.css'

const PasswordInput = props => {
  const [ccNumber, setCCNumber] = useState('')
  const [cardType, setCardType] = useState('generic')
  const [error, setError] = useState(false)
  const [isMarked, setMarker] = useState(false)

  useEffect(() => {
    if (ccNumber.length >= 4) {
      fetch(`https://lookup.binlist.net/${ccNumber}`, {
        headers: {
          'Accept-Version': 3
        }
      })
        .then(data => {
          return data.json()
        })
        .then(result => {
          setCardType(result)
          setError(false)
        })
        .catch(err => {
          setError(true)
        })
    } else {
      setCardType('')
    }
  }, [ccNumber.slice(0, 4), error])

  const isCard = cardType && ccNumber
  const isAmex = cardType.scheme === 'amex'
  const currentCardLength = isCard && ccNumber.replace(/\s/g, '').length
  const isValid = !isAmex ? currentCardLength === 16 : currentCardLength === 15

  return (
    <div className="App">
      <Box>
        <Label>Credit Card Number</Label>
        <Input setMarker={setMarker} setCCNumber={setCCNumber} ccNumber={ccNumber} cardType={cardType && cardType.scheme} />
        <Error isVisible={error && !isValid && !isCard}>Oh no! Something went wrong!</Error>
        <Mark isValid={isValid} isVisible={error || isValid || isMarked} />
      </Box>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<PasswordInput />, rootElement)
