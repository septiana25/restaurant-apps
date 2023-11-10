Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('give a review into restaurant', async ({ I }) => {
  I.seeElement('.rest-item__content a');
  const firstRestaurant = locate('.rest-item__content a').first();
  I.click(firstRestaurant);

  const name = 'Input name automation test';
  const review = 'Input review automation test';

  I.seeElement('#name');
  I.fillField('input[id="name"]', name);
  I.seeElement('#comment');
  I.fillField('textarea[id="comment"]', review);
  I.seeElement('button[type="submit"]');
  I.click('button[type="submit"]');

  I.see(name, '.card .card__title');
  I.see(review, '.card .card__content');
});
