import React, { useEffect } from 'react';
import './App.css';

// var timerStart = Date.now();

//initialize throttlePause variable outside throttle function
let throttleTimer;
const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

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

  useEffect(() => {
    if (window && document) {
      const script = document.createElement('script');
      const body = document.getElementsByTagName('body')[0];
      // import webgazer library
      script.src = 'https://webgazer.cs.brown.edu/webgazer.js?';
      body.appendChild(script);

      //  run webgazer
      script.addEventListener('load', () => {
        window.webgazer
          .setGazeListener(function (data) {
            if (data == null) {
              return;
            }
            throttle(function () {
              console.log(
                `eye gaze cord[x,y]: ${data.x}, ${
                  data.y
                }, at ${new Date().getTime()}`,
              );
            }, 3000);
          })
          .begin();
      });
    }
  }, []);

  return (
    <>
      <div id='app' className='app'>
        <div className='overlay'></div>
        <div
          className='text'
          style={{
            position: 'absolute',
            right: '1rem',
            top: '7rem',
            fontSize: '0.75rem',
          }}
        >
          You look <span id='textStatus'>...</span>!
          <span aria-label='emoji' role='img' id='emoji'>
            😐
          </span>
        </div>
        <div
          style={{
            width: '50%',
            marginInline: 'auto',
            background: '#eee',
            padding: '1rem',
            color: '#121',
            textAlign: 'left',
            fontSize: '1rem',
            // marginTop: '2rem',
            borderRadius: '1rem',

            maxHeight: '80vh',
            overflowY: 'scroll',
            position: 'relative',
            fontFamily: 'monospace',
          }}
        >
          <h1>
            The Role of Eye Gaze in Regulating Turn Taking in Conversations: A
            Systematized Review of Methods and Findings
          </h1>

          <strong>Ziedune Degutyte and Arlene Astell</strong>

          <p>
            Eye gaze plays an important role in communication but understanding
            of its actual function or functions and the methods used to
            elucidate this have varied considerably. This systematized review
            was undertaken to summarize both the proposed functions of eye gaze
            in conversations of healthy adults and the methodological approaches
            employed. The eligibility criteria were restricted to a healthy
            adult population and excluded studies that manipulated eye gaze
            behavior. A total of 29 articles—quantitative, qualitative and mixed
            methods were returned, with a wide range of methodological designs.
            The main areas of variability related to number of conversants,
            their familiarity and status, conversation topic, data collection
            tools—video and eye tracking—and definitions of eye gaze. The
            findings confirm that eye gaze facilitates turn yielding, plays a
            role in speech monitoring, prevents and repairs conversation
            breakdowns and facilitates intentional and unintentional speech
            interruptions. These findings were remarkably consistent given the
            variability in methods across the 29 articles. However, in relation
            to turn initiation, the results were less consistent, requiring
            further investigation. This review provides a starting point for
            future studies to make informed decisions about study methods for
            examining eye gaze and selecting variables of interest.
            <br />
            Human beings have evolved complex social-cognitive skills which
            enable us to exchange knowledge and communicate in multiple ways
            (Herrmann et al., 2007). People exchange verbal, vocal [e.g., tone
            of voice; (Lerner, 2004)] and non-verbal [e.g., eye gaze, gestures,
            facial expressions (Kendon, 1967; Bavelas and Chovil, 2000)]
            behaviors that convey meanings, intentions, and information.
            Non-verbal behavior can enrich conversation by adding extra
            information, or revealing emotional states that are not expressed
            verbally (Choi et al., 2005). Eye gaze in particular has been
            identified as playing a key role in communication, with infants
            showing a preference for direct gaze from birth (Farroni et al.,
            2002). The role that eye gaze plays in social interaction has been
            studied across a variety of fields, including typical and atypical
            child development (Baron-Cohen, 1997; Morales et al., 2000), mental
            health conditions [including schizophrenia (Dowiasch et al., 2016);
            posttraumatic stress disorder (Lazarov et al., 2019), and bipolar
            disorder (Purcell et al., 2018)], primates (Ryan et al., 2019) and
            human-robot interaction (Admoni and Scassellati, 2017).
            Additionally, eye gaze has been studied with different theoretical
            and methodological approaches from neuroscience (Sato et al., 2016)
            to sociology (McCarthy et al., 2008), producing a rich variety of
            data but complicating the conclusions that can be drawn about the
            role of eye-gaze in conversation. Pioneering research conducted by
            Kendon (1967) suggested that eye gaze is used to regulate and
            monitor turn taking. Specifically, Kendon proposed that speakers
            tend to avert their gaze at the start of their turn in order to
            concentrate and plan their speech or to indicate that they are now
            holding the floor. He further proposed that in a two-person
            conversation, at the end of their turn the speaker gazes at the
            listener to indicate the end of their turn and to seek information
            about the listener's availability to speak next (Kendon, 1967). A
            decade later Kendon's research was challenged in studies by Rutter
            et al. (1978) and Beattie (1978, 1979). Whilst Rutter et al. (1978)
            also found that at the end of the turns, speakers tended to gaze at
            the listener in a dyadic situation, they argued that in order to
            claim that eye gaze has a role in turn taking, the gaze pattern
            should follow three rules. Firstly, speakers should be looking at
            their conversation partners more at the end of their turns than at
            the beginning, because at the start of the turn the speakers should
            be gazing away to concentrate and plan their speech (Rutter et al.,
            1978). Secondly, at the end of one speaker's turn, the conversation
            partners should share a high level of mutual gaze, because in order
            for a speaker to pass the turn the listener should be available to
            receive it (Rutter et al., 1978). Finally, there should be higher
            levels of mutual gaze between conversation partners at the end of
            the turns rather than at the start of the new turns, because a new
            speaker at the start of their turn, should start gazing away to
            concentrate (Rutter et al., 1978). To test these predictions, Rutter
            et al. (1978) carried out two studies of which the first failed to
            support these three rules, and the second provided only partial
            support. However, Rutter et al.'s (1978) approach to data analysis
            differed from Kendon's (1967) making direct comparison difficult.
            For example, to test the first rule—that the speakers should be
            looking at their conversation partners more at the end of their
            turns than at the beginning (because at the start of the turn the
            speakers should be gazing away to concentrate and plan their
            speech)—Rutter et al. (1978) compared the number of turns when the
            speaker was looking at the listener at the start of new utterance
            with the number of turns that the speaker was looking at the
            listener at the end of old utterance. In comparison, Kendon (1967)
            in attempting to identify if the speaker was looking at their
            conversation partners more at the end of their turns, compared the
            number of turns in which the speaker gazed toward the listener with
            the number of turns in which the speaker did not gaze toward the
            listener at the end of the turns.
            <br />
            <span style={{ fontSize: '0.75rem' }}>
              Reference:
              <a
                style={{ cursor: 'pointer' }}
                href='https://www.frontiersin.org/articles/10.3389/fpsyg.2021.616471/full'
              >
                https://www.frontiersin.org/articles/10.3389/fpsyg.2021.616471/full
              </a>
            </span>
          </p>
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
          <br />
          <span style={{ fontSize: '0.5rem' }}>
            Prepared for{' '}
            <a
              href='https://diversasia-accessible-he.eu/'
              rel='noreferrer'
              target='_blank'
            >
              DiversAsia
            </a>{' '}
            by{' '}
            <a href='https://skoder.co' rel='noreferrer' target='_blank'>
              Skoder
            </a>
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
