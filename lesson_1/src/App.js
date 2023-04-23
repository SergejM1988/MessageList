import React from "react"
import ChatList from "./components/ChatList"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { BrowserRouter } from "react-router-dom";
import MessageInput from "./components/MessageInput"
import Profile from "./components/Profile";



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
        
        <MessageInput />
        <ChatList/>
        <Profile />
        
        </ThemeProvider>
     </BrowserRouter>
     </>
    )
}
export default App
