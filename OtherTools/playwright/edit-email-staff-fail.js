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
    await page.goto(Const.utlSignIn);
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/edit_email_staff_0.png'})

    // Ingresar usuario y password
    await page.fill(pageObject.login.mailImput, user.mail);
    await page.fill(pageObject.login.pssImput, user.password);

    // Clic en el botón Sing in
    await new Promise(r => setTimeout(r, 7000));
    await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/edit_email_staff_1.png'})
    await page.click(pageObject.login.loginBtn)
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/edit_email_staff_2.png'});

    await new Promise(r => setTimeout(r, 3000));
    await page.click(pageObject.staff.staffMenu);
    await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/edit_email_staff_3.png'});

    await new Promise(r => setTimeout(r, 3000));
    await page.click(pageObject.staff.ownerBtn);
    await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/edit_email_staff_4.png'});

    await new Promise(r => setTimeout(r, 3000));
    await page.fill(pageObject.staff.emailImput, ' ');
    await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/edit_email_staff_5.png'});

    await new Promise(r => setTimeout(r, 3000));
    await page.click(pageObject.staff.saveBtn);
    await page.screenshot({path: 'comparativeReport/screenshots/ref-3.3/edit_email_staff_6.png'});

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
