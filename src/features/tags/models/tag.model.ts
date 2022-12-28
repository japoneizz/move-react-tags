import { v4 as uuidv4 } from 'uuid';

export interface ISerializedTag {
  id?: string;
  label: string;
  editing: boolean;
}

export class Tag {
  static serialize = (tag: Tag): ISerializedTag => {
    return {
      id: tag.getIdentifier(),
      label: tag.getLabel(),
      editing: tag.getEditing(),
    };
  };

  static deserialize = (serializedTag: ISerializedTag): Tag => {
    return new Tag(serializedTag.label, serializedTag.editing, serializedTag.id);
  };

  private readonly id: string;
  private label: string;
  private editing: boolean;

  constructor(tagLabel: string, editing?: boolean, id?: string) {
    this.id = id || uuidv4();
    this.label = tagLabel;
    this.editing = editing || false;
  }

  getIdentifier() {
    return this.id;
  }

  getLabel() {
    return this.label;
  }

  getEditing() {
    return this.editing;
  }

  toggleEditing() {
    this.editing = !this.editing;
  }
}
