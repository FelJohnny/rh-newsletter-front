
import { GET_ALL } from "../Api/api.js";
import useFetch from "../Api/useFetch.jsx";

  const { data, loading, error, request } = useFetch();


export function validaDuplicidadeDB(tablename, value ){
    
  const { url, options } = GET_ALL(tablename);
  request(url, options);

  console.log(data);
  console.log(value);

  return true;
}