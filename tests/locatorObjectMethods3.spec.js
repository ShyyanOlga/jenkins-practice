
import{test} from "@playwright/test";

test.describe("First Group", ()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://practice.cydeo.com/");
    });
    test.afterEach(async({page})=>{
      //  await page.waitForTimeout(3000);
    });
    test("inputValue() method ", async({page})=>{

        let inputLink = page.getByText("Inputs");
        await inputLink.click();

     let inputBox = page.locator("//input[@type='number']");

    // await page.waitForTimeout(3000);

     await inputBox.fill("1234");

    // await page.waitForTimeout(3000);

     let valueOfInputBox = await inputBox.inputValue();
     console.log(valueOfInputBox);


    })
    test("inputValue() method2", async({page})=>{
        let inputLink = page.getByText("Inputs");
        await inputLink.click();

        let inputBox = page.locator("//input[@type='number']");
        await inputBox.fill("12345");

       // await page.waitForTimeout(3000);

        let valueOfInputBox = await inputBox.inputValue();
        console.log(valueOfInputBox);

    })
    test("inputValue() method3", async({page})=>{
        let inputLink = page.getByText("Inputs");
        await inputLink.click();

        let inputBox = page.locator("//input[@type='number']");
        

        await inputBox.fill("123456");
       // await page.waitForTimeout(2000);

        let valueOfInputBox = await inputBox.inputValue();
        console.log(valueOfInputBox);
         
    });
    test("inputValue() method4", async({page})=>{
        let inputLink = page.getByText("Inputs");
        await inputLink.click();

        let inputBox = page.locator("//input[@type='number']");

        await inputBox.fill("1234567");
      //  await page.waitForTimeout(2000);

        let valueOfInputBox = await inputBox.inputValue();
        console.log(valueOfInputBox);

    })
})




