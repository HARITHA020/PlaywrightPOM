import{test,expect} from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('dashboard test',()=>{
    test.beforeEach(async({loginPage,dashboardPage})=>{
        await loginPage.navigate()
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
        await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
    })
    
    test("Verify Dashboard views  is displayed", async ({ dashboardPage }) => {
        await expect(dashboardPage.quickLaunch).toBeVisible();
        await expect(dashboardPage.timeAtWorkCard).toBeVisible();
    });

    test('verify login is visible after logout',async({dashboardPage,loginPage})=>{
        await dashboardPage.logoutAction();
        await expect(loginPage.loginTittle).toHaveText('Login');
    })
    /*test.afterEach(async({dashboardPage})=>{
        await dashboardPage.logoutAction();
    })*/
})