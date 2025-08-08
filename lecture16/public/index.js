// function getCommentData(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
// }
// getCommentData();
async function getCommentData(){
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
        console.log(res.data);
    }
    catch(err){
        console.log(error.message);
    }
}
getCommentData();

function adduser(email,password){
    axios.post('/user', {
        email:email,
        password:password
  })
  .then((response)=> {
    console.log(response.data);
  })
  .catch((error)=> {
    console.log(err.message);
  });
}
adduser("abc@gmail.com",1234)