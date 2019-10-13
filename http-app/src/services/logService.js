import * as Sentry from '@sentry/browser';

function init() {
  Sentry.init({
    dsn: 'https://b137dd3abeb2425db4d8cabe36ba868b@sentry.io/1778014'
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
