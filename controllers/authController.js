const axios = require('axios');
const qs = require("querystring");

exports.getToken = (req,res) =>{
    const username = req.body.username
    const password = req.body.password

    let body = {
        client_id : "alert-covid-react",
        grant_type : "password",
        scope : "openid",
        username : username,
        password : password
    }

    axios.post("https://iam.cloud-iam.com/auth/realms/alert-covid/protocol/openid-connect/token",qs.stringify(body))
    .then(resLogin =>{
        res.status(201).json({"message":"Success", "data" : resLogin.data.access_token})
    })
    .catch(err =>{
        console.log(err.response.data.error_description)
        res.status(err.response.status).json({"message":"Error", "data" : err.response.data.error_description})
    })

    
    

}