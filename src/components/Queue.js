import React from 'react'

const Queue = ({ setShowQueue }) => {
  return (
    <div className='queue'>
      <div className="queue-top">
                <img src={ require("../assets/close.svg").default } alt="" className="hidden" />
                <p>Lyttekø</p>
                <img src={ require("../assets/close.svg").default } alt="" className="visible" onClick={ () => setShowQueue(false) } />
      </div>
      <div className="queue-middle">
        <p className="queue-empty">Din lyttekø er tom</p>
        <p className="queue-links">Sammensæt din lyttekø af <br/><span>oplæste artikler</span> og <span>podcast</span>.</p>
        <p className="queue-add">Tryk <img src={ require("../assets/queue_add_white.svg").default } alt="" /> for at sætte i kø.</p>
      </div>
    </div>
  )
}

export default Queue