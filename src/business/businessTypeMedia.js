import DataTypeMedia from "../data/dataTypeMedia.js";

class BusinessTypeMedia {
  constructor() {
    this.dataTypeMedia = new DataTypeMedia();
  }

  async listType() {
    return await this.dataTypeMedia.listType();
  }

  async registerType() {
    return await this.dataTypeMedia.registerType();
  }
}

export default BusinessTypeMedia;