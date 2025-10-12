type User = {
  name: string;
  profile_image: {
    large: string;
  }
  total_likes: number;
}

type DataItemCard = {
  id: string;
  alt_description: string
  urls: {
    regular: string;
  }  
  user: User;
  isFavorite: boolean
}