import {test as base,expect}from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { DemoLoginPage } from "../pages/DemoblazePages/DemoblazeLoginPage";
import { UserPage } from "../pages/DemoblazePages/DemoblazeUserPage";
type Fixture={
    loginPage: LoginPage;
    dashboardPage:DashboardPage;
    demoLoginPage:DemoLoginPage;
    userPage:UserPage;
}

export const test=base.extend<Fixture>({
    loginPage:async({page},use)=>{
        await use(new LoginPage(page));
    },
    dashboardPage:async({page},use)=>{
        await use(new DashboardPage(page));
    },
    demoLoginPage:async({page},use)=>{
        await use(new DemoLoginPage(page));
    },
    userPage:async({page},use)=>{
        await use(new UserPage(page));
    }

});
export{expect}