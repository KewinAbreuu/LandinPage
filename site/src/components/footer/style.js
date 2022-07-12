import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: none;

  position: fixed;
  bottom: 0;
  z-index: 9;
`

export const SubContainer = styled.div`
  display: flex;
`

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 24px;
`
