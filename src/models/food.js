'use strict';

class FoodModel {
  constructor() {
    this.id = 0;
    this.db = []; // this represents an "in-memory" db
  }

  create(obj) {
    // save new obj to db here
    let record = {
      id: ++this.id,
      record: obj
    }

    this.db.push(record);
    return record;
  }

  read(id) {
    // grab item from db given its id
    if(id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  update(id, obj) {
    // update an item in db with new item
    if(id) {
      const idx = this.db.indexOf(this.db.find(record => record.id === id));
      const updatedRecord = {
        "id": id,
        "record": obj
      }
      this.db.splice(idx, 1, updatedRecord);
      return this.db[idx];
    }
  }

  delete(id) {
    // find item in db and delete it
    if(id) {
      const idx = this.db.indexOf(this.db.find(record => record.id === id));
      this.db.splice(idx, 1);
      return null;
    }
  }
}

module.exports = FoodModel;