let revealObserver;
let mutationObservedElements = new WeakSet();

export function initRevealSections(root = document) {
    if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                requestAnimationFrame(() => {
                    entry.target.classList.add('reveal-visible');
                });

                revealObserver.unobserve(entry.target);
            });
        }, {
            threshold: 0.05,
            rootMargin: '100px 0px'
        });
    }

    root.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up').forEach((element) => {
        if (element.dataset.revealObserved) {
            return;
        }

        const rect = element.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (inViewport) {
            element.classList.add('reveal-visible');
            element.dataset.revealObserved = 'true';
        } else {
            revealObserver.observe(element);
            element.dataset.revealObserved = 'true';
        }
    });
}

export function observeRevealSections(root = document.body) {
    const mutationObserver = new MutationObserver((mutations) => {
        const hasNewElements = mutations.some((mutation) =>
            Array.from(mutation.addedNodes).some((node) => node.nodeType === 1)
        );

        if (hasNewElements) {
            requestAnimationFrame(() => initRevealSections());
        }
    });

    mutationObserver.observe(root, { childList: true, subtree: true });
    return mutationObserver;
}

export function disconnectRevealSections(mutationObserver) {
    if (revealObserver) {
        revealObserver.disconnect();
        revealObserver = null;
    }
    if (mutationObserver) {
        mutationObserver.disconnect();
    }
}
