async function getJson(){
    const connection = await fetch("../data.json");
    const convertedConnection = await connection.json();
    return convertedConnection;
}

export const  conectJson = {
    getJson
}
