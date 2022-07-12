import styled from 'styled-components'
import bg from '../../assets/back.jpg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  background-image: url(${bg});
`

export const Down = styled.img`
  width: 50px;
  height: 50px;

  position:absolute;
  top: 500px;
  margin-left: -20px;
`
export const AgendaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: blue;
`

export const AgendaSubContainer = styled.div`
  display: flex;
`
