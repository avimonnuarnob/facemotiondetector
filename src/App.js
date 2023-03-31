import React, { useEffect, useRef } from 'react';
import './App.css';

var timerStart = Date.now();

// import { getDatabase, ref, set } from "firebase/database";

function App() {
  // function writeUserData(userId, name, email, imageUrl) {
  // 	const db = getDatabase();
  // 	set(ref(db, 'users/' + userId), {
  // 	  username: name,
  // 	  email: email,
  // 	  profile_picture : imageUrl
  // 	});
  //   }

  //   writeUserData('1','n','e','i')

  const onKeyPressHandler = (e) => {
    console.log(`You pressed the ${e.key} key`);
  };

  useEffect(() => {
    window.addEventListener('keypress', onKeyPressHandler);
    return () => {
      window.removeEventListener('keypress', onKeyPressHandler);
    };
  }, []);

  return (
    <>
      <div id='app' className='app'>
        <div class='overlay'></div>
        <div className='text'>
          <span aria-label='emoji' role='img' id='emoji'>
            😐
          </span>
          You look <span id='textStatus'>...</span>!
        </div>
        {/* <div id='IframeWrapper'>
          <iframe
            src='https://api.gazerecorder.com/GazeRecorderAPI'
            allow='camera; microphone'
            height='600'
            width='100'
            title='Iframe Example'
          ></iframe>
        </div> */}

        <div className='mockup'>
          <div id='browser ' className='browser'>
            <div className='browserChrome'>
              <div className='browserActions'></div>
            </div>
            <canvas id='canvas'> </canvas>
            <video id='video' width='140' height='80' muted autoPlay></video>
          </div>
        </div>
        <p className='note'>
          You are not being recorded, it all happens in your own browser!
        </p>
      </div>
    </>
  );
}

export default App;
