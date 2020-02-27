export const MessageType = {
  Info: 'Info',
  Success: 'Success',
  Error: 'Error',
  Warn: 'Warn',
}

export default class Message {
  static from(message, type) {
    return new Message(message, type);
  }

  static newError(message) {
    return Message.from(message, MessageType.Error);
  }

  static newSuccess(message) {
    return Message.from(message, MessageType.Success);
  }

  static newInfo(message){
    return Message.from(message, MessageType.Info);
  }

  constructor(message, type) {
    this.message = message;
    this.type = type;
  }

  hasType(aType) {
    return this.type === aType;
  }

  hasTypeError() {
    return this.hasType(MessageType.Error);
  }
}
