import styled from 'styled-components'
import bg from '../../assets/back.jpg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: red;
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
  padding: 30px 0px 0px 0px;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: auto;
  /* background-color: var(--primary); */
  background-color: #081731;
  padding: 50px 0px 50px 0px;
  margin-bottom: 30px;
`

export const AgendaSubContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 90%;
  height: 50%;
  z-index: 8;
  width: 90%;
  margin-top: 20px;
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
  width: 30%;
`
