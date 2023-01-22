export const cartItems: Cart[] = [
  {
    id: 'asdf123',
    title: 'one',
    price: 40,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufR0GlCYbDmmOvc56tTZo30GjTfUtMYy4DR51jwTolBTW1GmVCK1F_EQGZg3SbXBNmQo&usqp=CAU',
    amount: 1,
  },
  {
    id: 'asdf124',
    title: 'two',
    price: 30,
    img: 'https://food.fnr.sndimg.com/content/dam/images/food/products/2019/11/7/rx_chef-antonio-extraordinary-garlic-dipping-sauce.jpeg.rend.hgtvcom.616.616.suffix/1573147731302.jpeg',
    amount: 2,
  },
  {
    id: 'asdf125',
    title: 'three',
    price: 40,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1fm7OzPjuo6y4dPmN1YVZNb8MURaOdqRDDyqeEiSWmhdteEBvygEYJwlhK_O-VPAoZc&usqp=CAU',
    amount: 1,
  },
  {
    id: 'asdf126',
    title: 'four',
    price: 40,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OlNM-c2MhdToktt_F9YuPnZ8Pn5Tsm5i2QS7sB-eQuCH5GRgPn6VfsS17qMGijmMweI&usqp=CAU',
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
