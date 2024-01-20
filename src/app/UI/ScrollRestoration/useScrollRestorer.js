'use client'
import { useEffect, useLayoutEffect } from 'react';
import {
    getScrollFromState,
    setCurrentScrollHistory,
    HistoryState,
    ScrollPos,
} from './storage';
import usePageHref from './usePageHref';

const getWindowScroll = () => [window.scrollX, window.scrollY];

const restoreScroll = ([left, top]) => {
    //console.log(`Scroll restored to ${left} ${top}.`);
    window.scroll({
        behavior: 'instant',
        left,
        top,
    });
};

const rememberScroll = () => {
    const scroll = getWindowScroll();
    setCurrentScrollHistory(scroll);
};

const mountScroll = () => {
    //console.log('Scroll listener mounted.');
    window.addEventListener('scroll', rememberScroll);
};

const unmountScroll = () => {
    //console.log('Scroll listener unmounted.');
    window.removeEventListener('scroll', rememberScroll);
};

const popstate = (e) => {
    //console.log('Popstate started.');
    //console.log(e.state, window.history.state);
    const scroll = getScrollFromState(e.state);
    //console.log(`Found scroll ${scroll?.toString()}.`);
    if (scroll) {
        restoreScroll(scroll);
    }
};

const unmountPop = () => {
    //console.log('Unmount popstate.');
    window.removeEventListener('popstate', popstate);
};

const mountPop = () => {
    //console.log('Mount popstate.');
    window.addEventListener('popstate', popstate);
};

const restoreCurrentScroll = () => {
    const scroll = getScrollFromState(window.history.state);
    //console.log(`Restoring current scroll position. ${scroll?.toString()}`);

    if (scroll) {
        restoreScroll(scroll);
    }
};

const useScrollRestorer = () => {
    const appHref = usePageHref();

    useLayoutEffect(() => {
        //console.log(`Layout effect ${window.scrollY}`);
        restoreCurrentScroll();
    }, [appHref]);

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        mountPop();
        mountScroll();
        return () => {
            unmountPop();
            unmountScroll();
        };
    }, []);
};

export default useScrollRestorer;
