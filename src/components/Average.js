import { useState } from "react";
import Student from "../classes/Student";
import StuTable from "./StuTable";

function Average() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mark1, setMark1] = useState("");
  const [mark2, setMark2] = useState("");
  const [mark3, setMark3] = useState("");
  const [mark4, setMark4] = useState("");
  const [mark5, setMark5] = useState("");
  const [mark6, setMark6] = useState("");
  const [studentList, setStudent] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    let tmpStudent = new Student(fname, lname, mark1, mark2, mark3, mark4, mark5, mark6);
    setStudent((prevList) => {
      return [...prevList, tmpStudent];
    });
    setFname("");
    setLname("");
    setMark1("");
    setMark2("");
    setMark3("");
    setMark4("");
    setMark5("");
    setMark6("");
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <input type="text" value={fname} placeholder="Enter Your First Name" onChange={(e) => setFname(e.target.value)} />
        <input type="text" value={lname} placeholder="Enter Your Last Name" onChange={(e) => setLname(e.target.value)} />
        <input type="number" value={mark1} placeholder="Enter Your HTML Mark" onChange={(e) => setMark1(e.target.value)} />
        <input type="number" value={mark2} placeholder="Enter Your CSS Mark" onChange={(e) => setMark2(e.target.value)} />
        <input type="number" value={mark3} placeholder="Enter Your JS-1 Mark" onChange={(e) => setMark3(e.target.value)} />
        <input type="number" value={mark4} placeholder="Enter Your JS-2 Mark" onChange={(e) => setMark4(e.target.value)} />
        <input type="number" value={mark5} placeholder="Enter Your PHP Mark" onChange={(e) => setMark5(e.target.value)} />
        <input type="number" value={mark6} placeholder="Enter Your React Mark" onChange={(e) => setMark6(e.target.value)} />
        <button type="submit">Add</button>
        <hr />
      </form>
      <StuTable stList={studentList} />
    </>
  );
}
export default Average;
