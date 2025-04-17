import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
export default (emails) => {
  const domain__ = {};

  for (const email of emails) {

    const domain = email.split('@')[1]; // Получаем домен из email

    if (freeEmailDomains.includes(domain)) {
      const count = get(domain__, domain, 0) + 1;
      domain__[domain] = count;
    }
  }

  return domain__;
};
// END