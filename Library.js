/*By: Anthony Carrillo - AC GAMES - https://acgames-developer.itch.io
To: Guides of Node.js for my university. */
const prompt = require("prompt-sync")({sigint:true})
let option, nameBook, author, year, price, library = [];

//library = [ ["The Life", "Anthony Carrillo", 2022, 1.59] ] // A book

Menu();

function Menu(){
    console.log("\t\tLIBRARY");
    console.log(`
    Select an option:
    1 - Add a book
    2 - Search a book
    3 - Delete a book
    4 - Exit
    `);

    option = parseInt(prompt("> "));

    switch(option){
        case 1:
            console.log("\n\t\tAdd\n");
            nameBook = prompt("- Name of book: ");
            author = prompt("- Author: ");
            year = parseInt(prompt("- Year of edition: "));
            price = parseFloat(prompt("- Price: "));
            AddBook(nameBook, author, year, price);
            Menu();
        break;

        case 2:
            console.log("\n\t\tSearch\n");
            nameBook = prompt("- Write name of book: ");
            SearchBook(nameBook);
            Menu();
        break;

        case 3:
            console.log("\n\t\tDelete\n");
            nameBook = prompt("- Write name of book: ");
            DeleteBook(nameBook);
            Menu();
        break;

        case 4:
            console.log("\n");
        break;

        default:
            console.log("\nInvalid option!\n");
            Menu();
    }
}

function AddBook(_nmB, _ath, _year, _pre){
    let book = [_nmB, _ath, _year, _pre];
    library.push(book);

    console.log("\nBook added!\n");
}

function SearchBook(_nmB){
    let index;
    for(let i = 0; i < library.length; i++){
        if(library[i][0] == _nmB){
            index = i;
            break;
        }
    }
    if(index != null){
        console.table({
            "Name of book" : library[index][0],
            "Author" : library[index][1],
            "Year of edition" : library[index][2],
            "Price" : library[index][3]
        });
    }else{
        console.log("\nThis book not exist\n");
    }
}

function DeleteBook(_nmB){
    let isDelete;
    for(let i = 0; i < library.length; i++){
        if(library[i][0] == _nmB){
            library.splice(i,1);
            isDelete = true;
            break;
        }
    }
    if(isDelete){
        console.log("\nDeleted!\n");
    }else{
        console.log("\nThis book not exist\n");
    }
}