import{test,expect} from"../fixtures/baseFixture";
import loginData from '../test-data/loginData.json';

test.describe('dashboard test1 ',()=>{
    test.beforeEach(async({loginPage,dashboardPage})=>{
        await loginPage.navigate()
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
        await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
    })

    test('logout 1',async({dashboardPage,loginPage})=>{
         await dashboardPage.logoutAction();
         await expect(loginPage.loginTittle).toHaveText('Login');
    });
}
)