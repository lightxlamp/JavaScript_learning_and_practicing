const age : number = 23

let value : any = 23
value = '23'
value = true

function logData(data) { // noImplicitAny: true - That's why we have error here
    console.log(data)
}