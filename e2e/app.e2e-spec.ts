import { BlocChatNg2Page } from './app.po';

describe('bloc-chat-ng2 App', function() {
  let page: BlocChatNg2Page;

  beforeEach(() => {
    page = new BlocChatNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
