import Word from "./entities/word";

interface TextStatisticsInterface {
  topWords(n: number): Word[];
  longestWords(n: number): Word[];
  numerOfWords(): number;
  numberOfLines(): number;
}

export default TextStatisticsInterface;
