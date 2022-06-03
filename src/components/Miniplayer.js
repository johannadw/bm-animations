import { CSSTransition } from "react-transition-group";

const Miniplayer = ({ isPlaying, setIsPlaying, setShowMiniplayer, setShowMaxiplayer }) => {

  return (
    <div className="miniplayer">
        <div className="miniplayer-progress-bar">
            <div className="miniplayer-progress"></div>
        </div>
        <div className="miniplayer-content">
            <p className="miniplayer-title" onClick={ () => setShowMaxiplayer(true) }>Svenske krigere</p>
            <div className="miniplayer-btns">
                <CSSTransition in={ isPlaying } timeout={ 500 } classNames="toggle-audio" >
                  { isPlaying ? <img src={ require("../assets/pause_white.svg").default } alt="" onClick={ () => setIsPlaying(!isPlaying) } /> : <img src={ require("../assets/play_white.svg").default } alt="" onClick={ () => setIsPlaying(!isPlaying) } /> }
                </CSSTransition>
                <img src={ require("../assets/close.svg").default } alt="" className="close-mini" onClick={ () => {setShowMiniplayer(false); setIsPlaying(false) } }/>
            </div>
        </div>
    </div>
  )
}

export default Miniplayer