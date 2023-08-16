import dom from '../dom.js';
import ifEnterHandler from '../handlers/ifEnterHandler.js';

const ifEnterEvent = () => {
    dom.input.addEventListener('keydown', (e) => {
        ifEnterHandler(e);
    });
};

export default ifEnterEvent;
