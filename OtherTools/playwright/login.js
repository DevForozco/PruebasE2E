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
    await page.screenshot({path: './img/paginaLogin.png'})

    // Ingresar usuario y password
    await page.fill('#ember8', 'j.aguiar@uniandes.edu.co');
    await page.fill('#ember10', 'pruebas123+-');

    // Clic en el botón Sing in
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path: './img/paginaLoginWait.png'})
    await page.click('#ember12')
    await new Promise(r => setTimeout(r, 9000));
    await page.screenshot({path: './img/Dashboard.png'})
    console.log('Dashboard loaded')
    
    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función