
import{test} from "@playwright/test";

test.describe("First Group", ()=>{
test.beforeEach(async({page})=>{
    await page.goto("https://practice.cydeo.com/");
});
test.afterEach(async({page})=>{
    //await page.waitForTimeout(3000);
});
test("Simple dropdown", async({page})=>{
    let dropdownLink = page.getByText("Dropdown");
    dropdownLink.click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");
    await simpleDropdown.selectOption("2");
   // await page.waitForTimeout(3000);

});
test("Select birthday", async({page})=>{
    let dropdownLink = page.getByText("Dropdown");
    dropdownLink.click();

    let yearDropdown = page.locator("//select[@id='year']");
    await yearDropdown.selectOption("2010");
  //  await page.waitForTimeout(3000);

    let monthDropdown = page.locator("//select[@id='month']");
    await monthDropdown.selectOption("9");
  //  await page.waitForTimeout(3000);

    let dayDropdown = page.locator("//select[@id='day']");
    await dayDropdown.selectOption("9");
   // await page.waitForTimeout(3000);

});
test("State dropdown", async({page})=>{
    let dropdownLink = page.getByText("Dropdown");
    dropdownLink.click();

    let sateDropdown = page.locator("//select[@id='state']");
    await sateDropdown.selectOption("CA");
   // await page.waitForTimeout(3000);
});
});

test.describe("Second Group", ()=>{
test.beforeEach(async({page})=>{
    await page.goto("https://practice.cydeo.com/");
});
test.afterEach(async({page})=>{
   // await page.waitForTimeout(3000);
});
test("SimpleDropdown", async({page})=>{
    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");
    await simpleDropdown.selectOption("2");
});
test("Birthday Select", async({page})=>{
    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();

    let yearDropDown = page.locator("//select[@id='year']");
    await yearDropDown.selectOption("2011");
   // await page.waitForTimeout(3000);

    let monthDropdown = page.locator("//select[@id='month']");
    await monthDropdown.selectOption("9");
   // await page.waitForTimeout(3000);

    let dayDropdown = page.locator("//select[@id='day']");
    await dayDropdown.selectOption("10");
   // await page.waitForTimeout(3000);
});
test("State dropdown 2", async({page})=>{
    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();

    let stateDropdown = page.locator("//select[@id='state']");
    await stateDropdown.selectOption("CA");
   // await page.waitForTimeout(3000);
});

});
test.describe("Third Group", ()=>{
    test.beforeEach(async({page})=>{
        await page.goto("https://practice.cydeo.com/");
    });
    test.afterEach(async({page})=>{
        //await page.waitForTimeout(3000);
    });
    test("SimpleDropdown", async({page})=>{
        let dropdownLink = page.getByText("Dropdown");
        await dropdownLink.click();

        let simpleDropdown = page.locator("//select[@id='dropdown']");
        await simpleDropdown.selectOption("2");
    });
    test("BirthdayDropdown", async({page})=>{
        let dropdownLink = page.getByText("Dropdown");
        await dropdownLink.click();

        let yearDropDown = page.locator("//select[@id='year']");
        await yearDropDown.selectOption("2022");
      //  await page.waitForTimeout(3000);

        let monthDropdown = page.locator("//select[@id='month']");
        await monthDropdown.selectOption("9");
      //  await page.waitForTimeout(3000);

        let dayDropdown = page.locator("//select[@id='day']");
        await dayDropdown.selectOption("9");
      //  await page.waitForTimeout(3000);
    
    });
    test("StateDropdown test", async({page})=>{
        let dropdownLink = page.getByText("Dropdown");
        await dropdownLink.click();

        let stateDropdown = page.locator("//select[@id='state']");
        await stateDropdown.selectOption("CA");

    });
    
});

test.describe("Fourth Group", ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://practice.cydeo.com/");
    });
    test.afterEach(async({page})=>{
     //   await page.waitForTimeout(3000);
    });
    test("simpleDropdown test", async({page})=>{
        let dropdownLink = page.getByText("Dropdown");
        await dropdownLink.click();

        let simpleDropdown = page.locator("//select[@id='dropdown']");
        await simpleDropdown.selectOption("2");
    });
    test("YearDropdown test2", async({page})=>{
        let dropdownLink = page.getByText("Dropdown");
        await dropdownLink.click();

        let yearDropDown = page.locator("//select[@id='year']");
        await yearDropDown.selectOption("2000");
     //   await page.waitForTimeout(3000);

        let monthDropdown = page.locator("//select[@id='month']");
        await monthDropdown.selectOption("9");
      //  await page.waitForTimeout(3000);

        let dayDropdown = page.locator("//select[@id='day']");
        await dayDropdown.selectOption("11");
     //   await page.waitForTimeout(3000);

    });
    test("Test", async({page})=>{
        let dropdownLink = page.getByText("Dropdown");
        await dropdownLink.click();

        let stateDropdown = page.locator("//select[@id='state']");
        await stateDropdown.selectOption("CA");
     //   await page.waitForTimeout(3000);
    });
});





