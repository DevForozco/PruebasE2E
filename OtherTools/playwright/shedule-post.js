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

	await page.goto(nodes.urlSignin)
	await new Promise(r => setTimeout(r, 2000));
    await page.fill(pageObject.login.mailImput, user.mail);
    await page.fill(pageObject.login.pssImput, user.password);
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/schedule_post_01.png'})

	//When I click login
	await page.click(pageObject.login.loginBtn)
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/schedule_post_02.png'})

	await page.goto(nodes.urlPost)
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/schedule_post_03.png'})

	//When I click new post
	await page.click(pageObject.post.newPostBtn)
	await new Promise(r => setTimeout(r, 2000));
	await page.fill(pageObject.post.titleImput,'post title')
	await page.fill(pageObject.post.descriptionImput,'This is a description')
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/schedule_post_04.png'})

	//When I click publish
	await page.click(pageObject.post.publishBtn)
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/schedule_post_05.png'})

	//When I click a schedule ratio btn
	await page.click(pageObject.post.publishRadioBtn)
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/schedule_post_06.png'})

	//When I click a publish btn
	await page.click(pageObject.post.publishMenu)
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/schedule_post_07.png'})

	await page.goto(nodes.urlScheduled)
	await new Promise(r => setTimeout(r, 2000));
	await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/schedule_post_08.png'})

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
