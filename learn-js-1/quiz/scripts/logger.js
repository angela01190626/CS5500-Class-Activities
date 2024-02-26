// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
const logger = {
    logMsg: function() {
        console.log('Error message from : ' + `${this.errMsg}`)
    }
}

const obj1 = {
    errMsg: 'error message from obj1'
}

const obj2 = {
    errMsg: 'error message from obj2'
}


logger.logMsg.call(obj1)
logger.logMsg.call(obj2)
