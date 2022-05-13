import { Toaster } from 'react-hot-toast'

import { Greetings } from './components/Greetings'
import { GlobalStyle } from './styles/GlobalStyle'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Greetings />
      <Toaster position="top-right" />
    </>
  )
}
