const axios = require("axios");
import {data} from "./userText.controller"
import * as dotenv from "dotenv";
dotenv.config();
const apiToken = process.env.one_api_token;


let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://api.one-api.ir/translate/v1/google/",
  headers: {
    "one-api-token": `${apiToken}`,
    "Content-Type": "application/json",
  },
  data:data("en" , "fa" , "hello"),
};

axios
  .request(config)
  .then((response: any) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error: Error) => {
    console.log(error);
  });

module.exports = { axios };
