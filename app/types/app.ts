// for api
type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};
type ExploreData = ExploreItem[];

type LiveItem = {
  img: string;
  title: string;
};
type LiveData = LiveItem[];

type searchItem = {
  img: string;
  title: string;
  location: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
type searchData = searchItem[];

export type {
  ExploreItem,
  LiveItem,
  searchItem,
  ExploreData,
  LiveData,
  searchData,
};
