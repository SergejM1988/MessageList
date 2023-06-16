import React from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessageInput from "./components/MessageInput"
import Profile from "./components/Profile";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store/store";



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
    <Provider store = {store}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header/>
        <Routes>
        <Route path='/chatlist' element = {<MessageInput />} />
         <Route path='/profile' element = {<Profile />}/> 
        </Routes>
        </ThemeProvider>
    </BrowserRouter>
    </Provider>
     
    </>
    )
}
export default App
