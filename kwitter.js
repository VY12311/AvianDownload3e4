function addUser() {
    var user = document.getElementById("user_name").value;
    var pass = document.getElementById("Password").value;
    var check = localStorage.getItem("save");
    var save = "saved complete";
    if (save == check) {
        localStorage.setItem("Username",user);
        localStorage.setItem("Password",pass);
        window.location = "kwitter_room.html";
    } else {
        localStorage.setItem("Username",user);
        localStorage.setItem("Password",pass);
        localStorage.setItem("save","saved complete");
    }
}
 const express = require('express');
 const app = express()
 const port = process.env.PORT || '8080';

 app.get('/',(req, res) => {
     res.send('hello tabine');
 })
 app.listen(port, () => {
     console.log('Listening at port: ' + port);
 })