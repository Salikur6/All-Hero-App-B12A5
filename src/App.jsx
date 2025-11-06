import { Link, Outlet, useNavigation } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  const navigation = useNavigation()
  const isNavigation = Boolean(navigation.location);

  return (
    <>
      <Navbar></Navbar>
      {isNavigation && <span className="loading loading-bars loading-xl"></span>}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
