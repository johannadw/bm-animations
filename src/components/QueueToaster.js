import React from 'react'
import { CSSTransition } from "react-transition-group";

const QueueToaster = ({ setShowQueueToaster, showMiniplayer, setShowQueue, showQueueToaster }) => {
  return (
    // <div className="queuetoaster"  >
    <CSSTransition in={ showQueueToaster } timeout={ 1000 } classNames="toaster" unmountOnExit>
    <div className={`queuetoaster ${showMiniplayer ? 'move-toaster' : ''}`} >
    {/* <div className="queuetoaster" style={{ bottom: showMiniplayer ? "74px" : "", transition: "bottom 500ms" }} > */}
        <div className="queuetoaster-side">
            <img src={ require("../assets/toaster.svg").default } alt="" />
            <div className="queuetoaster-content">
                <p>Lyd tilføjet til lyttekø</p>
                <div className="queuetoaster-actions">
                    <p onClick={ () => setShowQueueToaster(false) }>Fortryd</p>
                    <div className="divider"></div>
                    <p onClick={ () => setShowQueue(true) }>Gå til lyttekø</p>
                </div>
            </div>
        </div>
        <img src={ require("../assets/close_black.svg").default } className="close-icon" alt="" onClick={ () => setShowQueueToaster(false) } />
    </div>
    </CSSTransition>

  )
}

export default QueueToaster