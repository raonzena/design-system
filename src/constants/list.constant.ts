import { Dummy, Dummy2 } from '@/interfaces/list';
interface response<T> {
  response: Array<T>;
}

export const dummy: response<Dummy> = {
  response: [
    {
      id: 1,
      seller: 'sellersellersellersellersellersellersellersellersellersellersellerseller',
      title:
        'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
      productPrice: 10000,
      discountPrice: 5000,
      rate: 4,
      reviewSummary: 'reviewSummary',
      imgUrl:
        'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg',
    },
    {
      id: 2,
      seller: 'sellersellersellersellersellerseller',
      title: 'titletitletitletitletitletitletitletitle',
      productPrice: 12000,
      discountPrice: 7000,
      rate: 3,
      reviewSummary: 'reviewSummary',
      imgUrl:
        'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg',
    },
    {
      id: 3,
      seller: 'sellersellersellersellersellerseller',
      title: 'titletitletitletitletitletitletitletitle',
      productPrice: 10000,
      discountPrice: 5000,
      rate: 2,
      reviewSummary: 'reviewSummary',
      imgUrl:
        'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg',
    },
    {
      id: 4,
      seller: 'sellersellersellersellersellerseller',
      title: 'titletitletitletitletitletitletitletitle',
      productPrice: 10000,
      discountPrice: 5000,
      rate: 1,
      reviewSummary: 'reviewSummary',
      imgUrl:
        'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg',
    },
    {
      id: 5,
      seller: 'sellersellersellersellersellerseller',
      title: 'titletitletitletitletitletitletitletitle',
      productPrice: 7000,
      discountPrice: 5000,
      rate: 5,
      reviewSummary: 'reviewSummary',
      imgUrl:
        'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg',
    },
  ],
};

export const dummy2: response<Dummy2> = {
  response: [
    {
      id: 1,
      title: 'title',
      rate: 4,
      reviewSummary:
        'reviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummaryreviewSummary',
      reviewerName: 'reviewer1',
      imgUrl: 'https://placekitten.com/g/300/450',
    },
    {
      id: 2,
      title: 'title',
      rate: 1,
      reviewSummary: 'reviewSummary',
      reviewerName: 'reviewer2',
      imgUrl: 'https://placekitten.com/g/300/450',
    },
    {
      id: 3,
      title: 'title',
      rate: 3,
      reviewSummary: 'reviewSummary',
      reviewerName: 'reviewer3',
      imgUrl: 'https://placekitten.com/g/300/450',
    },
    {
      id: 4,
      title: 'title',
      rate: 5,
      reviewSummary: 'reviewSummary',
      reviewerName: 'reviewer4',
      imgUrl: 'https://placekitten.com/g/300/450',
    },
    {
      id: 5,
      title: 'title',
      rate: 4,
      reviewSummary: 'reviewSummary',
      reviewerName: 'reviewer4',
      imgUrl: 'https://placekitten.com/g/300/450',
    },
  ],
};
