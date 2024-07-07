import chalk from "chalk";

class Book {
    title: string;
    author: string;
    static bookCount: number = 0;

    constructor(title: string, author: string){
        this.title = title;
        this.author = author;
        Book.bookCount++;
    }

    displayDetail(){
        console.log(chalk.blueBright(`Title: ${this.title} Author: ${this.author}`));
    }
    static displayBookCount(){
        console.log(chalk.yellow(`Total number of Book: ${Book.bookCount}`));
        
    }
}
// Subclass EBook extending Book with additional fileSize property
class EBook extends Book{
    filesize: number;

    constructor(title: string, author: string, filesize: number){
        super(title, author);
        this.filesize = filesize;
    }
    displayDetail(): void {
        console.log(chalk.green(`Title: ${this.title}, Author: ${this.author}, File Size: ${this.filesize}MB`));
        
    }
}
// creating an instance of the Book and EBook Classes 

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const anotherBook = new Book("To Kill a Mockingbird", "Harper Lee");
const myEBook = new EBook("1984", "George Orwell", 2)

// Displaying detail of Books

myBook.displayDetail();
anotherBook.displayDetail();
myEBook.displayDetail();

// displaying the total number of Book created
Book.displayBookCount();


