import{test} from "@playwright/test";

test("@env-var environment  variables", async({page})=>{
    console.log(process.env.PRACTICE_USENAME);
    console.log(process.env.PRACTICE_PASSWORD);
    console.log("-----option #2-----------");

    console.log(`Username is ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password is ${process.env.PRACTICE_PASSWORD}`);
});

test("call env variable fro use stings (json) file", async({page})=>{

    console.log(process.env.PRACTICE_USERNAME);
    console.log(process.env.PRACTICE_PASSWORD);
    console.log("-----option #2-----------");
    console.log(`Username is ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password is ${process.env.PRACTICE_PASSWORD}`);
})
test("Call Env Variables From User Settings (JSON) file", async({page})=>{
    console.log(process.env.PRACTICE_USERNAME+" this is user name");
    console.log(process.env.PRACTICE_PASSWORD+" this is password");
    console.log("-----option #2-----------");
    console.log(`Username is ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password is ${process.env.PRACTICE_PASSWORD}`);
});
test("practice env ver", async ({ page }) => {
  let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
  await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`,});
  await page.goto("https://practice.cydeo.com/basic_auth");
 // await page.waitForTimeout(3000);
});

test("practice env variable", async({page})=>{
    let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
    await page.setExtraHTTPHeaders({'Authorization':`Basic ${encodedCredentials}`});
    await page.goto("https://practice.cydeo.com/basic_auth");
   // await page.waitForTimeout(3000);
});
test("practice env variable 2", async({page})=>{
    let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
    await page.setExtraHTTPHeaders({'Authorization':`Basic ${encodedCredentials}`});
    await page.goto("https://practice.cydeo.com/basic_auth");
   // await page.waitForTimeout(3000);
});
test("ENV practice", async({page})=>{
    let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
    await page.setExtraHTTPHeaders({'Authorization':`Basic ${encodedCredentials}`});
    await page.goto("https://practice.cydeo.com/basic_auth");
   // await page.waitForTimeout(3000);
});
test("ENV practice 2", async({page})=>{
    let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
    await page.setExtraHTTPHeaders({'Authorization':`Basic ${encodedCredentials}`});
    await page.goto("https://practice.cydeo.com/basic_auth");
  //  await page.waitForTimeout(3000);
});
test("ENV practice 3", async({page})=>{
    let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
    await page.setExtraHTTPHeaders({'Authorization':`Basic ${encodedCredentials}`});
    await page.goto("https://practice.cydeo.com/basic_auth");
   // await page.waitForTimeout(3000);
});





