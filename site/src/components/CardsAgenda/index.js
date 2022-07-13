import { Container, Day, Local, TextDay, TextMes, TextLocal } from './style'

export default function CardsAgenda ({ dia, mes, local }) {
  return (
    <>
      <Container>
        <Day>
          <TextMes>{mes}</TextMes>
          <TextDay>{dia}</TextDay>
        </Day>
        <Local>
          <TextLocal>{local}</TextLocal>
        </Local>
      </Container>
    </>
  )
}
