

const searchForm  =  document.querySelector("#searchForm");
searchForm.addEventListener("submit", search);

async function search(e) {
    e.preventDefault();
    const query = this.elements.query.value;
    const config = { params : {
        q: query
    }}
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);   
    this.elements.query.value = "";
}

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
            const imageURL = result.show.image.medium;
            const img = document.createElement("IMG");
            img.src = imageURL;
            document.body.append(img);
        }
    }
}

