import * as fs from "fs";
import Book from "./entities/book";
import Word from "./entities/word";

const content = fs.readFileSync("./books/dracula.txt");
const book = new Book(content.toString());

console.log("Lines: " + book.numberOfLines());
console.log("Words: " + book.numerOfWords());

book.topWords(10).forEach((word: Word, index) => {
  console.log("Top " + (index + 1) + " " + word.word + " " + word.frequency);
});

book.longestWords(10).forEach((word: Word, index) => {
  console.log(
    "Longest " + (index + 1) + " " + word.word + " " + word.frequency
  );
});
