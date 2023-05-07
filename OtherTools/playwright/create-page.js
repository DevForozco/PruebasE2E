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

    // Crear nueva página
    await page.click('.ember-view.gh-btn.gh-btn-green')
    await new Promise(r => setTimeout(r, 5000));
    console.log(`Clicked new page. URL is now ${page.url()}`)
    await new Promise(r => setTimeout(r, 9000));

    // Ingresar título, contenido y crear la página
    await page.type('.gh-editor-title.ember-text-area.gh-input.ember-view', 'Primer página');
    await page.type('.koenig-editor__editor.__mobiledoc-editor', 'Contenido primer página');
    await new Promise(r => setTimeout(r, 9000));
    await page.click('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 9000));
    await page.click('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    await page.screenshot({path: './NewPage.png'})
    console.log('Page created')


    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función