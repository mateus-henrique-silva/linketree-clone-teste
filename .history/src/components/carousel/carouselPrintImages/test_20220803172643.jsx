import CallbackNew from '../carousel'

function test(urlImage) {

    const newIndex = CallbackNew.callback();
    const testImages = 'https://topexplorador.com/lider_brasil/';
    const indexTest = `${newIndex}.jpg`;
    return urlImage = `${testImages}${indexTest}`;
    //https://topexplorador.com/lider_brasil/1-1.jpg
    console.log(urlImage);
}
export default test();