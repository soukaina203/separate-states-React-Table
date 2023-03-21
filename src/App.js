import './App.css';
import React,{useState} from 'react'
function App() {
  const [pr,setPr]=useState([])
  const [currentRow,setcurrentRow]=useState({})
  return (
    <div className="App">
      <button onClick={()=>{
        setPr([...pr,{Product:0,price:0}])
      }

      }>+</button>
<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  {pr.map((e,i)=>{
    return (
      <tr>
<td><input type="text" onBlur={(e)=>{
let n=[...pr]
n[i].Product=e.target.value
n[i].price=n[i].Product*2

setcurrentRow(n[i])

console.log(currentRow)
}}/></td>
<td>{pr[i].price} </td>
      </tr>
    )
  })}

</table>
    </div>
  );
}

export default App;
