let revealObserver;

export function initRevealSections(root = document) {
    if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                // Use requestAnimationFrame to batch DOM updates and avoid layout thrashing
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        entry.target.classList.add('reveal-visible');
                    });
                });
                
                revealObserver.unobserve(entry.target);
            });
        }, { 
            threshold: 0.05, // Lower threshold for earlier trigger
            rootMargin: '100px 0px' // Start animation well before element is visible
        });
    }

    root.querySelectorAll('.reveal').forEach((element) => {
        if (element.dataset.revealObserved) {
            return;
        }

        revealObserver.observe(element);
        element.dataset.revealObserved = 'true';
    });
}

export function observeRevealSections(root = document.body) {
    const mutationObserver = new MutationObserver((mutations) => {
        const hasNewElements = mutations.some((mutation) => 
            Array.from(mutation.addedNodes).some((node) => node.nodeType === 1)
        );

        if (hasNewElements) {
            // Defer initialization to avoid blocking main thread
            requestAnimationFrame(() => initRevealSections());
        }
    });

    mutationObserver.observe(root, { childList: true, subtree: true });
    return mutationObserver;
}
