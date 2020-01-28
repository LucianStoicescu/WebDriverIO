const assert = require('assert')
describe('The Grommet main page', ()=>{
  it('Should Have a Title',()=> {
   browser.url('https://dev.thegrommet.com')
   const title = browser.getTitle()
   assert(true,title.includes('The Grommet'))
 });
  it('Should go to a product page', ()=> {
    const disc = $('//div[@class="tile-container-3 tile-container-2-mobile"]/a[1]')
    disc.click()
    browser.pause(15000)
  });
})
