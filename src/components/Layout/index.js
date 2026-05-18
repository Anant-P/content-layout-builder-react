// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const leftNavbar = () => (
        <nav className="navbar-container">
          <h1 className="second-heading">Left Navbar Menu</h1>
          <ul className="unorder-list">
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
          </ul>
        </nav>
      )

      const rightNavbar = () => (
        <nav className="navbar-container">
          <h1 className="second-heading">Right Navbar</h1>
          <div className="ad-box">
            <p>Ad 1</p>
          </div>
          <div className="ad-box">
            <p>Ad 2</p>
          </div>
        </nav>
      )

      return (
        <div className="layout-container">
          <Header />
          <div className="main-section-container">
            {showLeftNavbar ? leftNavbar() : null}
            {showContent ? <Body /> : null}

            {showRightNavbar ? rightNavbar() : null}
          </div>
          <Footer />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
