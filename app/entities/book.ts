import TextStatisticsInterface from "../textStatisticsInterface";
import Word from "./word";

class Book implements TextStatisticsInterface {
  private content: string;
  private stringWords: string[] = [];
  private words: Word[] = [];

  constructor(content: string) {
    this.content = content;
  }

  private processWords(): void {
    if (this.words.length > 0) {
      return;
    }

    this.stringWords = this.content
      .replace(/[^a-zA-Z ]/g, " ") // Replace special characters with space.
      .replace("\r\n|\r|\n", "") // Remove linebreaks.
      .split(" ");

    const map = new Map();
    let word: Word;

    for (let index = 0; index < this.stringWords.length; index++) {
      if (this.stringWords[index] == "") {
        continue;
      }

      word = map.get(this.stringWords[index]);

      if (!word) {
        word = new Word(this.stringWords[index]);
        map.set(word.word, word);
      }

      word.frequency++;
    }

    map.forEach((word: Word) => this.words.push(word));
  }

  public topWords(n: number): Word[] {
    this.processWords();
    this.words.sort((a, b) => b.frequency - a.frequency);
    return this.words.slice(0, n);
  }

  public longestWords(n: number): Word[] {
    this.processWords();
    this.words.sort((a, b) => b.length - a.length);
    return this.words.slice(0, n);
  }

  public numerOfWords(): number {
    this.processWords();
    return this.stringWords.length;
  }

  public numberOfLines(): number {
    return this.content.split(/\r\n|\r|\n/).length;
  }
}

export default Book;
