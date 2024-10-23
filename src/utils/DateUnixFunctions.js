// Convierte un valor de tipo date en unix
function convertToUnix(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const unixTime = Math.floor(dateTime.getTime() / 1000)
    return unixTime;
}

// Convierte unix en date
function unixToDate(unixTime) {
    const date = new Date(unixTime * 1000);

    return date;
}

// Convierte unix en String
function unixToString(unixTime) {
    const date = new Date(unixTime * 1000);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const day = ('0' + date.getDate()).slice(-2);
    
    return `${day}-${month}-${year}`;
}

export {unixToDate, unixToString, convertToUnix};