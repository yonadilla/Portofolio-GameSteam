import axios from "axios"
import cors from "cors"
export default function LanguageStats() {
  let data = JSON.stringify({
    query: `{
       matchedUser(username: "yonadilla") {
      languageProblemCount {
        languageName
        problemsSolved
      }
    }
  }`,
    variables: {}
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://leetcode.com/graphql',
    headers: { 
      'Content-Type': 'application/json', 
    },
    cors : {
      origin : "*"
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
  
  return <div></div>;
}
