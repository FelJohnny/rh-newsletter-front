const port = 3333
const url = "http://18.231.121.86"


export function GET_ALL(tableName){
    return{
        url:`${url}:${port}/${tableName}`,
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
        options:{
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }
    }
}

export function POST_DATA(tableName,data){
    return{
        url:`${url}:${port}/${tableName}/${id}`,
        options:{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    }
}

export function UPDATE_DATA(tableName,updateData,id){
    return{
        url:`${url}:${port}/${tableName}/${id}`,
        options:{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        }
    }
}

export function DELETE_DATA(tableName,id){
    return{
        url:`${url}:${port}/${tableName}/${id}`,
        options:{
            method: "DELETE",
        }
    }
}