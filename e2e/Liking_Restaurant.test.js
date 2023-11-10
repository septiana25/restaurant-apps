const assert = require('assert');

Feature('Liking Restaurants');

Scenario('showing empty liked movies', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
  I.seeElement('.not-found');
});

Scenario('like one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.rest-item__content a');
  const firstRestaurant = locate('.rest-item__content a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.rest-item__content a');
  const likeRestaurant = locate('.rest-item__content a').first();
  const likeRestaurantName = await I.grabTextFrom(likeRestaurant);
  assert.strictEqual(firstRestaurantName, likeRestaurantName);
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.rest-item__content a');
  const firstRestaurant = locate('.rest-item__content a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.rest-item__content a');
  const likedRestaurant = locate('.rest-item__content a').first();
  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.not-found');
});
