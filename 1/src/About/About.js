import React from 'react';
import './About.css';

class MyBox extends React.Component{
  constructor() {
    super();
  }

  render() {
    return <div className={'my-box'}>Tra ta
    <h1 className="my-box-header"> landing-page-text-h1"</h1>
    <h2 className="my-box-header-secondary"> Jest w użyciu wielokrotnie </h2>
    <p>
      Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle 
      poligraficznym. Został po raz pierwszy użyty w XV w.
    </p>
    <button></button>
  </div>
  }
}
export default MyBox;

class About extends React.Component{
  constructor() {
    super();
  }
render() {
  return <div className={'About'}>Tra ta
  <h1 className="my-box-header"> landing-page-text-h1"</h1>
  <h2 className="my-box-header-secondary"> Jest w użyciu wielokrotnie </h2>
  <p>
    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle 
    poligraficznym. Został po raz pierwszy użyty w XV w.
  </p>
  <button></button>
</div>
}
}

export default About;