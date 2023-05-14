const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./../resemblejs/screenshots-config.json");
const screenshots = require("./../comparativeReport/screenshots-generated.json")
const fs = require('fs');

const { options, viewport } = config;
const {screenshots} = screenshots;

async function executeTest(){
    if(screenshots.length === 0){
      return;
    }

    let resultInfo = {}

    for(screenshot of screenshots){
        const data = await compareImages(
            fs.readFileSync(`./results/${datetime}/before-${b}.png`),
            fs.readFileSync(`./results/${datetime}/after-${b}.png`),
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
        fs.writeFileSync(`./results/${datetime}/compare-${b}.png`, data.getBuffer());
    }

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report images en diff folder")
    return resultInfo;
  }
(async ()=>console.log(await executeTest()))();
