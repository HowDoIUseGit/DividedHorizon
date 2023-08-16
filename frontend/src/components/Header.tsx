import { Link } from 'react-router-dom'
import './../styles/header.css';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">PROJECT<span id='l1'>X</span></Link>
      </div>

      <nav className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <div className="dark_light_mode">
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  )
}
