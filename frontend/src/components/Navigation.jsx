import React from "react"
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useSelector } from "react-redux"
import { useLogoutUserMutation } from "../services/appApi"
import logo from "../assets/logo.png"

const Navigation = () => {
  const user = useSelector((state) => state.user)
  const [logoutUser] = useLogoutUserMutation()
  const handleLogout = async (e) => {
    e.preventDefault()
    await logoutUser(user)
    // redirect to homepage
    window.location.replace("/")
  }
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img src={logo} alt='logo' style={{ width: 50, height: 50 }}></img>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {!user && (
              <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            <LinkContainer to='/chat'>
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
            {user && (
              <NavDropdown
                title={
                  <>
                    <img
                      src={user.picture}
                      alt='profile-pic'
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                    {user.name}
                  </>
                }
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item>
                  <Button variant='danger' onClick={handleLogout}>
                    Logout
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
