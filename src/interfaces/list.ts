export interface DataList {
  id: number;
  title: string;
  imgUrl: string;
  rate?: number;
  reviewSummary?: string;
}

export interface Dummy extends DataList {
  seller: string;
  productPrice?: number;
  discountPrice?: number;
  reviewerName?: string;
}

export interface Dummy2 extends DataList {
  reviewerName?: string;
}
