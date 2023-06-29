import styles from './Header.module.css'
import { NavLink } from "react-router-dom"

export default function Header () {
  const nav = [
    {
      id:1,
      path: 'profile',
      name: 'Profile'
    },
    {
      id:2,
      path: 'chatlist',
      name: 'Chatlist'

    },
    {
      id:3,
      path: '/',
      name: 'Home'

    }
  ]
    
    return (
        
        <header className = {styles.header} >
          <ul>
            {
              nav.map((item) => (
              <li><NavLink style={({isActive}) => ({color : isActive ? 'black' : 'white'})} to={item.path}>
                {item.name} </NavLink ></li> ))}
          </ul>
        </header>
    )
}