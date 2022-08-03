function test(urlImage) {
    const testImages = '../../assets/images';
    var indexTest = "path" + 0;
    return urlImage = require`${testImages}/${indexTest}/img1.jpeg`;
    console.log(urlImage);
}
export default test();