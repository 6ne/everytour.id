import React from 'react'
import Button from '../Button'
import MenuIcon from '../MenuIcon'
import './style.scss'
import home from '../../assets/img/home.png'
import about from '../../assets/img/about.png'
import destinations from '../../assets/img/destinations.png'
import contact from '../../assets/img/contact.png'
import Layout from '../Layout'

interface State {
    isOpen: boolean;
}

class Burger extends React.Component<{}, State> {
    state: State = {
        isOpen: true
    }
    toggleMenu () {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
      return (
        <div className="BurgerContainer">
            <div className="Burger" onClick={this.toggleMenu.bind(this)}>
                <span className="BurgerItem"></span>
                <span className="BurgerItem"></span>
                <span className="BurgerItem"></span>
            </div>
            {!this.state.isOpen && <Menu />}
        </div>
      );
    }
}

const Menu: React.FC = () => (
    <div className='BurgerMenu'>
        <Layout direction="row">
            <MenuIcon to="/" content="Home" imgUrl={home} />
            <MenuIcon to="/about" content="About" imgUrl={about} />
        </Layout>
        <Layout direction="row">
            <MenuIcon to="/destinations" content="Destination" imgUrl={destinations} />
            <MenuIcon to="/contact" content="Contact" imgUrl={contact} />
        </Layout>
    </div>
)

export default Burger