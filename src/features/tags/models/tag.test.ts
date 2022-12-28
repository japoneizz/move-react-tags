import { Tag } from './tag.model';

describe('tests the Tag class', () => {
  it('should keep the id when calling serialize and deserialize in sequence', () => {
    const tag = new Tag('my tag');
    const serializedTag = Tag.serialize(tag);
    const deserializedTag = Tag.deserialize(serializedTag);

    expect(deserializedTag.getLabel()).toBe(tag.getLabel());
    expect(deserializedTag.getIdentifier()).toBe(tag.getIdentifier());
  });
});
