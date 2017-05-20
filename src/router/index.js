import goods from 'src/components/goods/goods.vue';
import ratings from 'src/components/ratings/ratings.vue';
import seller from 'src/components/seller/seller.vue';

export const routes = [
  {path: '', redirect: '/goods'},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

