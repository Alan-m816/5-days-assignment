let password = "welcome"
if (password. length ===8){
    console. log("pasword is valid");
}
else if (password. length < 8){
    console .log("too short");
}
else if (password.length > 8){
    console.log("too long")
}
else{
    console. log("please provide a password")
}