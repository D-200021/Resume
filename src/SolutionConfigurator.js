import dataConfig from "./Configuration.js";
export const SolutionConfigurator = {};
SolutionConfigurator.getConfig = (key) => {
    const keys = key.split(".");
    let config = dataConfig;

    for (const k of keys) {
        if (config.hasOwnProperty(k)) {
            config = config[k];
        } else {
            return undefined;
        }
    }
    return config;
};
