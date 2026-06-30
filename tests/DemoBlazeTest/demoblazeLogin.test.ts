import{test, expect} from "../../fixtures/baseFixture";
import loginData from '../../test-data/DemoblazeLogin.json';
import { readExcelData } from "../../utils/ExcelReader";

const users = readExcelData();
const invalidUser = users.find(user => user.type === "invalid");
const blankUser = users.find(user => user.type === "blank");
test.describe('demoblaze login test',()=>{
    test.beforeEach(async({demoLoginPage})=>{
        await demoLoginPage.navigation();
    })

    test('Demoblaze valid login',async({demoLoginPage})=>{
         await demoLoginPage.loginAction(
            loginData.validUser.username,
            loginData.validUser.password
        );
    })
    test("Invalid Login", async ({ demoLoginPage,page }) => {

        if (!invalidUser) {
            throw new Error("Invalid user not found in Excel.");
        }
        page.once("dialog", async dialog => {
            expect(dialog.message()).toBe(invalidUser.expectedMessage);
            await dialog.accept();
        });

        await demoLoginPage.loginAction(
            invalidUser.username,
            invalidUser.password
        );
    });
    test("Blank Login", async ({ demoLoginPage, page }) => {

        if (!blankUser) {
            throw new Error("Blank user not found in Excel.");
        }
        page.once("dialog", async dialog => {
            expect(dialog.message()).toBe(blankUser.expectedMessage);
            await dialog.accept();
        });

        await demoLoginPage.loginAction(
            blankUser.username,
            blankUser.password
        );
    });
    
})