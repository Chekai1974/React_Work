import React from 'react';

function ContactForm({addNewList,closeModal}) {
    const submit = (e) => {
        e.preventDefault()
         const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const tel = e.target.elements.tel.value;
        addNewList({
            name,
            email,
            tel
        })
        e.target.reset()
        }
    return (
        <div className='form'>
            <form onSubmit={submit}>
                <input type="text" name="name" required placeholder='Slyvka Marko Viktorovych' />
                <input type="text" name="email" required placeholder='Email' />
                <input type="text" name='tel' required placeholder='+32-494-84-99' />
                <button className='add' id='btn'>Add Contact</button>
            </form>
            <button className='check' id='btn' onClick={closeModal}>Your Contacts</button>
        </div>
    );
};

export default ContactForm