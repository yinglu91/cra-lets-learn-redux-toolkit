import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <NavLink to='/'>
        <img
          src='https://i.ibb.co/wwLhz98/logo.png'
          alt='Microsoft'
          className='logo'
        />
      </NavLink>

      <ul className='main-menu'>
        <li>
          <NavLink to='/dogs' activeClassName='selected'>
            Dogs
          </NavLink>
        </li>

        <li>
          <NavLink to='/users' activeClassName='selected'>
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to='/counter' activeClassName='selected'>
            Counter
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
