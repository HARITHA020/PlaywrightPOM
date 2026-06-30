import {test,expect} from '../fixtures/baseFixture';
import { readLoginData,LoginUser} from '../utils/CSVReader';

const users: LoginUser[]=readLoginData();
console.log("csv data:",users);

const validuser= users.find(user=> user.type==='valid');
const invaliduser=users.find(user=> user.type==='invalid');

test.describe('login test with csv', ()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
    });

    test('valid login CSV',async({loginPage,dashboardPage})=>{
        if(!validuser){
            throw new Error('valid user not found in logindata.csv')
        }
        await loginPage.login(
            validuser.username,
            validuser.password
        );

        await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
    });

     test('invalid login CSV',async({loginPage})=>{
        if(!invaliduser){
            throw new Error('valid user not found in logindata.csv')
        }
        await loginPage.login(
            invaliduser.username,
            invaliduser.password
        );

        await expect(loginPage.errormsg).toHaveText('Invalid credentials')
    });


})

