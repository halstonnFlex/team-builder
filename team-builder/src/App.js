import React,{useState} from 'react';
import './App.css';
import Form from './Form.js'
import MemberCard from './MemberCard.js';
function App() {
const [memberlist, setMemberlist]=useState([
  {
    name:'Name',
    email:'email@mail.com',
    role:'Role',
  },

]);
const addNewMember= (newMember)=>{
  setMemberlist([...memberlist, newMember])
}
  return (
    <div className="App">
      <Form addNewMember={addNewMember} addTest='addtest' />
      <MemberCard memberlist={memberlist}/>
    </div>
  );
}
export default App;