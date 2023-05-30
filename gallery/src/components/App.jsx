import { useEffect, useState } from "react";
import axios from "axios"
import Myform from "./Myform";

function App() {
  const [ids, setIds] = useState([])
  const [list, setList] = useState([])
  const [state, setState] = useState(false)
  const [bigPhoto,setBigPhoto] = useState([])

  useEffect(() => {
    async function getData(id) {
      try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        setList((prevList)=>[...prevList, resp.data])
      } catch(error) {
        console.error(error.message);
      }
    }
    if (ids.length > 0) {
      const lastId = ids[ids.length - 1];
      getData(lastId);
    } 
  }, [ids])
  
  function addNewId(newId) {
    const id = Number(newId)
    if (!ids.includes(id)) {
      setIds([...ids, id])
    }else {
      alert("Такое значения уже есть или его не существует ")
    }
  }
  function openPhoto(id) {
    setState((prevState) => !prevState)
    setBigPhoto(list[id])
  }
  function closePhoto() {
    setState((prevState) => !prevState)
  }
  return (
    <>
      <Myform addNewId={addNewId}></Myform>
      <div className="potos">
        {list.map((elem, index) => {
          return (
            <img onClick={()=>{openPhoto(index)}} id={index} key={index} src={elem.url} alt="img"/>
          )
        }
        )}
      </div>
      <div className="modal" style={{display: state ? "block" : "none"}} onClick={closePhoto}>
        <div className="content">
           <img src={bigPhoto.url} alt="img" />
        </div>
      </div>
    </>
  );
}
export default App;