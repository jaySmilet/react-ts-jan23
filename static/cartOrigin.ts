export const cartItems: Cart[] = [
  {
    id: 'asdf123',
    title: 'one',
    price: 40,
    img: '',
    amount: 1,
  },
  {
    id: 'asdf124',
    title: 'two',
    price: 30,
    img: '',
    amount: 2,
  },
  {
    id: 'asdf125',
    title: 'three',
    price: 40,
    img: '',
    amount: 1,
  },
  {
    id: 'asdf126',
    title: 'four',
    price: 40,
    img: '',
    amount: 1,
  },
];

export interface Cart {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
}
