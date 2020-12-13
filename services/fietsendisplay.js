const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

/**
 * Logic for reading and writing feedback data
 */
class Fietsendisplay {
  /**
   * Constructor
   * @param {*} datafile Path to a JSOn file that contains the feedback data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  /**
   * Get all feedback items
   */
  async getList() {
    const data = await this.getData();
    return data;
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) return [];
    return JSON.parse(data);
  }
}

module.exports = Fietsendisplay;
