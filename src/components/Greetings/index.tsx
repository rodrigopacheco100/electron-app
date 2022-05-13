import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '../Button'
import { Container, Image, Text } from './styles'

export function Greetings() {
  const [isLoading, setIsLoading] = useState(false)

  function handleSayHello() {
    setIsLoading(true)
    toast.promise(
      new Promise(resolve =>
        // eslint-disable-next-line no-promise-executor-return
        setTimeout(() => {
          resolve('')
        }, 2000)
      ).finally(() => {
        setIsLoading(false)
      }),
      {
        loading: 'Saving',
        success: 'Deu bom',
        error: 'Deu ruim',
      }
    )
  }

  return (
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>
        An Electron boilerplate including TypeScript, React, Jest and ESLint.
      </Text>
      <Button onClick={handleSayHello} disabled={isLoading}>
        Send message to main process
      </Button>
    </Container>
  )
}
