import * as $ from 'jquery';

function createAnalytics (): Object {
    let counter = 0;
    let destroyed: boolean = false;

    const listener = (): number => counter++;

    document.addEventListener('click', listener);

    return {
        destroy () {
            document.removeEventListener('click', listener);
            destroyed = true;
        },

        getClicks () {
            if(destroyed) {
                return `Analytics is destroyed. Total click = ${counter}`;
            }
            return counter;
        }
    }
}

window['analytics'] = createAnalytics();
