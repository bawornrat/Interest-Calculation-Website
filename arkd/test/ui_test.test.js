const webdriver = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
//jest.setTimeout(30000); // Set timeout to 30 seconds
const { By, until } = webdriver;

describe("webdriver", () => {
    let driver;
  
    beforeEach(async () => {
      var chromeOptions = new chrome.Options();
      chromeOptions.addArguments("--start-maximized");    
  
      driver = new webdriver.Builder()
        .forBrowser("chrome")      
        .setChromeOptions(chromeOptions)         
        .build();        
  
      await driver.get("http://localhost:3000/");
    }, 30000);
  
    afterEach(async () => {
      await driver.sleep(2 * 1000)
      await driver.close();
    }, 30000);

    test("compound", async () => {   
        await driver.sleep(1 * 1000)
        await driver.findElement(webdriver.By.name("compound")).click();   
    
        
        await require('util').promisify(setTimeout)(3000);


        const title = await driver.getTitle();
 
        expect(title).toEqual("CompoundInterest");
      });

    test("retirement", async () => {   
        await driver.sleep(1 * 1000)
        await driver.findElement(webdriver.By.name("retirement")).click();   
    
        
        await require('util').promisify(setTimeout)(3000);


        const title = await driver.getTitle();
 
        expect(title).toEqual("RetirementPage");
      });


      test("ComparedInterest", async () => {   
        await driver.sleep(1 * 1000)

        await driver.findElement(webdriver.By.name("compound")).click();   

        await driver.findElement(webdriver.By.name("beforesavedmoney")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("bankname")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("permonth")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("duration")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("intrate")).sendKeys("1"); 

        await driver.findElement(webdriver.By.name("Compared")).click();   
    
    
        
        await require('util').promisify(setTimeout)(3000);


        const title = await driver.getTitle();
 
        expect(title).toEqual("ComparedInterest");
      });

      test("Statistic", async () => {   
        await driver.sleep(1 * 1000)

        await driver.findElement(webdriver.By.name("compound")).click(); 

        await driver.sleep(1000)  

        await driver.findElement(webdriver.By.name("beforesavedmoney")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("bankname")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("permonth")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("duration")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("intrate")).sendKeys("1"); 

        await driver.findElement(webdriver.By.name("Compared")).click();   
    
    
        await driver.sleep(1000)
        await driver.executeScript("document.getElementsByName('Statistic')[0].click()");
        await require('util').promisify(setTimeout)(1000);


        const title = await driver.getTitle();
 
        expect(title).toEqual("Statistic");
      },10000);

      test("Home", async () => {   
        await driver.sleep(1 * 1000)

        await driver.findElement(webdriver.By.name("compound")).click(); 

        await driver.sleep(1000)  

        await driver.findElement(webdriver.By.name("beforesavedmoney")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("bankname")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("permonth")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("duration")).sendKeys("1"); 
        await driver.findElement(webdriver.By.name("intrate")).sendKeys("1"); 

        await driver.findElement(webdriver.By.name("Compared")).click();   
    
    
        await driver.sleep(1000)
      
        await driver.findElement(webdriver.By.name("Statistic")).click();    
        await require('util').promisify(setTimeout)(1000);
        await driver.executeScript("document.getElementsByName('Home')[0].click()");
        await require('util').promisify(setTimeout)(1000);


        const title = await driver.getTitle();
        expect(title).toEqual("MainPage");
      },10000);




    });

   