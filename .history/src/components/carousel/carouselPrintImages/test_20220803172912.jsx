import callback from '../carousel'

function test(urlImage) {

    const newIndex = callback.callback();
    const testImages = 'https://topexplorador.com/lider_brasil/';
    const indexTest = `${newIndex}.jpg`;
    return urlImage = `${testImages}${indexTest}`;
    //https://topexplorador.com/lider_brasil/1-1.jpg
    console.log(urlImage);
}
export default test();