export function animateCounter(item, duration = 2000) {
    item.current = 0;
    const end = item.value;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const increment = end / totalFrames;
    let currentFrame = 0;

    const timer = setInterval(() => {
        currentFrame += 1;
        const nextValue = Math.round(increment * currentFrame);

        if (currentFrame >= totalFrames) {
            item.current = end;
            clearInterval(timer);
            return;
        }

        item.current = nextValue;
    }, frameRate);
}
