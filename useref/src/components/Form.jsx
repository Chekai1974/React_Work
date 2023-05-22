import React, { useRef, useState } from 'react'

function Form() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
            gap: "10px"
        },
        container2: {
            display: 'flex',
            alignItems: 'center',
            gap: "40px"
        },
        form: {
            marginBottom: '20px',
        },
        input: {
            marginBottom: '10px',
        },

    };
    const nameRef = useRef()
    const phoneRef = useRef()
    const agreeRef = useRef()
    const [checkState, setCheckState] = useState(false)
    const toggleCheckStste = () => {
        return setCheckState(!checkState)
    }

    const changeRefColor = (ref)=>{
        phoneRef.current.style.backgroundColor = ""
        nameRef.current.style.backgroundColor = ""
        ref.current.style.backgroundColor = "lightBlue"
        ref.current.focus()
    }
    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <input type="text" placeholder='name' ref={nameRef} style={styles.input}/>
                <input type="text" placeholder='phone' ref={phoneRef} style={styles.input}/>
                <input type="checkbox" ref={agreeRef} checked={checkState} style={styles.input} />
            </form>
            <div style={styles.container2}>
                <button onClick={() => {
                changeRefColor(nameRef)
                }}>nameREF</button>
                <button onClick={() => {
                    changeRefColor(phoneRef)
                }} >phoneREF</button>
                <button onClick={toggleCheckStste} >agreeREF</button>
            </div>
            
        </div>
    )
}

export default Form