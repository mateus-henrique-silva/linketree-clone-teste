import testHoje from '.'

function test(urlImage) {
    const testImages = '../../assets/images/carousel';
    const indexTest = 0 +".jpeg";
    return urlImage = `${testImages}/${indexTest}`;
    console.log(urlImage);
}
export default test();