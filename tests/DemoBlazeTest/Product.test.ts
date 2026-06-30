import{test,expect} from '../../fixtures/baseFixture';
import loginData from '../../test-data/DemoblazeLogin.json';
test.describe('product viewing',()=>{

    test.beforeEach(async({demoLoginPage})=>{
        await demoLoginPage.navigation();
         await demoLoginPage.loginAction(
            loginData.validUser.username,
            loginData.validUser.password
        );

    });
    test('product test',async({userPage})=>{
    await userPage.productAction();
    await expect(userPage.lapTitle).toHaveText('MacBook Pro');
});

})
