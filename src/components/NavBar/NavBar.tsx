// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
          {/* <li><NavLink to="/change-password">Change Password</NavLink></li> */}
          <li><NavLink to="/adoption-posts/new">Create Post</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
          <li><NavLink to="/adoption-posts">Pet Adoption</NavLink></li>
          <li><NavLink to="/cat-posts">Kittens & Cats</NavLink></li>
          <li><NavLink to="/dog-posts">Puppies & Dogs</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
          <li><NavLink to="/adoption-posts">Pet Adoption</NavLink></li>
          <li><NavLink to="/cat-posts">Kittens & Cats</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
