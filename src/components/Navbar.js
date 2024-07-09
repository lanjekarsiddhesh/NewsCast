import React, { Component } from 'react'
import img from '../Images/newscast1.png'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand m-0 p-o" href="/">
                    <img src={img} alt="Logo" width="70" height="30" className="d-inline-block align-text-top m-0 p-0"/>
                    
                </a>
                <strong className='navbar-brand'>Newscast</strong>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     
    )
  }
}
