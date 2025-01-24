import { IPaginatedResponse } from '../../common/interfaces/pagination';
import { PartialContactResponse } from './contact';

export class PaginatedContactResponse
  implements IPaginatedResponse<PartialContactResponse>
{
  items: PartialContactResponse[];
  total: number;
  page: number;
}
