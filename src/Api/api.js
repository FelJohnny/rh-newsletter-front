const port = 3333
const url = "http://18.231.121.86"


export function GET_ALL(tableName){
    return{
        url:`${url}:${port}/${tableName}`,
        mode: 'cors',
        options:{
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }
    }
}

export function GET_TO_ID(tableName,id){
    return{
        url:`${url}:${port}/${tableName}/${id}`,
        mode: 'cors',
        options:{
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }
    }
}