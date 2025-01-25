export type PaginatedData<T> = {
  items: T[];
  total: number;
  page: number;
};

export class ResponseError {
  constructor(public readonly message: string) {}
}
