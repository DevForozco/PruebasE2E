//Importar Playwright
const playwright = require('playwright');

const url = 'http://localhost:3002/ghost/#/signin';

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

    // Ingresar usuario y password
    await page.fill('#ember8', 'j.aguiar@uniandes.edu.co');
    await page.fill('#ember10', 'pruebas123+-');

    // Clic en el botón Sing in
    await new Promise(r => setTimeout(r, 7000));
    await page.click('#ember12')
    await new Promise(r => setTimeout(r, 9000));
    console.log('Dashboard loaded')
    
    
    // Abrir menú Pages
    await page.click('.gh-nav-list > li:nth-child(3)')
    await new Promise(r => setTimeout(r, 9000));
    console.log(`Clicked "Pages". URL is now ${page.url()}`)
    await new Promise(r => setTimeout(r, 5000));
    console.log('Pages loaded')

    // Eliminar una página
    await page.click('.gh-list > li:nth-child(2)')
    await new Promise(r => setTimeout(r, 5000));
    console.log(`Clicked new page. URL is now ${page.url()}`)
    await new Promise(r => setTimeout(r, 5000));
    await page.click('.post-settings')
    await new Promise(r => setTimeout(r, 5000));
    await page.click('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button')
    await new Promise(r => setTimeout(r, 5000));
    await page.click('.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
    await page.screenshot({path: './img/PageDeleted.png'})
    console.log('Page deleted')

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función