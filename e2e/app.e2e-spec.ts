import { Session5Assignment3Page } from './app.po';

describe('session5-assignment3 App', () => {
  let page: Session5Assignment3Page;

  beforeEach(() => {
    page = new Session5Assignment3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
