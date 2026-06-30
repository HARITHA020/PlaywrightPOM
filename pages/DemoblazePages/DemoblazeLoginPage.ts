import {Page,Locator,expect} from '@playwright/test';

export class DemoLoginPage{
    readonly page:Page;
    readonly loginLink:Locator;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbtn:Locator;
    readonly logoutbtn:Locator;
    readonly loggeduser:Locator;

    constructor(page:Page){
        this.page=page;
        this.loginLink=page.locator("//a[@id='login2']");
        this.username=page.locator("//input[@id='loginusername']");
        this.password=page.locator("//input[@id='loginpassword']");
        this.loginbtn=page.locator("//button[text()='Log in']");
        this.logoutbtn=page.locator("//a[@id='logout2']");
        this.loggeduser=page.locator("//a[@id='nameofuser']");
    }

    async loginAction(username: string, password: string) {
    await this.loginLink.click();
    await expect(this.username).toBeVisible();

    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbtn.click();
}

    async getloggeduserName(){
        return this.loggeduser.textContent();
    }
    async navigation(){
        return this.page.goto(process.env.BASE_URL!,
            {
                waitUntil:'domcontentloaded'
            }
        );
    }

}
