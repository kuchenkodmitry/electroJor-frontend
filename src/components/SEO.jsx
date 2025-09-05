import { useEffect } from 'react';

function updateMetaTag(name, content, attr = 'name') {
  if (!content) return;
  let element = document.querySelector(`meta[${attr}='${name}']`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateLinkTag(rel, href) {
  if (!href) return;
  let element = document.querySelector(`link[rel='${rel}']`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function SEO({ title, description, canonical, og = {}, twitter = {}, robots }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      updateMetaTag('description', description);
    }

    if (robots) {
      updateMetaTag('robots', robots);
    }

    if (canonical) {
      updateLinkTag('canonical', canonical);
    }

    // Open Graph tags
    if (og.title) updateMetaTag('og:title', og.title, 'property');
    if (og.description) updateMetaTag('og:description', og.description, 'property');
    if (og.image) updateMetaTag('og:image', og.image, 'property');
    if (og.type) updateMetaTag('og:type', og.type, 'property');

    // Twitter cards
    if (twitter.card) updateMetaTag('twitter:card', twitter.card);
    if (twitter.title) updateMetaTag('twitter:title', twitter.title);
    if (twitter.description) updateMetaTag('twitter:description', twitter.description);
    if (twitter.image) updateMetaTag('twitter:image', twitter.image);
  }, [title, description, canonical, og, twitter, robots]);

  return null;
}

export default SEO;
