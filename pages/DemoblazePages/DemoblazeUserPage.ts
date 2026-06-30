import {Page,Locator} from '@playwright/test';

export class UserPage{
    readonly page:Page;
    readonly laptoplink:Locator;
    readonly maclap:Locator;
    readonly lapTitle:Locator;

    constructor(page:Page){
        this.page=page;
       this.laptoplink = page.locator("//a[text()='Laptops']");
        this.maclap=page.locator("//a[normalize-space()='MacBook Pro']");
        this.lapTitle=page.locator("//h2[@class='name']")
    }

    async productAction(){
        await this.laptoplink.click();
        await this.maclap.click();
    }

    async getLapTitle(){
        return this.lapTitle.textContent();
    }
}