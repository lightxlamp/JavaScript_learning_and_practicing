function logData_1(data: unknown) { 
    let value : string = data; // Type 'unknown' is not assignable to type 'string'.
    console.log(value)
}

function logData_2(data: unknown) { 
    let value : string;
    if (typeof data === 'string') {
        value = data;
        console.log(value)
    }
}

// If we don't know what type of data we're dealing with, we use “unknown.”