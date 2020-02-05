import $ from 'jquery';

export const registration = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<h2>Regirtation form</h2>');

  return Promise.resolve(fragment);
};