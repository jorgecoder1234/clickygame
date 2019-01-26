
import React from 'react';

const style = {
  logoIcon: {
    width: 200,
    heigth: 100
  },
  bgDark: {
    backgroundColor: `orange`
  }
}

const Banner = props => (
  <article style={style.bgDark} className="mw7 center ph3 ph5-ns tc br2 pv3 bg-black-90 mb5 animated fadeIn">
    <img style={style.logoIcon} className='logoIcon' src="https://static.posters.cz/image/750/poster/street-fighter-characters-i30393.jpg" alt="streefigther"/>
    <h2 className="fw2 f4 lh-copy mt0 mb3 white animated fadeIn slower">
   Test your memory, click at the image, if you do not repeat you WIN points, if you repeat you LOSS
    </h2>
  </article>
);

export default Banner;