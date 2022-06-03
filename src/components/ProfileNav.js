const ProfileNav = ({ setShowProfileNav, setShowQueue }) => {
  return (
    <div className='profilenav'>
        <div className="nav-overlay"></div>
        <div className="nav-content">
            <p className="nav-welcome bold">Velkommen Jesper Dalsten</p>
            <div className="nav-item">
                <img src={ require("../assets/settings.svg").default } alt="" />
                <p className="nav-item-link">Indstillinger</p>
            </div>
            <div className="nav-item" onClick={ () => {setShowQueue(true); setShowProfileNav(false)} }>
                <img src={ require("../assets/queue_add.svg").default } alt="" />
                <p className="nav-item-link clickable">Lyttekø</p>
            </div>
            <div className="nav-callout">
                <p className="bold">Digital Plus</p>
                <p>Opgrader</p>
            </div>
            <div className="nav-item">
                <img src={ require("../assets/abonnement.svg").default } alt="" />
                <p className="nav-item-link">Abonnement</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileNav