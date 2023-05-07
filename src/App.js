import './App.scss';
import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Browser from './components/Browser';
import Footer from './components/Footer';

const browsers = [
  {
    "name": "Mozilla Firefox",
    "img": "https://upload.wikimedia.org/wikipedia/commons/7/76/Mozilla_Firefox_logo_2013.svg",
    "description": "Mozilla Firefox."
  },
  {
    "name": "Google Chrome",
    "img": "https://www.google.com/chrome/static/images/chrome-logo_112px.svg",
    "description": "Google Chrome."
  },
  {
    "name": "Microsoft Edge",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/800px-Microsoft_Edge_logo_%282019%29.svg.png",
    "description": "Microsoft Edge. "
  }
];

function App() {
  return (
    <div className="App">
      <Nav title={'Popular web browsers'} items={['Home', 'About', 'Contact']} />
      <Header title={'Web browsers'} />
      <article className="Section">
        {browsers.map((browser, i) => {
          return (
            <Browser
              key={i}
              name={browser.name}
              img={browser.img}
              description={browser.description}
            />
          );
        })}
      </article>
      <Footer text={'Copyright by Bogate Interfejsy Webowe.'} />
    </div>
  );
}

export default App;
