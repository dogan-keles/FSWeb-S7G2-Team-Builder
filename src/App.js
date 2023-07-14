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

  return (
    <div className="App">
      <header className="App-header">
        {memberList.map((member) => (
          <span key={member.name}>
            {member.name}-{member.favTime}-{member.focus}
          </span>
        ))}
        <Form />
      </header>
    </div>
  );
}

export default App;
