document.addEventListener('DOMContentLoaded', ()=> {
    userSearchEnd(),
    userReposEnd()
})

function userSearchEnd(){
    let form = document.getElementById("github-form")
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let search = document.getElementById("search").value.split(' ').join('-')
        
        fetch('https://api.github.com/search/users?q=octocat'+search,{
        headers: {
            Accept: application/vnd.github.v3+json
        }
    }
        )
        .then(res => res.json())
        .then(data =>{
            console.log(data)

            document.getElementById('user-list').innerHTML = `
                <img src = "${data.avatar_url}">
            `
        })
    })
}



function userReposEnd(){
    fetch('https://api.github.com/users/octocat/repos')
}