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
    
    url = 'http://localhost:2368/ghost/#/signin'
    await page.goto(url)
    await new Promise(r => setTimeout(r, 2000));
    await page.fill('#ember8', 'f.orozcob@uniandes.edu.co');
    await page.fill('#ember10', 'Pruebas123***');
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './list_post_01.png'})
    
    //When I click login
    await page.click('#ember12')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './list_post_02.png'})
    
    url = 'http://localhost:2368/ghost/#/posts'
    await page.goto(url)
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './list_post_03.png'})
    
    //When I click new post
    await page.click('.ember-view.gh-btn.gh-btn-green')
    await new Promise(r => setTimeout(r, 2000));
    await page.fill('.gh-editor-title', 'post title')
    await page.fill('.koenig-editor__editor.__mobiledoc-editor', 'This is a description')
    await page.screenshot({path: './list_post_04.png'})
    
    //When I click publish
    await page.click('.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './list_post_05.png'})
    
    //When I click publish now
    await page.click('.gh-publishmenu-button')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './list_post_06.png'})
    
    url = 'http://localhost:2368/ghost/#/posts'
    await page.goto(url)
    //When I click new post
    await page.click('.ember-view.gh-btn.gh-btn-green')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './list_post_07.png'})
    
    await page.fill('.gh-editor-title', 'post title')
    await page.fill('.koenig-editor__editor.__mobiledoc-editor', 'This is a description')
    //When I click publish
    await page.click('.gh-publishmenu-trigger')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './list_post_08.png'})
    
    //When I click publish now
    await page.click('.gh-publishmenu-button')
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './list_post_09.png'})
    
    url = 'http://localhost:2368/ghost/#/posts'
    await page.goto(url)
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './list_post_10.png'})
    
  

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función