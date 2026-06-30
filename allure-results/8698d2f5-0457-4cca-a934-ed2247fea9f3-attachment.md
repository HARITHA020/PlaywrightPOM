# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlazeTest\Product.test.ts >> product viewing >> product test
- Location: tests\DemoBlazeTest\Product.test.ts:8:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//h2[@class=\'name\']')
Expected: "MacBook Pro"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//h2[@class=\'name\']')
    - waiting for" https://www.demoblaze.com/" navigation to finish...
    - navigated to "https://www.demoblaze.com/"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('//a[normalize-space()=\'MacBook Pro\']')

```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test';
  2  | 
  3  | export class UserPage{
  4  |     readonly page:Page;
  5  |     readonly laptoplink:Locator;
  6  |     readonly maclap:Locator;
  7  |     readonly lapTitle:Locator;
  8  | 
  9  |     constructor(page:Page){
  10 |         this.page=page;
  11 |         this.laptoplink=page.locator("//div[@class='col-lg-3']//a[1]");
  12 |         this.maclap=page.locator("//a[normalize-space()='MacBook Pro']");
  13 |         this.lapTitle=page.locator("//h2[@class='name']")
  14 |     }
  15 | 
  16 |     async productAction(){
  17 |         await this.laptoplink.click();
> 18 |         await this.maclap.click();
     |                           ^ Error: locator.click: Test ended.
  19 |     }
  20 | 
  21 |     async getLapTitle(){
  22 |         return this.lapTitle.textContent();
  23 |     }
  24 | }
```