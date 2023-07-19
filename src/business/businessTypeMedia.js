import DataTypeMedia from "../data/dataTypeMedia.js";

class BusinessTypeMedia {
  constructor() {
    this.dataTypeMedia = new DataTypeMedia();
  }

  async listType() {
    return await this.dataTypeMedia.listType();
  }
}

export default BusinessTypeMedia;