
let row = document.querySelector(".row")
let fetchData =async()=>{
   
    let data = await fetch("https://api.github.com/users");
    let json = await data.json()
    console.log(json)

    showData(json)

}
fetchData()
 row.innerHTML ="";
let showData=(details)=>{
    details.forEach((item)=>{
        
        console.log(item)
        let cardDetails = addCards(item.avatar_url,item.login, item.user_view_type);
        row.innerHTML += cardDetails;
    })
}


let addCards=( img, title ,text)=>{
    return `
        <div class="col col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                    <img class="card-img-top" src="${img}" alt="">
                    <div class="card-body">
                        <h2 class="card-title">${title}</h2>
                        <p class="card-text">${text}</p>
                    </div>
                </div>
            </div>
    
    `
}