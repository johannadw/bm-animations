import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Maxiplayer from './components/Maxiplayer';
import Miniplayer from './components/Miniplayer';
import QueueToaster from './components/QueueToaster';
import Queue from './components/Queue';
import { CSSTransition } from "react-transition-group";



function App() {
  let [isPlaying, setIsPlaying] = useState(false)
  let [showQueueToaster, setShowQueueToaster] = useState(false)
  let [showMiniplayer, setShowMiniplayer] = useState(false)
  let [showMaxiplayer, setShowMaxiplayer] = useState(false)
  let [showQueue, setShowQueue] = useState(false);

  function hideQueueToaster() {
    setTimeout(() => {setShowQueueToaster(false)}, 5000)
  }

  return (
    <div className="App">
      <Header setShowQueue={ setShowQueue } />
      <div className="article">
        <div className="article-top">
          <p className="article-teaser"><span className="article-theme">Maskulinitet. </span>Først handlede det om værnepligt. Så blev manderollen inddraget i svensk polemik. Bulder og genusbrag.</p>
          <h1 className="article-title">Svenske krigere</h1>
          <p className="article-writer">Joakim Jakobsen</p>
          <div className="article-audio">
            <div className="article-audio-btn" onClick={ () => {setShowQueueToaster(true); hideQueueToaster(); } }>
              <img src={ require("./assets/queue_add.svg").default } alt="" />
              <p>Kø</p>
            </div>
            <div className="article-audio-btn" onClick={ () => { setIsPlaying(!isPlaying); setShowMiniplayer(true); } } >
                <CSSTransition in={ isPlaying } timeout={ 500 } classNames="toggle-audio" >
                  { isPlaying ? <img src={ require("./assets/pause_black.svg").default } alt="" onClick={ () => setIsPlaying(!isPlaying) } /> : <img src={ require("./assets/play.svg").default } alt="" onClick={ () => setIsPlaying(!isPlaying) } /> }
                </CSSTransition>
                { isPlaying ? <p>Pause</p> : <p>Play</p> }
            </div> 
            <div className="article-audio-info">
              <img src={ require("./assets/read_article_black.svg").default } alt="" />
              <p>3 min.</p>
            </div>
          </div>
        </div>
        <div className="article-bottom">
          <p>Quisque vestibulum orci purus, eu pharetra ligula lacinia vitae. Proin luctus ex non risus euismod, eget rutrum mi iaculis. Pellentesque vestibulum mollis congue. Donec a quam enim. Aliquam tincidunt tristique nibh, in volutpat ante. Mauris sit amet ultrices felis. Nam laoreet nulla a est mollis, eu finibus ex blandit. Sed ac ultrices dolor, et vestibulum augue.</p>
          <p>Praesent posuere consequat quam. Sed eget orci ac ex fringilla viverra ac ac dolor. Proin vitae lectus velit. Vivamus sit amet ullamcorper ipsum. Mauris mattis bibendum odio et interdum. Suspendisse nisl felis, fringilla ac enim vitae, feugiat</p>
          <p>Quisque vestibulum orci purus, eu pharetra ligula lacinia vitae. Proin luctus ex non risus euismod, eget rutrum mi iaculis. Pellentesque vestibulum mollis congue. Donec a quam enim. Aliquam tincidunt tristique nibh, in volutpat ante. Mauris sit amet ultrices felis. Nam laoreet nulla a est mollis, eu finibus ex blandit. Sed ac ultrices dolor, et vestibulum augue.</p>
          <p>Praesent posuere consequat quam. Sed eget orci ac ex fringilla viverra ac ac dolor. Proin vitae lectus velit. Vivamus sit amet ullamcorper ipsum. Mauris mattis bibendum odio et interdum. Suspendisse nisl felis, fringilla ac enim vitae, feugiat</p>
        </div>
      </div>

      <CSSTransition in={ showMaxiplayer } timeout={ 1000 } classNames="showmaxiplayer" unmountOnExit>
        <Maxiplayer isPlaying={ isPlaying } setIsPlaying={ setIsPlaying } setShowMaxiplayer={ setShowMaxiplayer } setShowQueue={ setShowQueue } /> 
      </CSSTransition>
      
      <CSSTransition in={ showMiniplayer } timeout={ 1000 } classNames="showminiplayer" unmountOnExit >
        <Miniplayer isPlaying={ isPlaying } setIsPlaying={ setIsPlaying } setShowMiniplayer={ setShowMiniplayer } setShowMaxiplayer={ setShowMaxiplayer } />
      </CSSTransition>

      <CSSTransition in={ showQueue } timeout={ 1000 } classNames="showmaxiplayer" unmountOnExit >
        <Queue setShowQueue={ setShowQueue } />
      </CSSTransition>

      {/* <CSSTransition in={ showQueueToaster } timeout={ 1000 } classNames="toaster" unmountOnExit> */}
        <QueueToaster setShowQueueToaster={ setShowQueueToaster } showMiniplayer={ showMiniplayer } setShowQueue={ setShowQueue } showQueueToaster={ showQueueToaster } />
      {/* </CSSTransition> */}
    </div>
  );
}

export default App;
