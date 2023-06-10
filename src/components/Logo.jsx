import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'
import './styles/Logo.css'


const Logo = () => {
    return (
        <section className="logo">
            <Link to="/">
                <img src={logo} alt='logo' />
            </Link>
        </section>
    )
}

export default Logo
