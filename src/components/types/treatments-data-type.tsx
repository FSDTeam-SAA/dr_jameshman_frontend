export interface TreatmentResponse {
  status: boolean;
  message: string;
  data: TreatmentGroup[];
  pagination: Pagination;
}

export interface TreatmentGroup {
  _id: string;
  treatments: Treatment[];
  createdAt: string;
  __v: number;
}

export interface Treatment {
  serviceName: string;
  title: string;
  description: string;
  image: string;
  _id: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}
