import{test,expect} from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';
test.describe('login test @smoke',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate()
    })

    test("valid login @login1",async({loginPage,dashboardPage})=>{
        await loginPage.login(
            loginData.validUser.username,loginData.validUser.password
        );
        await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
    })


    test("invalid login",async({loginPage})=>{
        await loginPage.login(
            loginData.invalidUser.username,loginData.invalidUser.password
        );
        await expect(loginPage.errormsg).toHaveText('Invalid credentials')
    })
    
})