import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <SEO
        title="Страница не найдена — ЭлектроТочка34"
        description="Запрошенная страница не найдена."
        canonical="https://example.com/404"
        og={{
          title: "Страница не найдена — ЭлектроТочка34",
          description: "Запрошенная страница не найдена.",
          type: 'website',
          image: 'https://example.com/logo192.png'
        }}
        twitter={{
          card: 'summary_large_image',
          title: "Страница не найдена — ЭлектроТочка34",
          description: "Запрошенная страница не найдена.",
          image: 'https://example.com/logo192.png'
        }}
        robots="noindex, nofollow"
      />
      <h1>404 - Страница не найдена</h1>
      <p>Эта страница не существует. Перейдите на <Link to='/'>главную страницу</Link>.</p>
    </div>
  );
}

export default NotFound;
