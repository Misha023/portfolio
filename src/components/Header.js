import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll )
  }

  // Get data to where the user has scrolled
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 34 ) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false})
    }
  }
  
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header' }>
        <div className="HeaderGroup">
          <Link to="/" activeClassName="active">Misha</Link>
	        <Link to="/Work">Work</Link>
        </div>
      </div>
    )
  }
}

export default Header
