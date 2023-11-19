import styled, { createGlobalStyle } from 'styled-components'

type FavoritoProps = {
  colorFavorite: boolean
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    max-width: 100vw;
    max-height: 100vh;
    background-color: #7f9898;
    font-family: 'Roboto', sans-serif;
  }
`

export const Button = styled.button`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
  background-color: #a73c3c;
  color: #fff;
  text-aling: center;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    background-color: #b86262;
  }
`
export const ButtonFavorite = styled(Button)<FavoritoProps>`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.colorFavorite ? '#a73c3c' : '#3ca7a7')};
  text-aling: center;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    background-color: ${(props) =>
      props.colorFavorite ? '#00FFB9' : '#9cced9'};
  }
`

export const TopBody = styled.div`
  width: 100%;
  height: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Header = styled.header`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    flex: now-rap;

  }

  div {
    max-width: 50%;
    max-height: 100%;
    display: flex;
    align-itens: center;
    justify-content: flex-end;
    width: 100%;
    gap: 5px;
    @media (max-width: 700px) {
      display: flex;
      align-items: center;
      max-width: 100%;
    }

  }


`

export default GlobalStyle
