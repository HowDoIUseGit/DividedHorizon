import { Link } from 'react-router-dom'
import './../styles/projectlist.css'

export default function ProjectList() {
  return (
    <div className="container_wrapper">
      <ul>
        <li><Link to="/projects/weatherapi">WetterAPI</Link></li>
        <li><Link to="/projects/solarsystem">Solar System</Link></li>
      </ul>
    </div>
  )
}
