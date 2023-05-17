import styles from './Header.module.css'
import { NavLink } from "react-router-dom"

export default function Header () {
    
    return (
        
        <header className = {styles.header} >
          <ul>
            <li><NavLink style={({isActive}) => ({color : isActive ? 'black' : 'blue'})} to ='profile'>Profile</NavLink ></li>
            <li><NavLink style={({isActive}) => ({color : isActive ? 'black' : 'blue'})} to ='chatlist'>Chatlist</NavLink ></li>
            <li><NavLink style={({isActive}) => ({color : isActive ? 'black' : 'blue'})} to ='/'>Home</NavLink ></li>
          </ul>
        </header>
    )
}