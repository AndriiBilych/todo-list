export interface IDeserialize<T> {
  deserialize(input: T): this;
}
