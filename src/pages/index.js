import React from 'react'
import Link from 'gatsby-link'
// import Card from '../components/Card';

const IndexPage = () => (
  
  <div>
    <section>
    <div className="section">
      <div className="heroContainer">
        <h1 className="heroTitle">User flows done right<span className="red">.</span></h1>
        <p className="heroDescription">I help companies design products that kick ass and chew gum</p>
      </div>
        <div className="contents">
          <p>I’m a Dutch User Experience Designer who aims to design experiences that work on anything that can access the internet.</p> 
          <p>I investigate behavioral patterns through user research, design flows with <a href="https://www.overflow.io/" title="Overflow" target="_blank" rel="noopener">Overflow </a> and <a href="https://www.sketchapp.com/" title="Sketch" target="_blank" rel="noopener"> Sketch </a> and prototype ideas with <a href="https://framer.com/" title="Framer" target="_blank" rel="noopener">Framer</a> and <a href="http://principleformac.com/" title="Principle" target="_blank" rel="noopener"> Principle</a>. In my spare time I dabble with HTML5 and React to keep up to date with new technologies and possibilities.</p>
          <p>In the past I've worked as Interaction Designer, Product Owner and Marketing Manager. All these different roles have given me a great perspective about what it takes to design a great product. I’ve won and tasted success, but also failed and learned a lot.</p>
          <p>Chances are that if you’re reading this, you are involved in the creation of a modern digital product. If we have that in common, get in touch and let’s grab a coffee.</p>
          <div>
              <a href="mailto:hello@mishascholte.nl" title="hello@mishascholte.nl"><button>Contact</button></a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage