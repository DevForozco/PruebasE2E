//Importar Playwright
const playwright = require('playwright');

const url = 'http://localhost:2368/ghost/#/signin';

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
    //Contenido de la prueba
    console.log(browserType+'-------------------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el login
    await page.goto(url);
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path: './img/create_tag_0.png'})

    // Ingresar usuario y password
    await page.fill('#ember8', 'j.vivast@uniandes.edu.co');
    await page.fill('#ember10', 'Duitama0420*');

    // Clic en el botón Sing in
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path: './img/create_tag_1.png'})
    await page.click('#ember12')
    await new Promise(r => setTimeout(r, 9000));
    await page.screenshot({path: './img/create_tag_2.png'})
    
    await page.click(".gh-nav-list > li:nth-child(4)");
    await page.screenshot({path: './img/create_tag_3.png'});
    
    await new Promise(r => setTimeout(r, 2000));
    await page.click(".view-actions > a:nth-child(2)");
    await page.screenshot({path: './img/create_tag_4.png'});

    await new Promise(r => setTimeout(r, 3000));
    await page.fill('#tag-name', 'Tag de prueba');
    await page.fill('.input-color > input:nth-child(1)', 'FF4000');
    await page.fill('#tag-slug', 'first-tag');
    await page.fill('#tag-description', 'This is a description for my new tag');
    await page.screenshot({path: './img/create_tag_5.png'});

    await new Promise(r => setTimeout(r, 2000));
    await page.click(".view-actions > button:nth-child(1)");

    await new Promise(r => setTimeout(r, 2000));
    await page.click(".gh-nav-list > li:nth-child(4)");
    await page.screenshot({path: './img/create_tag_6.png'});
    
    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función