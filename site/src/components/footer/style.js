import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: none;

  position: fixed;
  bottom: 10px;
  z-index: 9;

  @media(max-width:870px){
    justify-content: space-between;
    padding:0px 20px 0px 20px ;
    bottom: 0px;
  }
`

export const SubContainer = styled.div`
  display: flex;
`

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 24px;
`
