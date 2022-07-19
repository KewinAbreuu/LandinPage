import {
  HomeContainer, Banner, Logo, Down, AgendaContainer,
  AgendaSubContainer, AgendaTextImage, PostsContainer, PostImage,
  PostsSubContainer, PostTextImage
} from './style'

import Footer from '../../components/footer'
import CardsAgenda from '../../components/CardsAgenda'

import setas from '../../assets/setas.svg'
import logo from '../../assets/LOGO2.png'
import eventos from '../../assets/eventos.svg'
import posts from '../../assets/post.jpg'
import textposts from '../../assets/postsText.svg'

import Embed from 'react-embed'

export default function Home () {
  function agendas () {
    window.location.href = '#Agendas'
  }

  return (
    <>
      <Footer/>
      <h1 style={{ position: 'fixed', top: 20, left: 20, color: '#fff' }}>==</h1>
      <HomeContainer >
        <Banner>
          <Logo src={logo}/>
          <Down src={setas} onClick={agendas}/>
        </Banner>
      </HomeContainer>

      <PostsContainer>
        <PostTextImage src={textposts}/>
        <PostsSubContainer>
          <PostImage src='https://fmp.edu.br/wp-content/uploads/2022/02/fmp-show-cancelado-3.jpg' />
          <PostImage src='https://fmp.edu.br/wp-content/uploads/2022/02/fmp-show-cancelado-3.jpg' />
          <PostImage src={posts} />
          <PostImage src='https://fmp.edu.br/wp-content/uploads/2022/02/fmp-show-cancelado-3.jpg' />

          <PostImage src={posts} />

        </PostsSubContainer>
      </PostsContainer>

        <Embed url='https://www.youtube.com/watch?v=vW806AhP4qQ' />

      <AgendaContainer>
        <AgendaTextImage src={eventos}/>
          <AgendaSubContainer id="Agendas">
            <CardsAgenda dia="05" mes="Mar" local="Avenida liberdade/MG" />
            <CardsAgenda dia="05" mes="Mar" local="Avenida liberdade/MG" />
          </AgendaSubContainer>
      </AgendaContainer>

    </>
  )
}
