let singleContainer = document.querySelector('#single-page'); 
singleContainer.innerHTML = "";
const singlePage = () => {
    const urlID = window.location.search;
    fetch(`https://jsonplaceholder.typicode.com/posts/${urlID}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            singleContainer.innerHTML += `<div class="col-md-8">
            <div class="col-md-4">
                           
                              <div class="card">
                                   <div class="card-body">
                                   <p class="text-end search-id">${element.id}</p>
                                      <h5 class="post-title mb-4">
                                          lorem, ipsum dolor
                                      </h5> 
                                      <p class="post-body">${element.body}</p>
                                 </div>
                             </div>
                        
                    </div> `
        });
    })
}
singlePage()