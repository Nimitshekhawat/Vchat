const moment =require('moment');
function formatMessages(username,text,files) {
    return {
        username,
        text,
        files,
        time:moment().format('h:mm a')
    }
}
module.exports=formatMessages;