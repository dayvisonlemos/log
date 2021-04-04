import log from '../index';

describe('Log', () => {
  it('Log format structure for info level', () => {
    const MESSAGE = 'this is a simple INFO message';
    log.info(MESSAGE);
  });
  it('Log format structure for error level', () => {
    const MESSAGE = 'this is a simple ERROR message';
    log.error(MESSAGE);
  });
});
