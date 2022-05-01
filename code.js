if(JSON.parse(localStorage.getItem('pname'))==null){
fetch(`https://pokeapi.co/api/v2/pokemon/`).then((response) => {
/* console.log(response.status) */
  return response.json();
})
  .then((result) => {
    // console.log(result)
    localStorage.setItem('pname',JSON.stringify(result))
    
    
  }).catch((err)=>{
      console.log(err)
})
}
else{
var result=JSON.parse(localStorage.getItem('pname'))

for(var i=0;i<20;i++){
    document.getElementById('data').innerHTML+=
    result['results'][i].name +'<br>';
    
}
}
