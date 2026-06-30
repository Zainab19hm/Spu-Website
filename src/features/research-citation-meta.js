/**
 * Injects Google Scholar and Dublin Core citation meta tags
 * into <head> for publication detail pages.
 *
 * NFR-SEO-06 compliance: citation_title, citation_author, citation_publication_date,
 * citation_journal_title, citation_doi, citation_pdf_url, citation_abstract,
 * dc.identifier, dc.title, dc.creator, dc.date, dc.description, dc.source
 */

function slugToPageName(slug) {
    return 'publication-' + slug;
}

function findPublication(slug) {
    const store = window.Alpine?.store('researchPage');
    if (!store?.publications?.items) return null;
    return store.publications.items.find(p => p.slug === slug);
}

function extractSlugFromUrl() {
    const path = window.location.pathname;
    const match = path.match(/\/research\/publications\/([^/]+)\//);
    return match ? match[1] : null;
}

function setMeta(name, content, attrs = {}) {
    if (!content) return;
    const existing = document.querySelector(`meta[name="${name}"]`);
    if (existing) {
        existing.setAttribute('content', content);
        return;
    }
    const meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    Object.entries(attrs).forEach(([k, v]) => meta.setAttribute(k, v));
    document.head.appendChild(meta);
}

function setMetaProperty(property, content) {
    if (!content) return;
    const existing = document.querySelector(`meta[property="${property}"]`);
    if (existing) {
        existing.setAttribute('content', content);
        return;
    }
    const meta = document.createElement('meta');
    meta.setAttribute('property', property);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
}

function setJsonLd(jsonLd) {
    const id = 'research-citation-jsonld';
    let script = document.getElementById(id);
    if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
}

export function initResearchCitationMeta() {
    const slug = extractSlugFromUrl();
    if (!slug) return;

    const pub = findPublication(slug);
    if (!pub) return;

    const siteUrl = window.location.origin;
    const pageUrl = window.location.href;
    const isAr = document.documentElement.lang === 'ar' || document.querySelector('html')?.getAttribute('lang') === 'ar';
    const lang = isAr ? 'Ar' : 'En';

    const title = pub[`title${lang}`] || pub.titleEn;
    const author = pub[`author${lang}`] || pub.authorEn;
    const summary = pub[`summary${lang}`] || pub.summaryEn;
    const year = pub.year;
    const doi = pub.doi;
    const type = pub[`type${lang}`] || pub.typeEn;
    const faculty = pub[`faculty${lang}`] || pub.facultyEn;
    const keywords = pub[`keywords${lang}`] || pub.keywordsEn || [];

    // Google Scholar citation meta tags
    setMeta('citation_title', title);
    setMeta('citation_author', author);
    setMeta('citation_publication_date', year);
    setMeta('citation_journal_title', faculty);
    setMeta('citation_doi', doi);
    setMeta('citation_language', isAr ? 'ar' : 'en');
    setMeta('citation_online_date', year);
    setMeta('citation_keywords', keywords.join(', '));

    if (pub.isOpenAccess) {
        setMeta('citation_pdf_url', `${siteUrl}/research/publications/${slug}/`);
    }

    if (summary) {
        setMeta('citation_abstract', summary);
    }

    // Dublin Core meta tags
    setMeta('DC.title', title);
    setMeta('DC.creator', author);
    setMeta('DC.date', year);
    setMeta('DC.description', summary);
    setMeta('DC.identifier', `doi:${doi}`, { 'scheme': 'DOI' });
    setMeta('DC.source', siteUrl);
    setMeta('DC.type', type);
    setMeta('DC.language', isAr ? 'ar' : 'en');
    setMeta('DC.subject', keywords.join('; '));

    if (pub.isOpenAccess) {
        setMeta('DC.rights', 'open-access');
    }

    // JSON-LD structured data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ScholarlyArticle',
        headline: title,
        author: {
            '@type': 'Person',
            name: author
        },
        datePublished: `${year}`,
        description: summary,
        doi: `https://doi.org/${doi}`,
        url: pageUrl,
        keywords: keywords,
        publisher: {
            '@type': 'Organization',
            name: 'Syrian Private University',
            url: siteUrl
        },
        isAccessibleForFree: true,
        inLanguage: isAr ? 'ar' : 'en',
        about: {
            '@type': 'Thing',
            name: faculty
        }
    };

    if (pub.isOpenAccess) {
        jsonLd.license = 'https://creativecommons.org/licenses/by/4.0/';
    }

    setJsonLd(jsonLd);
}
