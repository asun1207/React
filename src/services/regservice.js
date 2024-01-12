import http from "../httpcommon";

class RegService{
   register(data){
      return http.post("/reg",data);
   }
}

export default new RegService();