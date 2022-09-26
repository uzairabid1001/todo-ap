
import './App.css';

import { useState } from 'react'

function App() {

  const [txt, settxt] = useState('')
  const [list, setlist] = useState([])
  const [edititem, setedititem] = useState(true)
  const [Newitem, setNewitem] = useState('')
  // function to add itme in list 

  function add() {
    if (!txt) {

    }
    else if (txt && !edititem) {
      setlist(list.map((elem) => {
        if (elem.Token === Newitem) {
          return { ...elem, Name: txt }
        }
        return elem;
      }))
      setedititem(true)
      settxt('')
      setNewitem(null)

    }
    else {
      // list.push(txt)
      const Items = { Token: new Date().getTime().toString(), Name: txt }
      setlist([...list, Items]);
      settxt('')
    }
  }
 

  function deleteitem(id) {
    const updateitem = list.filter((e) => {

      return id !== e.Token;

    })
    setlist(updateitem)
  }

  //DeleteAll

  function DeleteAll() {
   
    setlist([]);
  }
  return (
    <div className="App">
      <header className="App-header">
       
        <div>
        <input className='inp' size={30} onChange={(e) => {
          settxt(e.target.value)
        }} />
        
        {
          edititem ? <button className='btn' onClick={() => add()}> <b>Add item</b></button> : <button onClick={() => add()}> Update item</button>
        }
        
              <button  className='btn' onClick={() => DeleteAll()}><b> Delete All Item </b></button>
    
              </div>
    
    

        <ul>{list.map((Inputvalue) => {

             return<li key={Inputvalue.Token} >{Inputvalue.Name}
          <div>
            <button className='btn-' onClick={() => deleteitem(Inputvalue.Token)}><b>Delete Item</b></button>
            </div>
          </li>
          
        })}
        </ul>

      </header>
    </div>
  );
}

export default App;