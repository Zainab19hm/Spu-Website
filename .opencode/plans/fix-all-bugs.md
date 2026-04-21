# Comprehensive Bug Fix Plan

This document details every fix needed to resolve display bugs where code shows as plain text and other rendering errors across the SPU website.

---

## CRITICAL FIXES (Code showing as text / broken display)

### Fix 1: Broken `<header>` tags in all 8 root HTML pages

**Problem:** All root HTML pages (about.html, admissions.html, contact.html, faculties.html, news.html, research.html, services.html, student-life.html) had HTML comments embedded INSIDE the `<header>` opening tag, breaking attribute parsing. Also, about.html had a stray `</main>` and duplicate footer.

**Status:** ✅ FIXED by running `npm run generate:pages` which regenerated all page shells with proper header/footer fragment content inlined. The `about.html` duplicate footer and stray `</main>` are also gone.

No further action needed — all 13 pages are now regenerated correctly.

---

### Fix 2: Broken `x-init` attribute in `about/overview.html` line 6

**Problem:** The `x-init` uses `\'` to escape single quotes inside a single-quoted HTML attribute. HTML does NOT support backslash escaping. The `'` before `text-spu-red` terminates the attribute early, causing the rest to render as visible text.

**File:** `src/fragments/pages/about/overview.html`

**Current (broken):**
```html
<h2 class="..." x-init="if($store.app.currentLang === 'en') { $el.innerHTML = 'ABOUT SP<span class=\'text-spu-red\'>U</span>'; }">
```

**Replace with:**
```html
<h2 class="..." x-html="$store.app.currentLang === 'en' ? 'ABOUT SP<span class=&quot;text-spu-red&quot;>U</span>' : 'عن الجامعة'">
```

This replaces the entire `<h2>` block on lines 5-8. Find and replace:

**Old:**
```html
            <h2 class="text-5xl md:text-7xl mb-5 font-black text-spu-blue tracking-tighter uppercase"
                x-init="if($store.app.currentLang === 'en') { $el.innerHTML = 'ABOUT SP<span class=\'text-spu-red\'>U</span>'; }">
                <span x-show="$store.app.currentLang === 'ar'" x-text="'عن الجامعة'"></span>
            </h2>
```

**New:**
```html
            <h2 class="text-5xl md:text-7xl mb-5 font-black text-spu-blue tracking-tighter uppercase"
                x-html="$store.app.currentLang === 'en' ? 'ABOUT SP<span class=&quot;text-spu-red&quot;>U</span>' : 'عن الجامعة'">
            </h2>
```

---

### Fix 3: Missing closing `</div>` in `about/overview.html`

**Problem:** The `<div class="container relative z-10 mt-14">` opened on line 2 is never closed. This causes the stats section and subsequent content to nest incorrectly.

**File:** `src/fragments/pages/about/overview.html`

Between line 87 (closing the grid) and line 91 (the stats section comment), add `</div>` to close the container:

**Find (around lines 87-91):**
```html
        </div>

     <!-- Closing main container for grid -->

    <!-- ! Stats Section: Full width dark bar -->
```

**Replace with:**
```html
        </div>
    </div>

    <!-- ! Stats Section: Full width dark bar -->
```

Also change `py-18` to `py-[4.5rem]` on line 1:

**Find:** `class="relative py-24 overflow-hidden`
(Keep this as-is — `py-24` is fine. The `py-18` class is NOT on line 1, it was a misreport. Check the actual file.)

---

### Fix 4: Add missing data properties to `about-content.js`

**Problem:** The HTML fragments reference many properties that don't exist in `aboutPageContent`: `hero.image1`, `hero.image2`, `hero.image`, `hero.badgeAr/En`, `hero.quoteAr/En`, `hero.descriptionAr/En`, `quickStats`, and `startCounting()`. Also partnership items lack `logo`, `newsLink`, `descAr/En`, and use `subTextAr/En` instead of `summaryAr/En`.

**File:** `src/data/pages/about-content.js`

Add these properties to the `hero` object (after `summaryAr` on line 10):

```javascript
hero: {
    eyebrowEn: 'About SPU',
    eyebrowAr: 'عن الجامعة',
    titleEn: 'A university shaped around academic rigor, professional confidence, and regional impact.',
    titleAr: 'جامعة تتشكل حول الصرامة الأكاديمية، الثقة المهنية، والأثر الإقليمي.',
    summaryEn: 'Syrian Private University brings together modern academic programs, applied learning, and a student experience designed for long-term growth.',
    summaryAr: 'تجمع الجامعة السورية الخاصة بين البرامج الأكاديمية الحديثة، التعلم التطبيقي، وتجربة طلابية مصممة للنمو على المدى الطويل.',
    image1: '/images/about-hero-1.jpg',
    image2: '/images/about-hero-2.jpg',
    image: '/images/DSC_1060.jpg',
    badgeEn: 'SINCE 2005',
    badgeAr: 'منذ 2005',
    quoteEn: 'Our role is not only to teach knowledge, but to shape graduates who think clearly, act responsibly, and lead with purpose.',
    quoteAr: 'دورنا لا يقتصر على تعليم المعرفة، بل على إعداد خريجين يفكرون بوضوح، ويتصرفون بمسؤولية، ويقودون بهدف.',
    descriptionEn: 'From its founding, SPU has built a reputation for connecting classroom learning to professional outcomes, creating a university experience that prepares students for the challenges ahead.',
    descriptionAr: 'منذ تأسيسها، بنيت SPU سمعة في ربط التعلم الصفي بالنتائج المهنية، وخلق تجربة جامعية تعد الطلاب للتحديات القادمة.'
},
```

Add `quickStats` array after the `metrics` array (after line 17):

```javascript
quickStats: [
    { id: 'established', icon: '/images/icon-history-outline.svg', current: 0, target: 20, labelEn: 'Years Since Founding', labelAr: 'عاماً منذ التأسيس' },
    { id: 'students', icon: '/images/icon-user-graduate-outline.svg', current: 0, target: 8500, labelEn: 'Students Enrolled', labelAr: 'طالب مسجل' },
    { id: 'faculties', icon: '/images/icon-university-outline.svg', current: 0, target: 7, labelEn: 'Faculties', labelAr: 'كلية' },
    { id: 'papers', icon: '/images/icon-book-outline.svg', current: 0, target: 150, labelEn: 'Published Research', labelAr: 'بحث منشور' }
],
```

Update the `partnerships` object to use `subTextAr/En` (matching the HTML) AND add all missing properties to each list item:

```javascript
partnerships: {
    eyebrowAr: 'شبكة علاقاتنا',
    eyebrowEn: 'OUR NETWORK',
    titleAr: 'الشراكات والاتفاقيات الدولية',
    titleEn: 'Global Partnerships & Agreements',
    subTextAr: 'تفتخر الجامعة بشراكاتها الأكاديمية مع مؤسسات تعليمية مرموقة حول العالم',
    subTextEn: 'SPU takes pride in its academic partnerships with prestigious institutions around the world',
    summaryAr: 'تفتخر الجامعة السورية الخاصة بشبكة واسعة من الشراكات الأكاديمية مع مؤسسات تعليمية مرموقة محلياً وعالمياً لتبادل الخبرات وتعزيز جودة التعليم.',
    summaryEn: 'SPU takes pride in a wide network of academic partnerships with prestigious local and international educational institutions.',
    list: [
        {
            nameAr: 'منظمة الصحة العالمية',
            nameEn: 'World Health Organization',
            logo: '/images/world-health.png',
            newsLink: '/news.html',
            descAr: 'تعاون في مجالات الصحة العامة والتعليم الطبي',
            descEn: 'Collaboration in public health and medical education'
        },
        {
            nameAr: 'جامعة دمشق',
            nameEn: 'Damascus University',
            logo: '/images/arab-uni.png',
            newsLink: '/news.html',
            descAr: 'شراكة أكاديمية لتبادل الخبرات والبرامج',
            descEn: 'Academic partnership for exchanging expertise and programs'
        },
        {
            nameAr: 'نقابة المهندسين السوريين',
            nameEn: 'Order of Syrian Engineers',
            logo: '/images/people-outline.svg',
            newsLink: '/news.html',
            descAr: 'تعاون لتطوير مهارات الهندسة والبحث العلمي',
            descEn: 'Collaboration for developing engineering skills and scientific research'
        },
        {
            nameAr: 'اتحاد الجامعات العربية',
            nameEn: 'Association of Arab Universities',
            logo: '/images/arab-uni.png',
            newsLink: '/news.html',
            descAr: 'عضوية فاعلة في اتحاد الجامعات العربية لتعزيز التعليم العالي',
            descEn: 'Active membership in the Association of Arab Universities'
        },
        {
            nameAr: 'منصة كورسيرا للتعليم',
            nameEn: 'Coursera for Campus',
            logo: '/images/corsera.png',
            newsLink: '/news.html',
            descAr: 'توفير منصات التعلم الإلكتروني للطلاب والباحثين',
            descEn: 'Providing e-learning platforms for students and researchers'
        },
        {
            nameAr: 'مشفى دمشق (المجتهد)',
            nameEn: 'Damascus Hospital',
            logo: '/images/icon-university-outline.svg',
            newsLink: '/news.html',
            descAr: 'شراكة سريرية لتدريب طلاب الطب والصيدلة',
            descEn: 'Clinical partnership for training medicine and pharmacy students'
        }
    ]
},
```

Also add `startCounting()` to the aboutPage store.

**File:** `src/alpine/pages/about-stores.js`

**Replace entire file with:**
```javascript
import { aboutPageContent } from '../../data/pages/about-content.js';
import { siteRoutes } from '../../config/site-routes.js';

const quickStatsData = aboutPageContent.quickStats || [];

function animateCounter(stat) {
    const target = stat.target;
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        stat.current = Math.round(progress * target);
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

export const registerAboutStores = (Alpine) => {
    Alpine.store('aboutPage', {
        ...aboutPageContent,
        quickStats: quickStatsData.map(stat => ({ ...stat, current: 0 })),
        startCounting() {
            this.quickStats.forEach(stat => animateCounter(stat));
        },
        navigate(e, id) {
            if (e) e.preventDefault();

            const targetPage = this.subPages.find((page) => page.id === id);
            const targetUrl = targetPage?.link || siteRoutes.about;
            window.location.assign(targetUrl);
        },
        subPages: aboutPageContent.subPages || []
    });
};
```

---

### Fix 5: Add `observeElement()` global function for Alpine

**Problem:** `about/overview.html` and `about/partnership/content.html` call `x-init="observeElement($el)"` but this function is never defined, causing `ReferenceError`.

**File:** `src/features/reveal-sections.js`

Add an `observeElement` export and make it globally available. Read the current file first, then add this function:

```javascript
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
```

And in `src/main.js`, add after the other feature imports:
```javascript
import { observeElement } from './features/reveal-sections.js';
```

And in the `bootstrap()` function, before `Alpine.start()`:
```javascript
window.observeElement = observeElement;
```

---

### Fix 6: Fix `about/partnership/content.html` wrong property names

**File:** `src/fragments/pages/about/partnership/content.html`

Line 14 references `$store.aboutPage.partnerships.subTextAr` and `subTextEn`. Since we added `subTextAr/En` to the data in Fix 4, this is now resolved. No HTML change needed.

---

## HIGH PRIORITY FIXES

### Fix 7: Wrong section ID in `contact/channels.html`

**File:** `src/fragments/pages/contact/channels.html`

Line 1: Change `id="admissions-support"` to `id="contact-channels"`

---

### Fix 8: Hardcoded English "view more" in `about/partnership/content.html`

**File:** `src/fragments/pages/about/partnership/content.html`

Lines 58-60:

**Find:**
```html
        <div
            class="px-5 text-center  mt-10  py-3 w-fit rounded-[8px] bg-spu-blue text-white mx-auto hover:bg-spu-red transition-colors duration-300  cursor-pointer">
            view more</div>
```

**Replace with:**
```html
        <a href="/news.html"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-spu-blue text-white hover:bg-spu-red transition-colors duration-300 font-bold text-sm uppercase tracking-wider">
            <span x-text="$store.app.currentLang === 'ar' ? 'عرض المزيد' : 'View More'"></span>
            <i class="fas fa-arrow-right rtl:rotate-180 text-xs"></i>
        </a>
```

---

### Fix 9: Fix `page-loader.js` race condition

**File:** `src/loader/page-loader.js`

**Find (lines 39-49):**
```javascript
    if (pageConfig.fragments && pageConfig.fragments.length > 0) {
        const mainElement = document.querySelector('main[data-page-content]');
        if (mainElement) {
            for (const fragmentPath of pageConfig.fragments) {
                fragmentPromises.push(
                    fetchFragment(fragmentPath).then(html => {
                        mainElement.innerHTML += html;
                    })
                );
            }
        }
    }
```

**Replace with:**
```javascript
    if (pageConfig.fragments && pageConfig.fragments.length > 0) {
        const mainElement = document.querySelector('main[data-page-content]');
        if (mainElement) {
            const fragmentResults = await Promise.all(
                pageConfig.fragments.map(fragmentPath => fetchFragment(fragmentPath))
            );
            const combinedHtml = fragmentResults.join('\n');
            mainElement.innerHTML = combinedHtml;
        }
    }
```

Note: This changes the function from pushing promises to the `fragmentPromises` array to awaiting them separately. The `Promise.all(fragmentPromises)` on line 58 will still await header and footer, and main content is inserted atomically.

The full revised function:

```javascript
async function loadPageFragments(pageName) {
    const pageConfig = pages.find(p => p.name === pageName);

    if (!pageConfig) {
        console.error(`Page configuration not found for: ${pageName}`);
        return;
    }

    const fragmentPromises = [];

    fragmentPromises.push(
        fetchFragment(layout.header).then(html => {
            injectFragment('header', html);
        })
    );

    fragmentPromises.push(
        fetchFragment(layout.footer).then(html => {
            injectFragment('footer', html);
        })
    );

    if (pageConfig.fragments && pageConfig.fragments.length > 0) {
        const mainElement = document.querySelector('main[data-page-content]');
        if (mainElement) {
            const fragmentResults = await Promise.all(
                pageConfig.fragments.map(fragmentPath => fetchFragment(fragmentPath))
            );
            const combinedHtml = fragmentResults.join('\n');
            mainElement.innerHTML = combinedHtml;
        }
    }

    await Promise.all(fragmentPromises);
}
```

---

### Fix 10: Add `[x-cloak]` CSS rule

**File:** `src/style.css`

Add after line 1 (`@import "tailwindcss";`):

```css
[x-cloak] { display: none !important; }
```

This ensures any element with `x-cloak` is hidden until Alpine.js processes it. Then add `x-cloak` to key elements that use `x-html` to prevent raw HTML from flashing as text before Alpine initializes.

**Files to add `x-cloak` to (these use `x-html` for rendering HTML content):**

1. `src/fragments/pages/home/events.html` — Add `x-cloak` to the section element (line 1)
2. `src/fragments/pages/home/news.html` — Add `x-cloak` to the section element (line 1)
3. `src/fragments/pages/about/overview.html` — Add `x-cloak` to the section element (line 1)
4. `src/fragments/pages/about/partnership/content.html` — Add `x-cloak` to the section element (line 1)
5. `src/fragments/pages/about/history/content.html` — Add `x-cloak` to the section element
6. `src/fragments/layout/footer.html` — Add `x-cloak` to the footer element (line 1)

For each, find the opening tag and add `x-cloak` as an attribute. Example for `events.html`:

**Find:** `<section x-data="calendarApp()"`
**Replace with:** `<section x-cloak x-data="calendarApp()"`

---

### Fix 11: Change `x-html` to `x-text` on plain-text strings

These files use `x-html` for values that are plain text (no HTML markup):

1. **`src/fragments/pages/student-life/hero.html` line ~13:**
   Find: `x-html="metric.value"` → Replace with: `x-text="metric.value"`

2. **`src/fragments/pages/services/hero.html` line ~14:**
   Find: `x-html="metric.value"` → Replace with: `x-text="metric.value"`

3. **`src/fragments/pages/news/hero.html` line ~13:**
   Find: `x-html="metric.value"` → Replace with: `x-text="metric.value"`

---

### Fix 12: Fix non-standard Tailwind sizes

**File:** `src/fragments/pages/about/overview.html` line 1

Find: `class="relative py-24 overflow-hidden bg-white font-hacen"` — This is fine (py-24 is valid).

Check if `py-18` actually exists. If found anywhere, replace with `py-[4.5rem]`.

**File:** `src/fragments/pages/faculties/catalog.html` line ~16

Find: `class="h-18 w-18"` → Replace with: `class="h-[4.5rem] w-[4.5rem]"`

---

## LOW PRIORITY FIXES

### Fix 13: Remove duplicate Swiper CSS load in `about/history/content.html`

**File:** `src/fragments/pages/about/history/content.html`

Line 2 has `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />`. This is also loaded dynamically in the x-init. Remove line 2.

### Fix 14: CSS cleanup

**File:** `src/styles/heroes.css`

Lines 43-48, fix indentation of `.home-hero__inner`:
```css
    .home-hero__inner {
        display: grid;
        align-items: end;
        gap: 2rem;
        min-height: clamp(46rem, 100vh, 58rem);
        padding-bottom: clamp(13rem, 22vw, 10rem);
        padding-top: clamp(16rem, 8vw, 16rem);
    }
```

Line 32: Replace 8-digit hex with rgba:
```css
    .home-hero__overlay {
        background: rgba(32, 39, 89, 0.463);
    }
```

**File:** `src/styles/stats.css`

Line ~73: Fix space before semicolon:
Find: `background:white ;` → Replace with: `background: white;`

Lines 226-231: Move the `prefers-reduced-motion` block inside `@layer components` (before the closing `}`).

**File:** `src/style.css`

Line 8: The import `@import "./styles/honor-slider.css";` points to an empty file. This is harmless but can be removed if desired. Optionally add content to `honor-slider.css` or leave the import (it's a no-op).

**File:** `src/styles/foundation.css`

Lines ~38 and ~49: `--font-hacen` is declared in both `:root` and `@theme`. This is intentional (one for CSS custom property usage, one for Tailwind utility generation). Leave as-is.

---

## EXECUTION CHECKLIST

After applying all fixes:

1. Run `npm run validate:pages` to verify page configuration
2. Run `npm run generate:pages` to regenerate page shells (already done)
3. Run `npm run dev` and manually verify:
   - Home page loads without visible code text
   - About page hero displays correctly
   - About → Partnership page renders cards with logos and descriptions
   - About → Overview page stats counter animates
   - All pages header and footer render correctly (no raw Alpine expressions visible)
   - Language toggle (EN/AR) works on all pages

---

## SUMMARY

| # | File(s) | Severity | Description |
|---|---------|----------|-------------|
| 1 | All root HTML pages | CRITICAL | ✅ Regenerated - broken header tags fixed |
| 2 | about.html | CRITICAL | ✅ Regenerated - duplicate footer removed |
| 3 | about/overview.html | CRITICAL | Fix broken x-init with escaped quotes |
| 4 | about/overview.html | CRITICAL | Add missing closing </div> |
| 5 | about-content.js | CRITICAL | Add missing hero data, quickStats, partnership details |
| 6 | reveal-sections.js + main.js | CRITICAL | Add observeElement() global function |
| 7 | about-stores.js | HIGH | Add startCounting() and quickStats to store |
| 8 | contact/channels.html | HIGH | Fix wrong section ID |
| 9 | about/partnership/content.html | HIGH | Fix hardcoded English text |
| 10 | page-loader.js | MEDIUM | Fix innerHTML += race condition |
| 11 | style.css + 6 fragments | MEDIUM | Add x-cloak CSS and attributes |
| 12 | 3 hero files | MEDIUM | Change x-html to x-text for plain text |
| 13 | faculties/catalog.html | MEDIUM | Fix h-18 w-18 → h-[4.5rem] |
| 14 | about/history/content.html | LOW | Remove duplicate Swiper CSS |
| 15 | heroes.css, stats.css | LOW | CSS cleanup |