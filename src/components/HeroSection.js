import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import v from '../videos/video-1.mp4'
//https://stackoverflow.com/a/50166945/14177413

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={v} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
