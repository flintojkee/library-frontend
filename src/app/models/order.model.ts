export interface Order {
  expectedReturnDate: string;
  status?: OrderStatus;
  actualReturnDate?: string;
  userId?: number;
  bookInstanceId?: number;
  id?: number;
}

export enum OrderStatus {
  onReview = 'ON_REVIEW',
  canceledByUser = 'CANCELED_BY_USER',
  canceledByAdmin = 'CANCELED_BY_ADMIN',
  active = 'ACTIVE',
  returned = 'RETURNED'
}
