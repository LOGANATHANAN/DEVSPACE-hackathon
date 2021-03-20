import React, { useState } from "react"
import { Button,Navbar,Nav,Form } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  async function handleLeaderboard() {
    setError("")

    try {
      history.push("/signup")
    } catch {
      setError("Failed to render")
    }
  }

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link onClick={handleLeaderboard}>Leaderboard</Nav.Link>
      <Nav.Link href="#healthtips">Health Tips</Nav.Link>
      </Nav>
      <Form inline>
      <Link to="/update-profile" className="btn btn-info w-40">
            Profile
          </Link>
          <span>--</span>
          <Button variant="light" onClick={handleLogout}>
          LogOut
        </Button>
    </Form>
    </Navbar>
        
    </>
  )
}