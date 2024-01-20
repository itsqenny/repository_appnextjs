'use client'
export const ScrollPos = [0, 0];
const uniq = 'revotale_nextjs_scroll_restoration';
const getKey = (pos) => `${uniq}_${pos}`;
export const HistoryState = null;

export const setCurrentScrollHistory = ([x, y]) => {
    console.log(`Remember history scroll to ${x} ${y}. Href ${window.location.href}.`);
    
    // Проверяем, являются ли x и y числами
    if (isNaN(x) || isNaN(y)) {
        console.error('Error: x and y must be numbers.');
        return;
    }

    x = Math.max(x, 0);
    y = Math.max(y, 0);

    const newState = (window.history.state) ?? {};
    window.history.replaceState(
        {
            ...newState,
            [getKey('x')]: x,
            [getKey('y')]: y,
        },
        ''
    );
};

export const getScrollFromState = (state) => {
    const retrieve = (name) => {
        if (state === null) {
            return null;
        }
        const key = getKey(name);
        const value = state[key];
        if (value === null) {
            return null;
        }
        const num = Number(value);
        return isNaN(num) ? null : num;
    };

    const x = retrieve('x');
    const y = retrieve('y');
    return x !== null && y !== null ? [x, y] : null;
};