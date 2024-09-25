import Header from './Header.js'
import Glavnaya from './Glavnaya.js'
import Footer from './Footer.js'

export default function First(){ 
    return(
        <div className='first'>
            <Header/>
            <Glavnaya/>
            <Footer/>
        </div> 
    )
}