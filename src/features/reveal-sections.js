let revealObserver;

export function observeElement(el) {
    if (!el || el.classList.contains('reveal-visible') || el.classList.contains('active')) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible', 'active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(el);
}

export function initRevealSections(root = document) {
    if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        entry.target.classList.add('reveal-visible');
                    }); 
                });

                revealObserver.unobserve(entry.target);
            });
        }, { 
            threshold: 0.05,
            rootMargin: '100px 0px'
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
            requestAnimationFrame(() => initRevealSections());
        }
    });
    // !
    mutationObserver.observe(root, { childList: true, subtree: true });
    return mutationObserver;
}
