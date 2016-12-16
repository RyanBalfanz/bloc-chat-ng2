interface MessageFieldsInterface {
  channelId?: string;
  createdAt?: number;
  content?: string;
}

export class Message {
  channelId: string = null;
  content: string = null;
  createdAt: number = null;

  constructor(fields?: MessageFieldsInterface) {
    if (fields) {
      this.channelId = fields.channelId || this.channelId;
      this.createdAt = fields.createdAt || this.createdAt;
      this.content = fields.content || this.content;
    }
  }
}
