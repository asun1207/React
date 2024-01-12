import LoginForm from "./LoginForm";
import Welcome from "./Welcome";
function Login(props){
   return(
      <>
      {(props.user)===null?<LoginForm chuser={props.chuser}/>:<Welcome userinfo={props.user}/>}
      </>
   )
}

export default Login;