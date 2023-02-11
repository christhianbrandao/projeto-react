import HomePage from "./componentes/homepage/HomePage";
import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Montserrat', sans-serif;
}
li{
  list-style: none;
}`

function App() {
  
  return (
    <>
      <GlobalStyled/>
      <HomePage/>
    </>
  );
}

export default App;
