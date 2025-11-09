import { Link, Outlet, useLocation, useNavigation } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import OrbitLoader from './components/Loading/Loading'
import { useEffect, useState } from 'react'

function App() {

  const navigation = useNavigation()
  const [showloader, setshowloader] = useState(false)
  const location = useLocation();

  // useEffect(() => {
  //   if (navigation.state === 'loading') {
  //     setshowloader(true)
  //     const time = setTimeout(() => {
  //       if (navigation.state !== 'loading') {

  //         setshowloader(false)
  //       }
  //     }, 300);
  //     return () => clearTimeout(time)
  //   } else {
  //     const time = setTimeout(() => {
  //       setshowloader(false)
  //     }, 300);
  //     return () => clearTimeout(time)
  //   }
  // }, [navigation.state])
  // const isNavigation = Boolean(navigation.location);
  // const isNavigation = navigation.state === 'loading';
  // console.log(isNavigation)
  // console.log(navigation.state)

  useEffect(() => {
    setshowloader(true)
    const time = setTimeout(() => {
      setshowloader(false)
    }, 200);
    return () => clearTimeout(time)
  }, [location.pathname])

  return (
    <>
      <Navbar></Navbar>
      {showloader ? <OrbitLoader></OrbitLoader> : (<Outlet></Outlet>)}
      {/* <Outlet></Outlet> */}
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
