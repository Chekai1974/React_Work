import React, {useEffect, useState} from 'react'
import ContactForm from '../ContactForm/ContactForm'

function ContactList() {
  const [list, setList] = useState([])
  const [active, setActive] = useState(false)

  function addNewList(newList) {
    setList((prevList)=>[...prevList,newList])
  }

  function setModal() {
  setActive((prevAcive) => !prevAcive);
}

  useEffect(() => {
    const localList = localStorage.getItem('list') || [];
    setList(JSON.parse(localList))
  }, [])
  
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])
  
  function deleteContact(index) {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  }
  return (
    <>
      <ContactForm addNewList={addNewList} closeModal={setModal}></ContactForm>
      <div className="modal" style={{ display: active ? 'block' : 'none' }}>
        <div className="content">
          <div className="container-elemnt">
            {list.map((elem, index) => (
              <div className='element' key={`${elem.name}-${index}`}>
                <p>{elem.name}</p>
                <p>{elem.email}</p>
                <p>{elem.tel}</p>
                <div className="delete1"></div>
                <img onClick={() => deleteContact(index)} id={index} className='delete' src="https://cdn-icons-png.flaticon.com/128/5028/5028066.png" alt="bin" />
              </div>
              ))
              }
          </div>
          <button className="close" onClick={setModal}>X</button>
        </div>
      </div>
    </>
  )
}

export default ContactList