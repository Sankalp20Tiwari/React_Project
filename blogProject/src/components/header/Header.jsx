import React from 'react'
import {Container , Logo , LogoutBtn} from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
   <header className='py-3 shadow bg-blue-600 fixed top-0 left-0 w-full z-50 '  >
    <Container>
      <nav className='flex'>
        <div className='mr-4 '>
          <Link to= ''>
          <h1 className='text-white text-4xl'> .blog</h1>
          </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((item)=> 
           item.active ? (
            <li key ={item.name}>
              <button onClick={()=> navigate(item.slug) }  className= 'inline-block px-6 py-2 duration-200 text-white hover:bg-blue-100 hover:text-black rounded-full'>{item.name}</button>
            </li>
           ) : null
          
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>

     </Container> 
   </header>
  )
}

export default Header
