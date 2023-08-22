import './App.css';
import SMButton from './components/SMbutton';
import cards from './components/cards';
import table from './components/table';
import INPUT from './components/input';
import Select from './components/select';
import { useState } from "react";

function App() {

  const [text, setText] = useState("")
  const testing = (e) => {
    setText(e)
  }

  let arr = [{
    id: 1,
    name: "Suhaib",
    age: 20,
    institute: "NED"
  },
  {
    id: 2,
    name: "Anas",
    age: 21,
    institute: "NED",
  },
  {
    id: 3,
    name: "Hammad",
    age: 21,
    institute: "SAIMS"
  },
  {
    id: 4,
    name: "Saad",
    age: 19,
    institute: "SAIMS"
  }]

  const [text1,setText1]=useState("")

  const arr1=[
    {value: "Lamborghini",label:"Lamborghini"},
    {value: "Bugatti",label:"Bugatti"},
    {value: "BMW",label:"BMW"},
    {value: "Audi",label:"Audi"},
    {value: "Rolls Royce",label:"Rolls Royce"}
  ]
  const [selectedOption,setSelectedOption]=useState(arr1[0].value)


  
  return (
    <div className='mainDiv'>
      <h1 className='mainHeading'>Components</h1>

      <h1>BUTTONS</h1>
      <div className='buttonContainer'>
        <SMButton buttonValue="abc" buttonClick={() => testing("abc")} />
        <SMButton buttonValue="1234" buttonClick={() => testing("1234")} />
      </div>
      <p className='buttonText'><center><b>{text}</b></center></p>

      <h1>CARDS</h1>
      <div className='cardContainer'>{arr.map(cards)}</div>

      <h1>TABLE</h1>
      <div className='tableContainer'>{table(arr)}</div>

      <h1>INPUT</h1>
      <div className='inputContainer'>
        <INPUT label="Insert Text : " value={text1} onChange={(e)=>setText1(e.target.value)}/>
      </div>
      <p className='inputText'><center><b>{text1}</b></center></p>
      
      <h1>SELECT</h1>
      <div className='selectContainer'>
        <Select options={arr1} label={"Select An Option : "} value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)} />
      </div>
      <p className='selectedOption'><center><b>{selectedOption}</b></center></p>
    </div>
  );
}

export default App;
