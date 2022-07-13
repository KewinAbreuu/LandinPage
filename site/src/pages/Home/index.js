import {
  HomeContainer, Banner, Logo, Down, AgendaContainer,
  AgendaSubContainer, Title, AgendaTextImage
} from './style'

import Footer from '../../components/footer'
import CardsAgenda from '../../components/CardsAgenda'

import setas from '../../assets/setas.svg'
import logo from '../../assets/LOGO2.png'
import eventos from '../../assets/eventos.svg'

export default function Home () {
  function agendas () {
    window.location.href = '#Agendas'
  }

  return (
    <>
      <Footer/>

      <HomeContainer >
        <Banner>
          <Logo src={logo}/>
          <Down src={setas} onClick={agendas}/>
        </Banner>

      </HomeContainer>

      <AgendaContainer>
        {/* <Title>PRÓXIMOS EVENTOS</Title> */}

        <AgendaTextImage src={eventos}/>

        <AgendaSubContainer id="Agendas">
           <CardsAgenda dia="05" mes="Mar" local="Avenida liberdade/MG" />
           <CardsAgenda dia="05" mes="Mar" local="Avenida liberdade/MG" />
           <CardsAgenda dia="05" mes="Mar" local="Avenida liberdade/MG" />
           <CardsAgenda dia="05" mes="Mar" local="Avenida liberdade/MG" />
           <CardsAgenda dia="05" mes="Mar" local="Avenida liberdade/MG" />
        </AgendaSubContainer>

      </AgendaContainer>
    </>
  )
}
