import http from "../httpcommon";

class loginservice{
   login(data){
      return http.post("/login",data);
   }
   readUser(sid){
      return http.post("/read",sid);
   }
}

export default new loginservice();