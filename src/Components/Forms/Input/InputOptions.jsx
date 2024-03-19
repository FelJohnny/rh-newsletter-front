import React from "react";
import useFetch from '../../../Api/useFetch'
import {GET_ALL} from '../../../Api/api'

const InputOptions = ({ options }) => {
  const {data,loading,error,request} = useFetch()

React.useEffect(()=>{
const {url,options} = GET_ALL('tags')
request(url,options)
},[])

if(data)
  return (
    <select>
      {data.map((option,index) => {
        return <option key={index}>{option.nome}</option>;
      })}
    </select>
  );
};

export default InputOptions;
