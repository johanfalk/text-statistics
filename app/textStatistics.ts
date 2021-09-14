import Word from "./entities/word";

interface TextStatistics {
  topWords(n: number): Word[];
  longestWords(n: number): Word[];
  numerOfWords(): number;
  numberOfLines(): number;
}

export default TextStatistics;
