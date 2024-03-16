
const port = 3333;
const ip = '18.231.121.86'

export  function GET_ALL(nomeTabela){
  return {url:`http://${ip}:${port}/${nomeTabela}/`}
}