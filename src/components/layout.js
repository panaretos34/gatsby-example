import React from 'react'
import Navbar from './Navbar'
import Logo from "./Logo"
import Navigationbar from './navigationbar'
import Footer from './Footer'
import './layout.css'
const layout = ({children})=> {
return (
<>
<Navbar />
<main>{children}</main>
<Footer />
</>

)
}


export default layout 