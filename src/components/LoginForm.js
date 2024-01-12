import loginservice from "../services/loginservice";
function LoginForm(props){
   const submit = (e)=>{
      e.preventDefault();
      let data = new FormData(e.target);
      loginservice.login(data).then(
         res=>{
            console.log(res);
            let resData = res.data;
            sessionStorage.setItem("sid",resData.sid);
            props.chuser(resData.sid);
         },
         e=>{console.log("Error " + e.response.data)}
      )
   }
   return(
      <form onSubmit={submit}>
         <input type="email" name="email" placeholder="Email" required/>
         <input type="password" name="pass" placeholder="Password" required/>
         <button type="submit">Login</button>
      </form>
   )
}

export default LoginForm;