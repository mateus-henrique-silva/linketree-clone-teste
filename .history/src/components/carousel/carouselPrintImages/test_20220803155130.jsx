function test(urlImage) {
    const testImages = '../../assets/images';
    var indexTest = "path" + 0;
    return urlImage = require(`${testImages}/${indexTest}/im2.jpg`).default;
    console.log(urlImage);
}
export default test();