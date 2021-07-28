  async function fetchData() {
    let movie = document.getElementById("movieInput").value;
    console.log("movie:", movie);
    try {
      let responce = await fetch(
        `http://www.omdbapi.com/?t=${movie}&apikey=426f00db`
      );
        let data = await responce.json();
        console.log('data:', data.Response)
        

        if (data.Response == "False") {
            notFound();
        } else {
            createAllData(data);
        }
    } catch (err) {
        console.log('err:', err)
        
    }
}

 let movieDiv = document.getElementById("movieDiv");
function createAllData(data) {
    movieDiv.innerHTML = null;
    let indDiv = document.createElement("div");
    let image = document.createElement("img");
    // console.log()
    image.src = data.Poster;
    let p_detail = document.createElement("p");
    p_detail.innerHTML = ` Title: ${data.Title} <br>Release Date: ${data.Released} <br>Ratings: ${data.imdbRating} <br>Actors: ${data.Actors}`

    if (data.imdbRating > 8.5) {
        let p_rec = document.createElement("p");
        p_rec.setAttribute("id","rec")
        p_rec.innerHTML = "Recommended"
        indDiv.append(image, p_detail, p_rec);
    } else {
        indDiv.append(image, p_detail);
    }
    movieDiv.append(indDiv);
}

function notFound() {
    movieDiv.innerHTML = null;
    let image = document.createElement("img");
    image.src = "https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif";
    movieDiv.append(image);
}


  
// <!-- http://www.omdbapi.com/?i=tt3896198&apikey=426f00db -->

// <!-- If a movie is found, show the movie poster, release date, title, ratings and all the important info. -->
// <!-- http://www.omdbapi.com/?t=Game of Thrones&Season=1 -->
// Game of Thrones&Season=1