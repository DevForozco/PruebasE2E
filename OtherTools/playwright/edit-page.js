//Importar Playwright
const playwright = require('playwright');
const { nodes, user } = require('../../utils/utils');

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
    await page.goto(nodes.urlSignin);
    await new Promise(r => setTimeout(r, 7000));

    // Ingresar usuario y password
    await page.fill('#ember8', user.mail);
    await page.fill('#ember10', user.password);

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

    // Editar una página
    await page.click('.gh-list > li:nth-child(2)')
    await new Promise(r => setTimeout(r, 5000));
    console.log(`Clicked new page. URL is now ${page.url()}`)
    await new Promise(r => setTimeout(r, 5000));
    await page.type('.gh-editor-title.ember-text-area.gh-input.ember-view', 'Página editada');
    await page.type('.koenig-editor__editor.__mobiledoc-editor', 'Contenido de l página editada');
    await new Promise(r => setTimeout(r, 9000));
    await page.click('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 9000));
    await page.click('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/PageEdited.png'})
    console.log('Page edited')

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
