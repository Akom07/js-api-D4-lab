const imgName = document.querySelector("#imgName")
const imgUrl = document.querySelector("#imgUrl")
const btn = document.querySelector("#btn")
const continer = document.querySelector('.continer')
// let url = "https://64ec45a2f9b2b70f2bfa0612.mockapi.io/logIn"
let url = "https://665736c59f970b3b36c866df.mockapi.io/imgs"

async function info (){
    const res = await fetch(url,{
        method: 'POST',
        body: JSON.stringify({
        imgName : imgName.value,
        imgUrl : imgUrl.value
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    })
    const data = await res.json()
    const col = document.createElement('div')
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    h1.innerText = data.imgName
    img.src = data.imgUrl
    const btnD = document.createElement('button')
    btnD.innerText = "delete"
    continer.append(col)
    col.classList.add("col-sm-6","col-md-3","text-center","border")
    col.append(h1,img,btnD)
    btnD.value = e.id
    btnD.classList.add("delete")
    
}



async function getInfo(){
const res = await fetch(url)
const data = await res.json()
console.log(data);
data.forEach(e => {
    const col = document.createElement('div')
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    h1.innerText = e.imgName
    img.src = e.imgUrl
    const btnD = document.createElement('button')
    btnD.innerText = "delete"

    continer.append(col)
    col.classList.add("col-sm-6","col-md-3","text-center","border")
    col.append(h1,img ,btnD )
    btnD.classList.add("delete", "btn" ,"btn-danger")
    btnD.value = e.id
    btnD.addEventListener("click",async ()=>{
            console.log("inside");
            let res = await fetch(`https://665736c59f970b3b36c866df.mockapi.io/imgs/${e.id}`, {
                method: 'DELETE'
            })
            let data = await res.json()
            console.log(data)
            }

        )

    
    // async function deleteInfo(){
    //     console.log("inside");
    //     let res = await fetch(url, {
    //         method: 'DELETE'
    //       })
    //     let data = await res.json()
    //     console.log(data)
    //     }
    
    
});
}
getInfo()

async function deleteInfo(){
console.log("inside");
let res = await fetch(url, {
    method: 'DELETE'
  })
let data = await res.json()
console.log(data)
}

