import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SideHeader from '../components/SideHeader'
import Main from '../components/Main'

const Home = (props) => {
  
  return (
    
    <div>
      {!props.user?
      <>
      <Header />
      <Hero setuser={props.setuser}/>
      <Footer/>
      </>
      :
      <><div className="sm:flex">
      <SideHeader/>
      <Main user={props.user}/>
      </div>
      </>
}
    </div>
    
  )
}

export default Home
