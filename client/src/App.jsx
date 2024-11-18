import { BrowserRouter,Routes,Route } from "react-router-dom" 
import Home from "./pages/Home"
import Signin from "./pages/signin"
import Signout from "./pages/signout"
import About from "./pages/about"
import Profile from "./pages/Profile"
import Header from "./Components/Header"
import Footer from "./Components/Footer"


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign-in" element={<Signin/>}></Route>
        <Route path="/sign-out" element={<Signout/>}></Route>
        <Route path="/about-us" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}