export type FetchStatus = 'initial' | 'loading' | 'success' | 'error';

export type FunResponse = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
};
