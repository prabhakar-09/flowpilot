
function handleLog(config) {
    return {
        output: null,
        updates: {},
        logs: [config.message]
    };
}

export const actionHandlers = {
    log: handleLog
};
