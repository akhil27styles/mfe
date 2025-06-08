import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
  return (
    <p style={{ textAlign: 'center', color: '#6c757d' }}>
      {'Copyright © '}
      <a href="https://material-ui.com/" style={{ color: 'inherit' }}>
        Your Website
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Pricing() {
  return (
    <React.Fragment>
      {/* Hero unit */}
      <section style={{ padding: '64px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1>Pricing</h1>
          <p>
            Quickly build an effective pricing table for your potential customers with this layout.
            It&apos;s built with default Material-UI components with little customization.
          </p>
        </div>
      </section>
      {/* End hero unit */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
          {tiers.map((tier) => (
            <div key={tier.title} style={{ flex: '1 1 calc(33.333% - 32px)', boxSizing: 'border-box' }}>
              <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#f8f9fa', padding: '16px', textAlign: 'center' }}>
                  <h2>{tier.title}</h2>
                  {tier.subheader && <h3>{tier.subheader}</h3>}
                </div>
                <div style={{ padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>${tier.price}</div>
                  <div style={{ fontSize: '16px', color: '#6c757d' }}>/mo</div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tier.description.map((line) => (
                      <li key={line} style={{ margin: '8px 0' }}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: '16px', textAlign: 'center' }}>
                  <RouterLink to="/auth/signup">
                    <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                      {tier.buttonText}
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer style={{ backgroundColor: '#f8f9fa', padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly' }}>
          {footers.map((footer) => (
            <div key={footer.title} style={{ flex: '1 1 25%', boxSizing: 'border-box' }}>
              <h6>{footer.title}</h6>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {footer.description.map((item) => (
                  <li key={item}>
                    <a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Copyright />
        </div>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
