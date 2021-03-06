import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function Bio({ author, language = 'ko' }) {
  if (!author) return null;
  const { bio, social, name } = author;
  return (
    <div className="bio">
      {language === 'ko' ? (
        <div className="introduction korean">
          <p className="title">
             I'm cotudying... π
          </p>
          <br />
          {/* <p className="title">
            μλνμΈμ.
            <br />
            <ReactRotatingText items={bio.description} />
            <br />
            {bio.role} <strong>{name}</strong>μλλ€.
            <br />
          </p> */}
          <div className="social-links">
            <IconButtonBar links={social} />
            <a className="hits" href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fautumnly1007.github.io&count_bg=%2358ADE5&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Total+%2F+Today+&edge_flat=false"/></a>
          </div>
        </div>
      ) : (
        <div className="introduction english">
          <p className="title">
            Hello,
            <br />
            my name is
            <br />
            <strong>{name}</strong>
            .<br />
          </p>
          <p className="description">
            I'm a {bio.role} <ReactRotatingText items={bio.description} />
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      )}
      <div className="thumbnail-wrapper">
        <Image src={bio.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
}

export default Bio;
