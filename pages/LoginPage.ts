import {Page,Locator} from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginButton: Locator;
    readonly loginTittle:Locator;
    readonly errormsg:Locator;

    constructor(page:Page){
        this.page=page;
        this.username=page.locator('input[name="username"]');
        this.password=page.locator('input[name="password"]');
        this.loginButton=page.locator('button:has-text("login")');
        this.loginTittle=page.locator('h5');
        this.errormsg=page.locator(".oxd-alert-content-text");
    }

    async navigate(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
        {
            waitUntil:'domcontentloaded'
        });
    }

    async getLoginTitle(){
        return await this.loginTittle.textContent();
    }

    async login(username:string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(){
        return await this.errormsg.textContent();
    }

}

