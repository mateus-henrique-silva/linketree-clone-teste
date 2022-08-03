function test(urlImage) {
    const testImages = '../../assets/images';
    const indexTest = "path" + 0;
    return urlImage = require(`${testImages}/${indexTest}/im2.jpg`).default;
    
export default test();