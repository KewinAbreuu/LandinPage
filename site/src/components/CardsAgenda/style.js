import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  z-index: 1;

  margin-bottom: 10px;

`
export const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 100%;
  z-index: 1;

  background-color: #4a1054;
`
export const Local = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;

  background-color: #cdcdcd;

  /* background: rgba( 211, 211, 211, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px ); */
    border: 1px solid rgba( 255, 255, 255, 0.18 );


  @media(max-width: 870){
    width: 90%;
  }
`
export const TextDay = styled.h1`
 font-size: 40px;
 font-family: sans-serif;
 color: #fff;
`
export const TextMes = styled.h1`
 font-size: 20px;
 font-family: sans-serif;
 color: #fff;
`
export const TextLocal = styled.h1`
 font-size: 25px;
 font-family: sans-serif;
 color: #4a1054;


`
