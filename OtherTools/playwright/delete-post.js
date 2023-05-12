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

	await page.goto(nodes.urlSignin)
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_01.png'})

	await page.fill('#ember8', user.mail);
	await page.fill('#ember10', user.password);
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_02.png'})

	//When I click login
	await page.click('#ember12');
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_03.png'})

	await page.goto(nodes.urlPost)
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_04.png'})

	//When I click new post
	await page.click('.ember-view.gh-btn.gh-btn-green');
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_05.png'})

	await page.fill('.gh-editor-title', 'post title')
	await page.fill('.koenig-editor__editor.__mobiledoc-editor', 'This is a description')
	//When I click publish
	await page.click('.gh-publishmenu-trigger');
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_06.png'})

	//When I click publish now
	await page.click('.gh-publishmenu-button');
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_07.png'})

	await page.goto(nodes.urlPost)
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_08.png'})

	//Given I click a post link
	await page.click('.gh-list-row.gh-posts-list-item:last-child');
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_09.png'})

	//When I click publish
	await page.click('.gh-publishmenu-trigger');
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_10.png'})

	//When I click a unpublish ratio btn
	await page.click('.gh-publishmenu-radio-button:first-child');
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_11.png'})

	//When I click a publish btn
	await page.click('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/delete_post_12.png'})

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
