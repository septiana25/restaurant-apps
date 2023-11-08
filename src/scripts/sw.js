import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const restaurantApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-api',
  }),
);

const restaurantImageApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-image-api',
  }),
);

const restaurantReviewApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/review'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-review-api',
  }),
);

registerRoute(restaurantApi);
registerRoute(restaurantImageApi);
registerRoute(restaurantReviewApi);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});
