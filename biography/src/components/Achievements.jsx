import React from 'react'

function Achievements({attention,styles,stylesForDivs}) {
    return (
        <div style={stylesForDivs}>
            <h2>Достижения</h2>
            <p>Чемпион Высшей Украинской лиги КВН</p>
            <p>АМИК (2005) — «Аляска» (Киев)</p>
            <h6 style={styles}>{attention}</h6>
        </div>
    )
}

export default Achievements