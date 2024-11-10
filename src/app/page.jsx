import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Subscribe from '../components/Subscribe.jsx'

export default function Page({submitForm})
{
    return(
        <div onSubmit={submitForm}>
            <Navbar />
            <Hero />
            <Subscribe onSubmit={submitForm}/>
        </div>
    )
}
