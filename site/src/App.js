import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import Routes from './Routes'

export default function App () {
  return (
    <BrowserRouter>
      <GlobalStyle/>
        <Routes/>
    </BrowserRouter>
  )
}
