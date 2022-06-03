import React from 'react'

const PlayerSpeed = ({ setShowPlayerspeed, playingSpeed, togglePlayingSpeed }) => {
  return (
    <div className="playerspeed">
        <div className="playerspeed-top"></div>
        <div className="playerspeed-overlay">
            <div className="overlay-top">
                <img src={ require("../assets/close.svg").default } alt="" className="hidden" />
                <p>Skift hastighed</p>
                <img src={ require("../assets/close.svg").default } alt="" onClick={ () => setShowPlayerspeed(false) } />
            </div>
            <div className="overlay-content">
                { playingSpeed.map( ( item, index ) => (
                  <div className="speed-item" key={index} onClick={ () => togglePlayingSpeed(item) }>
                    <img src={ require("../assets/checked.svg").default } alt="" className={ item.selected ? 'visible' : '' } />
                    <p className={ `speed ${item.selected ? 'selected' : ''}` }  >{ item.speed }</p>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PlayerSpeed