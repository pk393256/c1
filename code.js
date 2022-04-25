fetch(`https://pokeapi.co/api/v2/pokemon/`).then((response) => {
/* console.log(response.status) */
  response.json().then((result) => {
    console.log(result)
    return result
    
    
  })
})