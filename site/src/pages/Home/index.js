import { HomeContainer, Down, AgendaContainer } from './style'
import Footer from '../../components/footer'
import setas from '../../assets/setas.svg'

export default function Home () {
  return (
    <>
      <Footer/>
      <HomeContainer>
        <Down src={setas}/>
      </HomeContainer>

      <AgendaContainer>
        <h2>Agenda</h2>
      </AgendaContainer>
    </>
  )
}
