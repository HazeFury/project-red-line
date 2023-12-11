const AbstractManager = require("./AbstractManager");

class BikeManager extends AbstractManager {
  constructor() {
    super({ table: "bikes" });
  }

  async getAllBikes() {
    const [rows] = await this.database
      .query(`SELECT bi.*, br.name as brand FROM ${this.table} as bi
    JOIN brand as br on br.id = bi.brand_id ORDER BY bi.id ASC;`);

    return rows;
  }
}

module.exports = BikeManager;
