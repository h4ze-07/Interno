
export const generateVariant = (pos) => {
    return {
        initial: {
            opacity: 0,
            x: pos === 'left' ? '-100%' : pos === 'right' ? '100%' : 0,
            y: pos === 'top' ? '-100%' : pos === 'bottom' ? '100%' : 0,
        },
        view: {
            x: 0,
            y: 0,
            opacity: 1,           
        }
    }
}

export const generateDuration = (dur = 0.3, del=0.4) => {
    return {
        duration: dur,
        delay: del,
    }
}

export const viewportFalse = {
    once: false
}