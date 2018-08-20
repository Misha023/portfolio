import React from 'react'
import Link from 'gatsby-link'
import Img from 'react-image'

const IndexPage = () => (
  
  <div>
    
    <div className="container">
      <div className="heroContainer">
        <div className="row">
          <div className="twelve columns center">
            <h1 className="heroTitle">User flows done right<span className="red">.</span></h1>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns center">
            <p className="heroDescription">Ideation, Design <span className="red">&</span> Prototyping.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="container">
        <div className="row">
          <div className="container centered-column">
            <p>I’m a UX Designer from the Netherlands who aims to design experiences that work on anything that can access the internet.</p> 
            <p>I investigate behavioral patterns, design user flows with <a href="https://www.overflow.io/" title="Overflow" target="_blank" rel="noopener">Overflow </a> and <a href="https://www.sketchapp.com/" title="Sketch" target="_blank" rel="noopener"> Sketch </a> and prototype ideas with <a href="https://framer.com/" title="Framer" target="_blank" rel="noopener">Framer</a> and <a href="http://principleformac.com/" title="Principle" target="_blank" rel="noopener"> Principle</a>. In my spare time I dabble with HTML5 and React to keep up to date with new technologies and possibilities.</p>
            <p>I recently helped De Volkskrant expand their mobile strategy by ideating, designing and prototyping their new flagship app for iOS and Android.</p>
            <p>In the past I've worked as Interaction Designer, Product Owner and Marketing Manager. All these different roles have given me a great perspective about what it takes to design a great product. I’ve won and tasted success, but also failed and learned a lot.</p>
            <p>Chances are that if you’re reading this, you are involved in the creation of a modern digital product. If we have that in common, get in touch and let’s grab a coffee.</p>
            <div className="container centered-column">
            <a href="mailto:hello@mishascholte.nl" title="hello@mishascholte.nl"><button>Contact</button></a>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="twelve columns center">
          <h2>Brands I've worked with</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="one-third column"><img src={require('./../images/brands/volkskranttiny.svg')} /></div>
        <div className="one-third column"><img src={require('./../images/brands/tweakerstiny.svg')} /></div>
        <div className="one-third column"><img src={require('./../images/brands/autotracktiny.svg')} /></div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="one-third column"><img src={require('./../images/brands/carsomtiny.svg')} /></div>
        <div className="one-third column"><img src={require('./../images/brands/topicstiny.svg')} /></div>
        <div className="one-third column"><img src={require('./../images/brands/demorgentiny.svg')} /></div>
      </div>
    </div>
  </div>
)

export default IndexPage