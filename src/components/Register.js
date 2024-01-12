import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import regservice from "../services/regservice";
function Register(props){
   const passType = useRef();
   const [passBtn,setPassLb] = useState("Show Password");
   const [user,setUser] = useState({
      email:"",
      pass:"",
      fname:"",
      lname:"",
      addr:""
   });
   const navigate = useNavigate();
   const shBtn = ()=>{
      switch(passBtn){
         case "Show Password":
            passType.current.type = "Text";
            setPassLb("Hide Password");
         break;
         case "Hide Password":
            passType.current.type = "Password";
            setPassLb("Show Password");
         break;
      }
   };
   const chHandler = (val,key)=>{
      setUser(preVal =>{
         return {...preVal,[key]:val};
      });
   }
   const submit = (e)=>{
      e.preventDefault();
      // props.chuser(user);
      let regData = new FormData(e.target);
      regservice.register(regData).then(
         res=>{
            console.log(res)
         }
      ).catch(e=>{
         console.log(e);
      })
      navigate("/");
   }
   return(
      <form onSubmit={submit}>
         <input type="email" name="email" value={user.email} onChange={(e)=>chHandler(e.target.value,"email")} placeholder="Email"/>
         <input type="password" name="pass" value={user.pass} onChange={(e)=>chHandler(e.target.value,"pass")} ref={passType} placeholder="Password"/>
         <input placeholder="First Name" name="fname" value={user.fname} onChange={(e)=>chHandler(e.target.value,"fname")}/>
         <input placeholder="Last Name" name="lname" value={user.lname} onChange={(e)=>chHandler(e.target.value,"lname")}/>
         <input placeholder="Address" name="addr" value={user.addr} onChange={(e)=>chHandler(e.target.value,"addr")}/>
         <button type="button" onClick={shBtn}>{passBtn}</button>
         <button type="submit">Register</button>
      </form>
   )
}

export default Register;