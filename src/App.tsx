import * as React from 'react';
import './App.scss';

import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  public openMenu = () => {
   const element: HTMLElement = document.getElementById("sidebar") as HTMLElement;
   element.classList.toggle('active');
   const element1: HTMLElement = document.getElementById("menu") as HTMLElement;
   element1.classList.toggle('active');
  }
  public render() {
    return (
      <div>
        <div id="sidebar">
            <div>
              <div className="prim-ul">
              <ul>
                <li><i className="fa fa-home"/>Home</li>
                <li><i className="fa fa-shopping-bag"/>Shop Departments</li>
                <li><i className="fa fa-map-marker"/>Store Finder</li>
                <li><i className="fa fa-tags"/>Deals&Coupons</li>
                <li><i className="fa fa-bookmark"/>LocalAd</li>
                <li><i className="fa fa-gift"/>Gift center</li>
                <li><i className="fa fa-archive"/>Order center</li>
                <li><i className="fa fa-user"/>Account</li>
                <li><i className="fa fa-usd"/>Layaway</li>
                <li><i className="fa fa-wrench"/>Reapair Services</li>
                <li><i className="fa fa-question"/>Help&Contactus</li>
              </ul>
              </div>
              <div className="sec-ul">
              <ul>
                <li>View Destop Site</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>California Privacy Rights</li>
              </ul>
              </div>
              </div>
          </div>
          <div id="menu" onClick={this.openMenu}> 
          <i className="fa fas fa-bars"/>
            </div>
        </div>
    );
  }
}

export default App;
