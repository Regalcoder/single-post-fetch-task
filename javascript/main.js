let postForm = document.getElementById('post-form')
let postTitle = document.querySelector('#post-title')
let postBody = document.querySelector('#post-body');

postForm.addEventListener('submit', createPosts)

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data)=> {
     console.log(data)
       let postLayout = document.getElementById('post-layout')
       let html = "";
       data.forEach(element => {
           //console.log(element)
           html += `
           <a class="text-decoration-none text-dark" href= "singledisplay.html?id=${element.id}">
           <div class="col-md-4 mb-5">
           <div class="card h-100">
                <div class="card-body">
                <h6 class="d-flex justify-content-start">${element.id}</h6>
                   <h5 class="post-title mb-4">
                       ${element.title}
                   </h5> 
                   <p class="post-body">${element.body}</p>
                </div>
           </div>
       </div>
       </a>
       `
       postLayout.innerHTML = html
       });
    })
}

getPosts();

function createPosts(element) {
    element.preventDefault();
    let ptitle = postTitle.value;
    let pBody = postBody.value;
    console.log('post  title', ptitle)
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: ptitle,
            body: pBody,
            userId: 5

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('post', data)
        alert('post created successfully')
    })
} 

