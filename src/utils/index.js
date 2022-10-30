export const mobileFormatText = (text) => {
    let largura = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    if (largura < 400 && text.length > 150)
        return text.substring(0, 150) + "...";
    else
        return text;
}