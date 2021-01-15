class Fiets
{
  constructor(
    type,
    nieuwPrijs,
    dagPrijs,
    borgPrijs,
    merk
  ) {
    this._type = type;
    this._nieuwPrijs = nieuwPrijs;
    this._dagPrijs = dagPrijs;
    this._borgPrijs = borgPrijs;
    this._merk = merk;
  }

  get type() {
    return this._type;
  }

  get nieuwPrijs() {
    return this._nieuwPrijs;
  }

  get dagPrijs() {
    return this._dagPrijs;
  }

  get borgPrijs() {
    return this._borgPrijs;
  }

  get merk() {
    return this._merk;
  }
}

module.exports = Fiets;