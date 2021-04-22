export interface DeserializeInterface<T> {
  deserialize(input: T): this;
}
