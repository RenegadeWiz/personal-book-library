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
const hamburger = document.querySelector('.hamburger')
const overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
})



/*CODE FOR OPENING AND CLOSING THE POP UP*/
function openPopUp(){
    overlay.classList.add('active');
}
function closePopUp(){
    overlay.classList.remove('active');
    bookTitleInput.value = '';
    authorInput.value = '';
    bookDescriptionInput.value = '';
    addBookButton.textContent = 'Add book'
}
addPopUpButton.addEventListener('click', openPopUp)

exitButton.addEventListener('click', closePopUp)


/* MAIN CODE TO GET VALUE, STORE AND DISPLAY*/

let booksArray = []
let indexValue;

function updateDisplay(){
    booksContainer.innerHTML = '';
    for(let i = 0; i < booksArray.length; i++){
        const article = document.createElement('article')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const pElement = document.createElement('p')

        article.setAttribute('data-index-number', i)
        article.classList.add('book-detail');
        
        booksContainer.appendChild(article);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(pElement);

        h3.textContent = booksArray[i].title;
        h4.textContent = booksArray[i].author;
        pElement.textContent = booksArray[i].description;

        article.addEventListener('click', function(){
            indexValue = article.dataset.indexNumber

            openPopUp()
            addBookButton.textContent = 'Edit'
            const h3Content = h3.textContent;
            const h4Content = h4.textContent;
            const pContent = pElement.textContent;

            bookTitleInput.value = h3Content;
            authorInput.value = h4Content;
            bookDescriptionInput.value = pContent
        })

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


function getBookValues(){}

function addBook(){

    if(addBookButton.textContent === 'Edit'){
        const titleValue = bookTitleInput.value;
        const authorValue = authorInput.value;
        const descriptionValue = bookDescriptionInput.value;

        const bookObject = {title: titleValue, author: authorValue, description: descriptionValue}
        console.log(indexValue)

        booksArray.splice(indexValue, 1, bookObject)

        closePopUp();
        updateDisplay()
        return
    }

    const titleValue = bookTitleInput.value;
    const authorValue = authorInput.value;
    const descriptionValue = bookDescriptionInput.value;

    const bookObject = {title: titleValue, author: authorValue, description: descriptionValue}

    booksArray.push(bookObject)
    closePopUp();
    updateDisplay()

    
}

addBookButton.addEventListener('click', addBook)


bookDescriptionInput.addEventListener('input', function(){

    const words = bookDescriptionInput.value.length;
    
    charCount.textContent = words + "/500"
})


