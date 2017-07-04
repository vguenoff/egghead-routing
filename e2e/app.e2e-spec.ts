import { EggheadRoutingPage } from './app.po';

describe('egghead-routing App', () => {
  let page: EggheadRoutingPage;

  beforeEach(() => {
    page = new EggheadRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
