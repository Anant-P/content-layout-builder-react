// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="top-section-container">
          <h1 className="main-heading">Layout</h1>
          <form>
            <input
              type="checkbox"
              id="context"
              checked={showContent}
              onChange={onToggleShowContent}
            />
            <label className="label-text" htmlFor="context">
              Content
            </label>
            <br />
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={onToggleShowLeftNavbar}
            />
            <label className="label-text" htmlFor="leftNavbar">
              Left Navbar
            </label>
            <br />
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={onToggleShowRightNavbar}
            />
            <label className="label-text" htmlFor="rightNavbar">
              Right Navbar
            </label>
            <br />
          </form>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
