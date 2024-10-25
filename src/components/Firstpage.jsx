import React from 'react'
import './firstpage.css';
import nikitha from '../assets/nikitha.jpg'
import her from '../assets/hands.jpg';
import ReactAudioPlayer from 'react-audio-player';
import song from '../assets/song.mp3'



export default () => (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPIE 21 PAPA🖤!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        
          <div>
            <h1 id='start'>HAPPIEST BIRTHDAY <span id="place"></span></h1>
        </div>
        <img className='img-one' src={nikitha} alt="" />
        <img className='img-two'src={her} alt="" />
        
        
        </div>
        
      </div>
      <div className="cardInside">
      
        <h3 className="back">HAPPIEST BIRTHDAY TO US🖤👻,..!</h3>
        <p>
          <br />
          Happiest bday My Everythingggggggggg...❤️!
          <br></br>
          Nikitha..I think you know how much you means to me re...
          we have made memories, shared jokes, shared happiness, shared sadness and each others back in our journey.
          <br></br>
          No matter where life takes us re,but I'm requesting you that we should always have each other..
          Your positiveness, your kindness, your endless love..these all make you special person for me..Just beacause we are not talking like before doen't mean 
          I'll forget about you..it's doesnot affect my care for you..
          The truth is Achyuth still do care for you..even if you hurt him more than now..
          I promisinig you again re.."I ever and never talk the things with you, that makes you hurt.."
                I know I hurt you sometimes Nikitha..sorrie for the all the things that makes you hurt from my side Papa..
          <br></br>
          I Miss you sooooooooo muchhhhh re...
          <br></br>
          Achyuth always miss you Papa🖤..!
          <br></br>
          nik hindi ardham kaadhu kada re..idhe dani lyrics..
          This heart has gone mad
          Now only you can explain it
              I see my world in you
                  My world, you are a wanderer
                                  I am lucky that by fate
              I have found you like this
              I have got permission from God to love you..
        </p>

        <div><ReactAudioPlayer className='song'
          src={song}
          autoPlay
          controls
          />
          </div>
      </div>
    </div>
  );
