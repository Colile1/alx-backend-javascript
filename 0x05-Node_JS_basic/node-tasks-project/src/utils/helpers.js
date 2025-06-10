module.exports = {
    log: (message) => {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    },
    formatResponse: (data) => {
        return {
            status: 'success',
            data: data,
        };
    },
    handleError: (error) => {
        return {
            status: 'error',
            message: error.message,
        };
    }
};