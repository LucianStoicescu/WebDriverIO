const assert = require('assert')
describe('The Grommet main page', ()=>{

  it('Should Have a Title',()=> {
   browser.url('https://dev.thegrommet.com')
   browser.maximizeWindow()
   const title = browser.getTitle()
   assert(title.includes('The Grommet'),"Actual title displayed was: "+title)
 });
  it('Should go to a product page', ()=> {
    const disc = $('//div[@class="tile-container-3 tile-container-2-mobile"]/a[2]')
    disc.click()
  });
  it('Should select a product', ()=> {
    const prod = $('//div[@class="tile-container-3 tile-spacing-4 tile-container-2-tablet tile-spacing-2-mobile "]/a[2]')
    prod.click()
  });
  it('Should increment the product amount to 3 and add to cart', ()=> {
    const amount = $("//select/option[text()='3']")
    amount.click()
    const btn = $('//*[@id="cart_button_state"]/button')
    btn.click()
    browser.pause(10000)
  });
  it('Should display 4 items in the mini-cart', ()=> {
    assert($('//div[@class="flex-row flex-justify-center"]').getText().includes("4 items in your cart"),"Was actually: "+$('//div[@class="flex-row flex-justify-center"]').getText())
  });

})
