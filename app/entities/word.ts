class Word {
  private _word: string;
  private _length: number;
  private _frequency = 0;

  constructor(word: string) {
    this._word = word;
    this._length = word.length;
  }

  get word(): string {
    return this._word;
  }

  get frequency(): number {
    return this._frequency;
  }

  set frequency(frequency: number) {
    this._frequency = frequency;
  }

  get length(): number {
    return this._length;
  }
}

export default Word;
