import React from 'react';
import './styles.css'; // Import the CSS file

const partners = [
  {
    id: 1,
    name: 'Confusion',
    image: '/5.jpg', // Image paths from the public folder
    link: 'https://www.canva.com/design/DAGUFNsm9pg/VEyhceBoxcQPPL3hVhOONw/view?utm_content=DAGUFNsm9pg&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  },
  {
    id: 2,
    name: 'Angry',
    image: '/3.jpg',
    link: 'https://www.canva.com/design/DAGUFJ62rxs/hWcb55hhnGoaCgUmNIoUPA/view?utm_content=DAGUFJ62rxs&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  },
  {
    id: 3,
    name: 'Anxious',
    image: '/2.jpg',
    link: 'https://www.canva.com/design/DAGUFKuWplc/jLh3RJCNVAptfiX28wWfWQ/view?utm_content=DAGUFKuWplc&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  },
  {
    id: 4,
    name: 'Awkward',
    image: '/4.jpg',
    link: 'https://www.canva.com/design/DAGUFLOA8-c/ltc5NtLskWXMh6v3iW5dyg/view?utm_content=DAGUFLOA8-c&utm_campaign=designshare&utm_medium=link&utm_source=editor',
  },
];

const Partners = () => {
  return (
    <div className="body">
      <div className="container">
        {partners.map((partner) => (
          <div key={partner.id} className="card">
            <img className="background" src={partner.image} alt={partner.name} />
            <div className="card-content">
              <div className="profile-image">
                <svg>
                  <line x1="6" x2="10" y1="11" y2="11" />
                  <line x1="8" x2="8" y1="9" y2="13" />
                  <line x1="15" x2="15.01" y1="12" y2="12" />
                  <line x1="18" x2="18.01" y1="10" y2="10" />
                  <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                </svg>
              </div>
              <h3 className="title">
                <a style={{ textDecoration: 'none' }} href={partner.link}>
                  {partner.name}
                </a>
              </h3>
            </div>
            <div className="backdrop"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
