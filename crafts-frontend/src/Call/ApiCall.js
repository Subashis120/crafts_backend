import Axios from 'axios';
import { BASE_URL } from "../config/Endpoints";

const apiClient = Axios.create({
    headers: {
      'Content-Type': 'application/json' ,
    },
  });


  // Define common API methods
const _getCategory = (url, config = {}) => {
   return apiClient.get(BASE_URL+url, config)
  .catch( (error) => {
    console.log("error", error);
    if(error.response.status === 401){
        localStorage.clear();
        window.location.href = "/login"
    }else{
      //window.location.href = "/login"
    }
  });
};

// Export API methods
export { _getCategory };
