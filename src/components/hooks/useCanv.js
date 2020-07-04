import { useEffect, useRef, useState } from 'react';

export function f(c,w,h) {
    //calculate text location and value
    const scale = 20;
    const x = Math.floor(Math.random()*(w/scale))*scale;
    const y = Math.floor(Math.random()*(h/scale)+1)*scale;
    // const tAlphaNum = String(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,1));
    // const t09 = String(Math.floor(Math.random()*10));
    const t01 = String(Math.floor(Math.random()*2));
    const t = Math.floor(Math.random()*6) === 1 ? ' ' : t01;

    //clear text background
    c.fillStyle = "#222";
    c.fillRect(x,y-scale+1,scale,scale);

    //print text to canvas
    c.fillStyle = "lime";
    c.font = String(Math.floor(scale*1.25))+"px monospace";
    c.textAlign = "left";
    c.fillText(t,x,y);
}

export function useCanv() {
    //define document variables
    const canvRef = useRef(null);
    const canvInterval = useRef(null);
    const fps = 100;
    const [canvWidth, setCanvWidth] = useState(window.innerWidth);
    const [canvHeight, setCanvHeight] = useState(window.innerHeight);

    const handleResize = () => {
        //check for memory leak
        if(!canvRef.current) return;

        //adjust state value
        setCanvWidth(window.innerWidth);
        setCanvHeight(window.innerHeight);
        
        //clear new background color
        const canv = canvRef.current;
        const ctx = canv.getContext("2d");
        ctx.fillStyle = "#222";
        ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

        //reset main canvas interval
        clearInterval(canvInterval.current);
        canvInterval.current = setInterval(() => f(ctx, window.innerWidth, window.innerHeight), 1000/fps);
    }

    window.addEventListener("resize", handleResize);

    useEffect(() => {
        //clear background color
        const canv = canvRef.current;
        const ctx = canv.getContext("2d");
        ctx.fillStyle = "#222";
        ctx.fillRect(0,0,canvWidth,canvHeight);

        //set main canvas interval
        canvInterval.current = setInterval(() => f(ctx, canvWidth, canvHeight), 1000/fps);

        return () => {
            //clear main canvas interval
            clearInterval(canvInterval.current);
            //remove resize event listener
            if(window.removeEventListener) {
                window.removeEventListener("resize", handleResize);
            } else if(window.detachEvent) {
                window.detachEvent("resize", handleResize);
            }
        };
    }, [canvWidth, canvHeight]);

    return [ canvRef, canvWidth, canvHeight];
}
