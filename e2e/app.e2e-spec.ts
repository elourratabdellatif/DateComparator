import { MyApplicationDatePage } from './app.po';

describe('my-application-date App', () => {
  let page: MyApplicationDatePage;

  beforeEach(() => {
    page = new MyApplicationDatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
