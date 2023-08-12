const fs = require('fs');
const { probeStream, readMetadata } = require('../index.js');

const url = "https://cdn.discordapp.com/attachments/1128739211701395518/1134561530885705738/16905709686973736.mp3";
// const stream = fs.createReadStream(`${__dirname}/test.pcm`);
const stream = new Promise((resolve, reject) => {
    require('https').get(url, resolve);
});

/**
 * @param {Buffer} chunk 
 */
async function main() {
    const probeResult = await probeStream(await stream);
    console.log(probeResult.result);
    // console.log(readMetadata(probeResult.result));
    /*
    {
        channels: 2,
        sampleRate: 44100,
        framesPerBlock: 0,
        codec: 4099,
        nFrames: 796032,
        duration: 18
    }
    */
}

main();