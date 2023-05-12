const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const screenshotsConfig = require("../comparativeReport/screenshots-config.json");

const fs = require('fs');
const { nodes } = require("../utils/utils");

const { options } = config;
const { basePath, extencion, paths, versions, screenshots } = screenshotsConfig;

async function executeTest(){
    let resultInfo = {}
        screenshots.forEach(async (screenshot)=>{
            if(screenshot.length==0)
                return;

            fileName = `${screenshot.num}-${screenshot.functionality}-${screenshot.action}`
            console.log('fileName: ',fileName)
            refFile = `${basePath}${paths[0]}${fileName}`
            console.log('refFile: ',refFile)
            testFile = `${basePath}${paths[1]}${fileName}`
            diffFile = `${basePath}${paths[3]}${fileName}`

            const data = await compareImages(
                fs.readFileSync(`${refFile}-${versions[0]}${extencion}`),
                fs.readFileSync(`${refFile}-${versions[1]}${extencion}`),
                options
            );

            resultInfo[b] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }
            fs.writeFileSync(`${diffFile}-${versions[3]}${extencion}`, data.getBuffer());

        });

    console.log("Execution finished. report generated!!")
    return resultInfo;
  }
(async () => console.log(await executeTest()))();
