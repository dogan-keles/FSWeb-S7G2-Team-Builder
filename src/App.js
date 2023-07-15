import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([
    { name: "Ömer", favTime: "Gece", focus: "frontend" },
    { name: "Doğancan", favTime: "Gündüz", focus: "frontend" },
    { name: "Emre", favTime: "Gece", focus: "frontend+backend" },
  ]);

  function addMember(newMember) {
    console.log("addMember çalıştı", newMember);
    const newMemberList = [...memberList, newMember];
    setMemberList(newMemberList);
  }
  const [editOrder, setEditOrder] = useState(null);

  const editHandler = (order) => {
    console.log("editHandler Çalıştı", order);
    setEditOrder(order);
  };

  return (
    <div className="App">
      <header className="App-header">
        {memberList.map((member, i) => (
          <span key={member.name}>
            {member.name}-{member.favTime}-{member.focus}
            <button onClick={() => editHandler(i)}>Düzenle</button>
          </span>
        ))}
        <Form addMember={addMember} editingMember={memberList[editOrder]} />
      </header>
    </div>
  );
}

export default App;
