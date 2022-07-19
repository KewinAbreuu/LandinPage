import styled from 'styled-components'
import bg from '../../assets/back.jpg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #4f4f4f;

  /* @media(max-width:870px){
    height:60vh;
  } */
`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
`

export const Logo = styled.img`
  width: 300px;
  position: absolute;
  bottom: 150px;
  margin: 0px;
  padding: 0px;

  @media(max-width: 870px){
    width: 250px;
    bottom: 80px;
  }
`

export const Down = styled.img`
  width: 50px;
  height: 50px;

  position:absolute;
  bottom: 80px;

  cursor: pointer;

  @media(max-width: 870px){
    display: none;
  }
`
export const AgendaContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 30px 0px 0px 0px; */
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: auto;
  /* background-color: var(--primary); */
  background-color: #091F34;
  padding: 50px 0px 50px 0px;
`

export const AgendaSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height:auto;
  z-index: 8;
  margin-top: 20px;

  @media(max-width:870px){
    width:100%;
  }
  /* Largura da barra de rolagem */
::-webkit-scrollbar {
    width: 10px;
}

/* Fundo da barra de rolagem */
::-webkit-scrollbar-track-piece {
    background-color: #EEE;
    border-left: 1px solid #CCC;
}

/* Cor do indicador de rolagem */
::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
    background-color: #7a228a;
    border:  solid 1px #fff;
    border-radius: 10px;
}

/* Cor do indicador de rolagem - ao passar o mouse */
::-webkit-scrollbar-thumb:vertical:hover,
::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: #717171
}
`

export const Title = styled.h1`
  font-family: Pirulen;
  font-size: 20px;
  color: #fff;
  margin-bottom: 15px;
`

export const AgendaTextImage = styled.img`
  width: 300px;

  @media(max-width:870px){
    width: 250px;
}
`
export const PostTextImage = styled.img`
  width: 250px;
  margin-bottom: 20px;

  @media(max-width:870px){
    width: 200px;
}
`

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 300px;

  background-color: #000;
`

export const PostsSubContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 90%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

   /* Largura da barra de rolagem */
::-webkit-scrollbar {
    width: 10px;
    /* height: 8px; */
}

/* Fundo da barra de rolagem */
::-webkit-scrollbar-track-piece {
    background-color: #000;
    border-left: 1px solid #CCC;
}

/* Cor do indicador de rolagem */
::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
    background-color: #717171;
    border:  solid 1px #fff;
    border-radius: 10px;
}

/* Cor do indicador de rolagem - ao passar o mouse */
::-webkit-scrollbar-thumb:vertical:hover,
::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: #7a228a;
    cursor: pointer;
}

`

export const PostImage = styled.img`
  max-width: 200px;
  transition: all ease-in-out 1s;
  -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);

  :hover{
    transform: scale(1.2);
    cursor:pointer;
    -webkit-mask-image:none;
  }

`
