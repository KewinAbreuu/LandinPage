import { HomeContainer, Down, AgendaContainer, AgendaSubContainer } from './style'

import Footer from '../../components/footer'
import CardsAgenda from '../../components/CardsAgenda'

import setas from '../../assets/setas.svg'

export default function Home () {
  return (
    <>
      <Footer/>

      <HomeContainer >
      <a href='#TESTE'>
       <Down src={setas}/>
      </a>
      </HomeContainer>

      <AgendaContainer>
        <h2>Agenda</h2>

        <AgendaSubContainer id="TESTE">
           <CardsAgenda/>
           <CardsAgenda/>
        </AgendaSubContainer>

      </AgendaContainer>
    </>
  )
}
