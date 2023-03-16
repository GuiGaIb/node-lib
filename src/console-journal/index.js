const methodFactory = (name, bgColor, setPrefix) => {
    return function (message, prefix) {
        console.log(`\x1b[48;5;${bgColor}m${setPrefix ? setPrefix + '-' : ''}${prefix ? prefix + '-' : ''}${name}:\x1b[48;5;0m ${message}`);
    };
};
export class J {
    info;
    ok;
    warn;
    error;
    constructor(setPrefix) {
        this.info = methodFactory('INFO', '21', setPrefix);
        this.ok = methodFactory('OK', '40', setPrefix);
        this.warn = methodFactory('WARN', '220', setPrefix);
        this.error = methodFactory('ERROR', '196', setPrefix);
    }
}
export default J;
