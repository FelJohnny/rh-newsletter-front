export function GET_ALL(tableName){
    return{
        url:`http://localhost:3333/${tableName}`,
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
        url:`http://localhost:3333/${tableName}/${id}`,
        mode: 'cors',
        options:{
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }
    }
}