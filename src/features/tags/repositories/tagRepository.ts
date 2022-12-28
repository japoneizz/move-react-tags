import { ISerializedTag } from '@/features/tags/models/tag.model';
import client from '@/respositories/client';

export class TagRepository {
  async getAllTags() {
    const { data } = await client.get<ISerializedTag[]>('/tags');
    return data;
  }

  async createTag(newTag: ISerializedTag) {
    const { data } = await client.post<ISerializedTag>('/tags', newTag);
    return data;
  }

  async deleteTag(tagId: string) {
    const { data } = await client.delete<ISerializedTag[]>(`/tags/${tagId}`);
    return data;
  }

  async updateTag(tag: ISerializedTag) {
    const { data } = await client.put<ISerializedTag[]>(`/tags/${tag.id}`, tag);
    return data;
  }
}

const tagRepository = new TagRepository();

export default tagRepository;
