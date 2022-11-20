import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useSelector } from "react-redux"
import { AppContext, socket } from "./context/appContext"

const App = () => {
  const [rooms, setRooms] = useState([])
  const [currentRoom, setCurrentRoom] = useState([])
  const [members, setMembers] = useState([])
  const [messages, setMessages] = useState([])
  const [privateMemberMsg, setPrivateMemberMsg] = useState({})
  const [newMessages, setNewMessages] = useState({})
  const user = useSelector((state) => state.user)
  return (
    <AppContext.Provider
      value={{
        socket,
        currentRoom,
        setCurrentRoom,
        members,
        setMembers,
        messages,
        setMessages,
        privateMemberMsg,
        setPrivateMemberMsg,
        rooms,
        setRooms,
        newMessages,
        setNewMessages,
      }}
    >
      <React.StrictMode>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path='/' element={<Home />} />
            {!user && (
              <>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
              </>
            )}
            <Route exact path='/chat' element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </AppContext.Provider>
  )
}

export default App
