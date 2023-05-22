//Importar Playwright
const playwright = require('playwright');
const { nodes, user } = require('../../utils/utils');
const { pageObject } = require('../../pageObject');

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
  	await page.goto(nodes.urlSignin)
	  await new Promise(r => setTimeout(r, 2000));
    await page.fill(pageObject.login.mailImput, user.mail);
    await page.fill(pageObject.login.pssImput, user.password);

    // Clic en el botón Sing in
    await new Promise(r => setTimeout(r, 7000));
    await page.click(pageObject.login.loginBtn)
    await new Promise(r => setTimeout(r, 9000));
    console.log('Dashboard loaded')


    // Abrir menú Pages
    await page.click(pageObject.page.newPageBtn)
    await new Promise(r => setTimeout(r, 9000));
    console.log(`Clicked "Pages". URL is now ${page.url()}`)
    await new Promise(r => setTimeout(r, 5000));
    console.log('Pages loaded')

    // Crear nueva página
    await page.click(pageObject.post.newPostBtn)
    await new Promise(r => setTimeout(r, 5000));
    console.log(`Clicked new page. URL is now ${page.url()}`)
    await new Promise(r => setTimeout(r, 9000));

    // Ingresar título, contenido y crear la página
    await page.type('.gh-editor-title.ember-text-area.gh-input.ember-view', 'Primer página');
    await page.type(pageObject.post.descriptionImput, 'Contenido primer página');
    await new Promise(r => setTimeout(r, 9000));
    await page.click('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 9000));
    await page.click(pageObject.post.publishMenu)
    await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/NewPage.png'})
    console.log('Page created')


    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
