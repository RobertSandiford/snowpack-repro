
export function success(content) {
    return {
        type: 'success',
        content
    }
}

export function info(content){
    return {
        type: 'info',
        content
    }
}

export function warning(content){
    return {
        type: 'warning',
        content
    }
}

export function error(content) {
    return {
        type: 'error',
        content
    }
}
