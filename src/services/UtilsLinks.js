export const API_LINKS = {
    cors_enable: 'https://cors-anywhere.herokuapp.com/',
    search: 'https://api.deezer.com/search?q={0}',
    artists: 'https://api.deezer.com/artist/'
}

export const secondsToHms = (time) => {
    time = Number(time);
    const h = Math.floor(time  / 3600);
    const m = Math.floor(time  % 3600 / 60);
    const s = Math.floor(time  % 3600 % 60);

    const hDisplay = h > 0 ? h + ":" : "";
    const mDisplay = m > 0 ? m + ":"  : "0:";
    const sDisplay = s > 0 ? s : "";

    return hDisplay + mDisplay + sDisplay; 
}

export const isEmptyObject = (obj) => {
    return Object.keys(obj).length !== 0 && obj.constructor !== Object;
}