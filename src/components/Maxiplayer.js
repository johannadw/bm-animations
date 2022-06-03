import { useState } from 'react';
import PlayerSpeed from './PlayerSpeed'
import { CSSTransition } from "react-transition-group";

const Maxiplayer = ({ isPlaying, setIsPlaying, setShowMaxiplayer, setShowQueue }) => {
    const [showPlayerspeed, setShowPlayerspeed] = useState(false)
    let [playingSpeed, setPlayingSpeed] = useState([
        { id: 0, speed: "0.5 x", selected: false, }, { id: 1, speed: "0.8 x", selected: false, }, { id: 2, speed: "1 x", selected: true, }, { id: 3, speed: "1.2 x", selected: false, }, { id: 4, speed: "1.5 x", selected: false, }, { id: 5, speed: "1.8 x", selected: false, }, { id: 6, speed: "2 x", selected: false, }, { id: 7, speed: "2.5 x", selected: false, }
        ])

    // Change the current selected playing speed on click
    function togglePlayingSpeed ( clickedItem ) {
        if (clickedItem.selected === true ) {
        // nothing happens
        console.log("already selected")
        } else {
        // reset currently selected playing speed to false (update playingSpeed state)
        let id = playingSpeed.findIndex( item => item.selected === true )
        if (id > -1) {
            let resetSpeed = [...playingSpeed];
            resetSpeed[id] = {
            ...resetSpeed[id],
            selected: false
            }
            // set newly selected playing speed to true (update playingSpeed state)
            let index = resetSpeed.findIndex( item => item.id === clickedItem.id)
            if (index > -1) {
            let newSpeed = [...resetSpeed]
            newSpeed[index] = {
                ...newSpeed[index],
                selected: true
            }
            setPlayingSpeed(newSpeed)
            }
        }
        }
    }

  return (
      <>
        <div className="maxiplayer">
            <div className="maxiplayer-top">
                <img src={ require("../assets/close.svg").default } alt="" className="hidden" />
                <p className="audio-type">Oplæst artikel</p>
                <img src={ require("../assets/close.svg").default } alt="" onClick={ () => setShowMaxiplayer(false)} />
            </div>
            <div className="maxiplayer-middle">
                <h1>Svenske krigere</h1>
                <p className="read-by">Oplæst af Anders Andersen</p>
                <p className="article-date"> 16. juni 2021</p>
            </div>
            <div className="maxiplayer-bottom">
                <div className="maxiplayer-progress">
                    <p className="maxiplayer-progress-current">2.52</p>
                    <div className="maxiplayer-progress-bar"><input type="range" name="progress" id="progress" min="0" max="100" className='accent' /></div>
                    <p className="maxiplayer-progress-time">-0.12</p>
                </div>
                <div className="maxiplayer-toggles">
                    <img src={ require("../assets/backward.svg").default } alt="" className="maxiplayer-toggle" />
                    <img src={ require("../assets/backward_seconds.svg").default } alt="" className="maxiplayer-toggle" />
                    <CSSTransition in={ isPlaying } timeout={ 500 } classNames="toggle-audio" >
                        { isPlaying ? <img src={ require("../assets/pause_circle.svg").default } alt="" className="maxiplayer-audio-toggle"  onClick={ () => setIsPlaying(!isPlaying) } /> : <img src={ require("../assets/play_circle.svg").default } alt="" className="maxiplayer-audio-toggle"  onClick={ () => setIsPlaying(!isPlaying) } /> }
                    </CSSTransition>
                    <img src={ require("../assets/forward_seconds.svg").default } alt="" className="maxiplayer-toggle" />
                    <img src={ require("../assets/forward.svg").default } alt="" className="maxiplayer-toggle" />
                </div>
                <div className="maxiplayer-overlays">
                    <p className="maxiplayer-overlay" onClick={ () => setShowPlayerspeed(true) } >1 x</p>
                    <img src={ require("../assets/queue.svg").default } alt="" className="maxiplayer-overlay" onClick={ () => setShowQueue(true) }  />
                </div>
            </div>
        </div>

        <CSSTransition in={ showPlayerspeed } timeout={1000} classNames="playerspeed-transition" unmountOnExit>
            <PlayerSpeed setShowPlayerspeed={ setShowPlayerspeed } playingSpeed={ playingSpeed } togglePlayingSpeed={ togglePlayingSpeed } />
        </CSSTransition>
    </>
  )
}

export default Maxiplayer