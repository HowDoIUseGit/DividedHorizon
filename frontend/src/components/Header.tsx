import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  )
}
