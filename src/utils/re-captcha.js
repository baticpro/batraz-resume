import { RECAPTCHA_KEY } from '../config';

export const loadRecaptcha = () => {
  const ref = document.getElementsByTagName('script')[0];
  const script = document.createElement('script');
  script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`;

  ref.parentNode.insertBefore(script, ref);
};

export const executeRecaptcha = async () => {
  // eslint-disable-next-line no-undef
  return grecaptcha.execute(RECAPTCHA_KEY, { action: 'homepage' });
};
