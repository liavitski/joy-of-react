import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const data = [
  { name: 'Aisha', grade: 89 },
  { name: 'Bruno', grade: 55 },
  { name: 'Carlos', grade: 68 },
];

function ContactCard() {
  
}

const Nelements = data.map((contact) => {
  <ContactCard
    name={contact.name}
    job={contact.job}
    email={contact.email}
  />;
});

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
