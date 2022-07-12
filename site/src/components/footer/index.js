import { Container, SubContainer, Img } from './style'

import IconMusic from '../../assets/music.svg'
import Sociais from '../../assets/sociais.svg'

export default function Footer () {
  return (
      <Container>
        <SubContainer>
          <Img src={IconMusic}/>
          <Img src={Sociais}/>
        </SubContainer>

        <SubContainer>
          <Img src={IconMusic}/>
          <Img src={IconMusic}/>
        </SubContainer>
      </Container>
  )
}
