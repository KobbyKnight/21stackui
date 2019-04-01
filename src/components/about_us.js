import React, { Component } from 'react';
import './about_us.css';

class AboutUs extends Component {
  render() {
    return (
        <section className="AboutUs" >
            <div className="col-md-12 AboutUs-header">
                <h2>About Us</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                <h4>Mission</h4>
                    <p>Whatever kogi lo-fi offal salvia, synth PBR&B wayfarers man braid you probably haven’t heard of them crucifix. Sriracha DIY lomo wolf four dollar toast bushwick. Gluten-free quinoa tumblr, single-origin coffee freegan health goth pour-over meditation. Portland helvetica intelligentsia keytar, four loko green juice dreamcatcher cornhole</p>     
                <h4>Vision</h4>
                    <p>Whatever kogi lo-fi offal salvia, synth PBR&B wayfarers man braid you probably haven’t heard of them crucifix. Sriracha DIY lomo wolf four dollar toast bushwick. Gluten-free quinoa tumblr, single-origin coffee freegan health goth pour-over meditation. Portland helvetica intelligentsia keytar, four loko green juice dreamcatcher cornhole</p>
                </div>
                <div className="col-md-6">
                <iframe title={'video'} width="560" height="315" src="https://www.youtube-nocookie.com/embed/GUdBFpg0Rdo?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>               
            </div>
        </section>
    );
  }
}

export default AboutUs;
