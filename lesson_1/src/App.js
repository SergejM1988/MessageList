import React from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessageInput from "./components/MessageInput"
import Profile from "./components/Profile";
import Header from "./components/Header";



function App () {
    const theme = createTheme({
        palette: {
          primary: {
            main: green[400],
            mode: 'dark',
          },
          secondary: {
            main:purple[500]
          } 
        },
      });

    return(
    <>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header/>
        <Routes>
        <Route path='/chatlist' element = {<MessageInput />} />
         <Route path='/profile' element = {<Profile />}/> 
        </Routes>
        </ThemeProvider>
    </BrowserRouter>
     
    </>
    )
}
export default App
