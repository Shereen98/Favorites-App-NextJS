export interface ProductInterface {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    isLiked?: boolean;
    numberOfLikes: number;
    numberOfComments: number;
    comments: string[];
  };
}
