const addPopUpButton = document.querySelector('.add-pop-up-btn')
const addPopUp = document.querySelector('.add-pop-up')
const exitButton = document.querySelector('.exit-btn')
const bookCover = document.querySelector('.book-cover')
const booksContainer = document.querySelector('.books-container')
const addBookButton = document.querySelector('.add-book-btn')
const bookTitleInput = document.querySelector('#book-title-input')
const authorInput = document.querySelector('#author-input')
const bookDescriptionInput = document.querySelector('.book-description-input')
const charCount = document.querySelector('.char-count')



/*CODE FOR OPENING AND CLOSING THE POP UP*/

addPopUpButton.addEventListener('click', function(){

    addPopUp.classList.add('active');
    console.log('active')
    /*addPopUp.style.transform = 'translate(-50%, -50%) scale(1)'*/
})

exitButton.addEventListener('click', function(){
    addPopUp.classList.remove('active');
})


/* MAIN CODE TO GET VALUE, STORE AND DISPLAY*/

let booksArray = []

function updateDisplay(){
    booksContainer.innerHTML = '';
    for(let i = 0; i < booksArray.length; i++){
        const article = document.createElement('article')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const pElement = document.createElement('p')

        article.classList.add('book-detail');
        
        booksContainer.appendChild(article);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(pElement);

        h3.textContent = booksArray[i].title;
        h4.textContent = booksArray[i].author;
        pElement.textContent = booksArray[i].description

    /*ALTERNATIVE METHOD*/

        /*
        let output = `
        <article class= 'book-detail'>
            <h3>${booksArray[i].title}</h3>
            <h4>${booksArray[i].author}</h4>
            <p>${booksArray[i].description}</p>
        </article>
        `
        booksContainer.innerHTML += output*/
    }
}

function addBook(){

    
    addPopUp.style.transform = 'translate(-50%, -50%) scale(0)'
    const titleValue = bookTitleInput.value;
    const authorValue = authorInput.value;
    const descriptionValue = bookDescriptionInput.value;

    const bookObject = {title: titleValue, author: authorValue, description: descriptionValue}

    booksArray.push(bookObject)
    console.log(booksArray)
    updateDisplay()

    bookTitleInput.value = '';
    authorInput.value = '';
    bookDescriptionInput.value = '';
}

addBookButton.addEventListener('click', addBook)


bookDescriptionInput.addEventListener('input', function(e){

    const words = bookDescriptionInput.value.length;
    
    charCount.textContent = words + "/400"
})