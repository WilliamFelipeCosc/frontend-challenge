export async function postUser(data:any){
  console.log(JSON.stringify(data), data)
  const req = await fetch("https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
  const reqJson = await req.json()
  return reqJson
}

export async function getUser(id:any = ''){
  const req = await fetch(`https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user/${id}`);

  const reqJson = await req.json()
  return reqJson
}