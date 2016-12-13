interface ChannelFieldsInterface {
  createdAt?: number;
  name?: string;
}

export class Channel {
  createdAt: number = null;
  name: string = '';

  constructor(fields?: ChannelFieldsInterface) {
    if (fields) {
      this.createdAt = fields.createdAt || this.createdAt;
      this.name = fields.name || this.name;
    }
  }
}
