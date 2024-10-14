function createAuthor(name, bio, birthDate, nationality) {
    const author = {
        author_id: generateUUID(), 
        name,
        bio,
        birth_date: birthDate,
        nationality,
    };
    authors.push(author);
    return author;
}

function createBook(title, publicationDate, genre, authorId) {
    const book = {
        book_id: generateUUID(),
        title,
        publication_date: publicationDate,
        genre,
        author_id: authorId,
    };
    books.push(book);
    return book;
}

function getBooksWithAuthors() {
    return books.map(book => {
        const author = authors.find(author => author.author_id === book.author_id);
        return {
            ...book,
            author: author ? { 
                author_id: author.author_id,
                name: author.name,
                bio: author.bio,
                birth_date: author.birth_date,
                nationality: author.nationality 
            } : null,
        };
    });
}
async function createAuthor(name, bio, birthDate, nationality) {
    const author = new Author({
        name,
        bio,
        birthDate,
        nationality,
    });
    await author.save();
    return author;
}

async function createBook(title, publicationDate, genre, authorId) {
    const book = new Book({
        title,
        publicationDate,
        genre,
        author: authorId,
    });
    await book.save();
    return book;
}
async function getBooksWithAuthors() {
    const books = await Book.find().populate('author');
    return books;
}



