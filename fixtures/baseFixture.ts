import {test as base,expect}from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
type Fixture={
    loginPage: LoginPage;
    dashboardPage:DashboardPage;
}

export const test=base.extend<Fixture>({
    loginPage:async({page},use)=>{
        await use(new LoginPage(page));
    },
    dashboardPage:async({page},use)=>{
        await use(new DashboardPage(page));
    },
});
export{expect}