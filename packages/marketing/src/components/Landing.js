import React from 'react';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <p style={{ textAlign: 'center', color: '#6c757d' }}>
      {'Copyright © '}
      <Link to="/" style={{ color: 'inherit' }}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '64px 0' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Home Page</h1>
            <p>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
            </p>
            <div style={{ marginTop: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <Link to="/pricing">
                  <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                    Pricing
                  </button>
                </Link>
                <Link to="/pricing">
                  <button style={{ padding: '8px 16px', backgroundColor: '#fff', color: '#007bff', border: '1px solid #007bff', borderRadius: '4px' }}>
                    Pricing
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div style={{ padding: '64px 0', maxWidth: '1200px', margin: '0 auto' }}>
          {/* End hero unit */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            {cards.map((card) => (
              <div key={card} style={{ flex: '1 1 calc(33.333% - 32px)', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ paddingTop: '56.25%', backgroundImage: 'url(https://source.unsplash.com/random)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div style={{ flexGrow: 1, padding: '16px' }}>
                    <h2>Heading</h2>
                    <p>This is a media card. You can use this section to describe the content.</p>
                  </div>
                  <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                      View
                    </button>
                    <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer style={{ backgroundColor: '#f8f9fa', padding: '64px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <h6>Footer</h6>
          <p style={{ color: '#6c757d' }}>Something here to give the footer a purpose!</p>
          <Copyright />
        </div>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
