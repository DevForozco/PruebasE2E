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
    await page.screenshot({path: './img/delete_tag_0.png'})

    // Ingresar usuario y password
    await page.fill('#ember8', user.mail);
    await page.fill('#ember10', user.password);

    // Clic en el botón Sing in
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path: './img/delete_tag_1.png'})
    await page.click('#ember12')
    await new Promise(r => setTimeout(r, 9000));
    await page.screenshot({path: './img/delete_tag_2.png'})
    
    await page.click(".gh-nav-list > li:nth-child(4)");
    await page.screenshot({path: './img/delete_tag_3.png'});
    
    await new Promise(r => setTimeout(r, 2000));
    await page.click(".view-actions > a:nth-child(2)");
    await page.screenshot({path: './img/delete_tag_4.png'});

    await new Promise(r => setTimeout(r, 3000));
    await page.fill('#tag-name', 'Tag de prueba');
    await page.fill('.input-color > input:nth-child(1)', 'FF4000');
    await page.fill('#tag-slug', 'first-tag');
    await page.fill('#tag-description', 'This is a description for my new tag');
    await page.screenshot({path: './img/delete_tag_5.png'});

    await new Promise(r => setTimeout(r, 2000));
    await page.click(".view-actions > button:nth-child(1)");

    await new Promise(r => setTimeout(r, 2000));
    await page.click(".gh-nav-list > li:nth-child(4)");
    await page.screenshot({path: './img/delete_tag_6.png'});

    await new Promise(r => setTimeout(r, 2000));
    await page.click(".tags-list:last-child");
    await page.screenshot({path: './img/delete_tag_7.png'});

    await new Promise(r => setTimeout(r, 2000));
    await page.click(".gh-btn.gh-btn-red");
    await page.screenshot({path: './img/delete_tag_8.png'});

    await new Promise(r => setTimeout(r, 2000));
    await page.click(".modal-footer > button:nth-child(2)");
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: './img/delete_tag_9.png'});
    
    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función