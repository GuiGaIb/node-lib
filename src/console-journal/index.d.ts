export declare class J {
    info: LoggerMethod;
    ok: LoggerMethod;
    warn: LoggerMethod;
    error: LoggerMethod;
    constructor(setPrefix?: string);
}
export default J;
type LoggerMethod = (message: string, prefix?: string) => void;
