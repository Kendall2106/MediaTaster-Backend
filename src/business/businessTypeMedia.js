import DataTypeMedia from "../data/dataTypeMedia.js";

class BusinessTypeMedia {
  constructor() {
    this.dataTypeMedia = new DataTypeMedia();
  }

  async listType() {
    return await this.dataTypeMedia.listType();
  }

  async registerType(name) {
    return await this.dataTypeMedia.registerType(name);
  }
}

export default BusinessTypeMedia;