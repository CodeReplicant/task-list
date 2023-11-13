
import Listaapp from  './Listaapp.jsx'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import viteLogo from '/rayo.jpg';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'


// 2. Extend the theme to include custom colors, fonts, etc
  const colors = {
    brand: {
      900: 'white',
      800: 'white',
      700: 'white',
    },
  }
  

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function App() {
  return (
    <ChakraProvider theme={theme}>
  <div>

    <a href="https://github.com/CodeReplicant" >
     <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
            
  
<div>


      
 <BrowserRouter>
      <Routes>

      <Route path="/" element= {<h1>Bienvenido</h1>} />

        <Route path="/Listaapp" element={<Listaapp />} />
    

      </Routes>

      <Menu />

    </BrowserRouter>

</div>

</div>

</ChakraProvider>
  );
  
}
 
export default App;