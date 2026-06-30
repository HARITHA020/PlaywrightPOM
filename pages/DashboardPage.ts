import {Page,Locator} from "@playwright/test";

export class DashboardPage{
    readonly page:Page;
    readonly dashboardTitle:Locator;
    readonly quickLaunch:Locator;
    readonly timeAtWorkCard:Locator;
    readonly profile:Locator;
    readonly logout:Locator;
    constructor(page:Page){
        this.page=page;
        this.dashboardTitle=page.locator('h6');
        this.quickLaunch=page.getByText('Quick Launch');
        this.timeAtWorkCard=page.getByText('Time at Work');
        this.profile=page.locator(".oxd-userdropdown-name");
        this.logout=page.getByRole('menuitem', { name: 'Logout' });
    }

    async getdashboardTitleText(){
        return await this.dashboardTitle.textContent();
    }
    async logoutAction(){
        await this.profile.click();
        await this.logout.click();  
    }
}
