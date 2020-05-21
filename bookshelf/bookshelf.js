axios.get('https://www.googleapis.com/books/v1/users/114132469856672898823/bookshelves/0/volumes?key=AIzaSyD0ci_97v6tX-3_B0szt1gKLt0V6IHjyT0')
    .then(response => {
        shelf = response.data.items;
        for (i = 0; i < shelf.length; i++) {
            image = shelf[i].volumeInfo.imageLinks.smallThumbnail
            // create a new element
            let item = document.createElement("li")
            // create image
            let cover = new Image(128, 192);
            // add image source
            cover.src = image;
            // add image to new element
            item.appendChild(cover)
            let list = document.getElementById("books")
            list.insertBefore(item, list.childNodes[0])
        }
    })
    .catch(error => console.error(error));
