const assets = {
  homeHero: '/assets/web/home-hero.jpg',
  homeRepairs: '/assets/web/home-highlight-diagnostics.jpg',
  homeServicing: '/assets/web/home-highlight-tyres.jpg',
  homeTyres: '/assets/web/home-highlight-store.jpg',
  mario: '/assets/web/mario-sign-home.jpg',
  marioService: '/assets/web/mario-sign.jpg',
  storefront: '/assets/web/storefront-home.jpg',
  storefrontWide: '/assets/web/storefront-wide.jpg',
  servicesWorkshop: '/assets/web/services-feature-mechanical.jpg',
  tyreRack: '/assets/web/services-feature-tyre-shop.jpg',
  tyreServices: '/assets/web/services-tyre-services.jpg',
  mechanicalRepairs: '/assets/web/services-mechanical-repairs.jpg',
  maintenance: '/assets/web/services-maintenance.jpg',
  galleryEngine: '/assets/web/gallery-engine.jpg',
  galleryFitting: '/assets/web/gallery-technicians.jpg',
  galleryMaxxis: '/assets/web/gallery-shop-exterior.jpg',
  contactHero: '/assets/web/contact-hero.jpg',
  blogPromo: '/assets/web/blog-motorcycle-repair.jpg',
  redCar: '/assets/web/blog-red-car.jpg',
  tyreWeights: '/assets/web/blog-tyre-weights.jpg',
  engineOil: '/assets/web/blog-oil-service.jpg',
  mapHome: '/assets/web/map-home.jpg',
  mapContact: '/assets/web/map-contact.jpg'
};

const assetDimensions = {
  [assets.homeHero]: [1920, 1280],
  [assets.homeRepairs]: [381, 219],
  [assets.homeServicing]: [381, 219],
  [assets.homeTyres]: [381, 219],
  [assets.mario]: [578, 473],
  [assets.marioService]: [400, 264],
  [assets.storefront]: [1166, 405],
  [assets.storefrontWide]: [812, 432],
  [assets.servicesWorkshop]: [400, 264],
  [assets.tyreRack]: [400, 264],
  [assets.tyreServices]: [400, 280],
  [assets.mechanicalRepairs]: [400, 280],
  [assets.maintenance]: [400, 280],
  [assets.galleryEngine]: [812, 432],
  [assets.galleryFitting]: [400, 432],
  [assets.galleryMaxxis]: [400, 432],
  [assets.contactHero]: [1920, 2880],
  [assets.blogPromo]: [606, 544],
  [assets.redCar]: [596, 357],
  [assets.tyreWeights]: [596, 357],
  [assets.engineOil]: [596, 357],
  [assets.mapHome]: [578, 367],
  [assets.mapContact]: [606, 383]
};

const image = (src, alt, className = '', priority = false) => {
  const classAttribute = className ? ` class="${className}"` : '';
  const loading = priority ? ' loading="eager" fetchpriority="high"' : ' loading="lazy"';
  const [width, height] = assetDimensions[src] || [1200, 800];
  return `<img${classAttribute} src="${src}" alt="${alt}" width="${width}" height="${height}"${loading} decoding="async">`;
};

const googleMapsPlaceUrl = 'https://www.google.com/maps/search/?api=1&amp;query=GB+Autos+and+Tyres%2C+376+Staines+Road%2C+Feltham+TW14+8BT';
const googleMapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&amp;destination=GB+Autos+and+Tyres%2C+376+Staines+Road%2C+Feltham+TW14+8BT&amp;travelmode=driving';

const map = (fallbackImage) => `
  <div class="map-frame">
    ${image(fallbackImage, '', 'map-fallback')}
    <iframe
      title="Map showing GB Autos and Tyres at 376 Staines Road, Feltham"
      src="https://www.google.com/maps?q=GB+Autos+and+Tyres,+376+Staines+Road,+Feltham+TW14+8BT&amp;output=embed"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
  <div class="map-actions" aria-label="Map actions">
    <a class="map-action map-action-primary" href="${googleMapsPlaceUrl}" target="_blank" rel="noopener noreferrer">
      Open in Google Maps <span aria-hidden="true">↗</span>
    </a>
    <a class="map-action" href="${googleMapsDirectionsUrl}" target="_blank" rel="noopener noreferrer">
      Get directions <span aria-hidden="true">→</span>
    </a>
  </div>`;

const locationSection = ({ heading = 'Find us in Feltham', tyreWord = 'tyres', hoursLabel = 'Opening hours' } = {}) => `
  <section class="location-section page-section">
    <div class="section-shell location-grid">
      <div class="location-copy">
        <p class="eyebrow">Visit the workshop</p>
        <h2>${heading}</h2>
        <p>Drop in for reliable repairs and ${tyreWord} at our Staines Road garage. We are open seven days a week.</p>
        <dl class="location-details">
          <div>
            <dt>Address</dt>
            <dd>376 Staines Rd, Feltham TW14 8BT</dd>
          </div>
          <div>
            <dt>${hoursLabel}</dt>
            <dd>Monday to Saturday 09:00–18:30<br>Sunday 10:00–17:00</dd>
          </div>
        </dl>
        <div class="location-actions">
          <a class="button button-secondary" href="${googleMapsDirectionsUrl}" target="_blank" rel="noopener noreferrer">Get directions</a>
          <a class="text-link" href="tel:02088442156">Call 020 8844 2156 <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="location-map-wrap">
        <p class="location-coordinate" aria-hidden="true">51.4497° N&nbsp;&nbsp; 0.4183° W</p>
        ${map(heading === 'Visit our Feltham workshop' ? assets.mapContact : assets.mapHome)}
      </div>
    </div>
  </section>`;

const homeHighlights = [
  {
    title: 'Diagnostics & repairs',
    label: 'Workshop diagnostics',
    image: assets.homeRepairs,
    alt: 'Vehicle diagnostics and repair equipment in a workshop',
    text: 'Expert repairs for all types of vehicle issues, ensuring top performance and safety.'
  },
  {
    title: 'Servicing & maintenance',
    label: 'Routine care',
    image: assets.homeServicing,
    alt: 'Tyres and automotive equipment in a service garage',
    text: 'Comprehensive servicing packages to keep your vehicle running smoothly and efficiently.'
  },
  {
    title: 'Tyres & fitting',
    label: 'Tyre care',
    image: assets.homeTyres,
    alt: 'GB Autos and Tyres workshop and service bays',
    text: 'Professional tyre fitting, balancing and alignment for dependable everyday performance.'
  }
];

const home = () => `
  <section class="home-hero">
    ${image(assets.homeHero, 'Piles of car tyres', 'home-hero-image', true)}
    <div class="home-hero-shade" aria-hidden="true"></div>
    <div class="section-shell home-hero-content">
      <div class="home-hero-copy">
        <p class="eyebrow">Independent garage · Feltham</p>
        <h1>Tyres. Repairs. <br><span>Done right.</span></h1>
        <p>Reliable tyre fitting, servicing and mechanical repairs from a local team that has kept Feltham moving since 2009.</p>
        <div class="button-group">
          <a class="button button-primary" href="tel:02088442156">Call 020 8844 2156</a>
          <a class="button button-ghost-light" href="/services">Explore services</a>
        </div>
        <ul class="hero-proof-list" aria-label="Garage highlights">
          <li><strong>7 days</strong><span>Open every week</span></li>
          <li><strong>Since 2009</strong><span>Serving local drivers</span></li>
          <li><strong>Tyres + repairs</strong><span>One trusted garage</span></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="home-services page-section" aria-labelledby="home-services-heading">
    <div class="section-shell">
      <header class="section-intro split-intro">
        <div>
          <p class="eyebrow">What we do</p>
          <h2 id="home-services-heading">Practical help for every mile.</h2>
        </div>
        <p>From a fresh set of tyres to fault-finding and routine servicing, our workshop handles the work that keeps your vehicle safe and dependable.</p>
      </header>
      <div class="home-highlight-grid">
        ${homeHighlights.map((item) => `
          <article class="home-highlight">
            <div class="home-highlight-media">${image(item.image, item.alt)}</div>
            <div class="home-highlight-copy">
              <p class="card-index">${item.label}</p>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </div>
          </article>`).join('')}
      </div>
      <a class="text-link section-link" href="/services">See all garage services <span aria-hidden="true">→</span></a>
    </div>
  </section>

  <section class="about-section page-section">
    <div class="section-shell split-section">
      <div class="about-copy">
        <p class="eyebrow">About GB Autos &amp; Tyres</p>
        <h2>Your local garage since 2009.</h2>
        <p class="lead">Based in East Bedfont and open seven days a week, we are more than a tyre shop. We are a full-service garage built around straightforward advice and dependable workmanship.</p>
        <p>GB Autos and Tyres based in East Bedfont, London and established in 2009, is more than just a garage. We're a seven-days-a-week hub, known for delivering high-quality, comprehensive vehicle services.</p>
        <p>Our skilled team provides a broad range of offerings, from tyre replacement and informed advice, to body part repairs, brake servicing, and thorough general maintenance. We're dedicated to ensuring every vehicle that leaves our shop is safe and running smoothly.</p>
      </div>
      <figure class="about-media">
        ${image(assets.mario, 'GB Autos and Tyres local business display in Feltham')}
        <figcaption><span>Local business</span> Proudly serving Feltham and East Bedfont.</figcaption>
      </figure>
    </div>
  </section>

  <section class="trusted-section page-section">
    <div class="section-shell">
      <div class="trusted-heading-grid">
        <div>
          <p class="eyebrow">Real people. Real workshop.</p>
          <h2>A garage you can come back to.</h2>
        </div>
        <div class="trusted-summary">
          <p>We provide reliable mechanical services and durable tyres for local drivers. Clear advice, practical options and a team focused on getting the job done properly.</p>
          <div class="stats" aria-label="Garage statistics">
            <div class="stat"><strong>250+</strong><span>Services completed</span></div>
            <div class="stat"><strong>150+</strong><span>Customers served</span></div>
            <div class="stat"><strong>7 days</strong><span>Open each week</span></div>
          </div>
        </div>
      </div>
      <figure class="trusted-media">
        ${image(assets.storefront, 'GB Autos and Tyres garage and tyre bay on Staines Road')}
        <figcaption>376 Staines Road, Feltham</figcaption>
      </figure>
    </div>
  </section>

  ${locationSection()}`;

const serviceFeatures = [
  {
    label: 'Mechanical',
    title: 'Expert Mechanical Services',
    text: 'Our skilled technicians offer comprehensive mechanical services to keep your vehicle running smoothly.',
    image: assets.servicesWorkshop,
    alt: 'Spacious automotive repair shop with vehicles and blue lifts'
  },
  {
    label: 'Tyres',
    title: 'Durable Tyre Options',
    text: 'Choose from a wide range of durable tyres designed for performance and longevity.',
    image: assets.marioService,
    alt: 'GB Autos and Tyres local business display in Feltham'
  },
  {
    label: 'Fitting',
    title: 'Tyres for every budget',
    text: 'Straightforward advice, professional fitting and dependable options for your vehicle and driving needs.',
    image: assets.tyreRack,
    alt: 'Tyres displayed above an Express Tyre Shop sign'
  }
];

const serviceCards = [
  {
    label: 'Tyre care',
    title: 'Tyre Services',
    text: 'We provide a wide range of durable tyres suitable for all vehicles and driving conditions.',
    image: assets.tyreServices,
    alt: 'Motorcycle and tyres outside a small repair workshop'
  },
  {
    label: 'Mechanical',
    title: 'Mechanical Repairs',
    text: "Trust our skilled technicians for reliable mechanical repairs to ensure your vehicle's optimal performance.",
    image: assets.mechanicalRepairs,
    alt: 'Vehicles and equipment inside an automotive repair garage'
  },
  {
    label: 'Maintenance',
    title: 'Maintenance Services',
    text: 'Visit us for comprehensive vehicle maintenance and repair services tailored to your needs.',
    image: assets.maintenance,
    alt: 'Mechanics working with vehicle tyres in a garage'
  }
];

const services = () => `
  <section class="services-hero page-section">
    <div class="section-shell">
      <header class="services-intro">
        <div>
          <p class="eyebrow">Tyres &amp; mechanical work</p>
          <h1>The workshop for the whole vehicle.</h1>
        </div>
        <div class="services-intro-copy">
          <p>From tyre repairs and replacement to servicing, diagnostics and mechanical work, we help keep your vehicle safe, smooth and ready for the road.</p>
          <a class="button button-primary" href="/contact">Ask about a service</a>
        </div>
      </header>
      <div class="service-feature-grid">
        ${serviceFeatures.map((item) => `
          <article class="service-feature-card">
            <div class="service-feature-media">${image(item.image, item.alt)}</div>
            <div class="service-feature-copy">
              <p class="card-index">${item.label}</p>
              <h2>${item.title}</h2>
              <p>${item.text}</p>
            </div>
          </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="services-list-section page-section">
    <div class="section-shell">
      <header class="section-intro split-intro">
        <div>
          <p class="eyebrow">Core services</p>
          <h2>Everything your car needs. Nothing it doesn’t.</h2>
        </div>
        <p>Expert tyre fitting and mechanical services delivered with clear advice and a practical approach.</p>
      </header>
      <div class="service-card-grid">
        ${serviceCards.map((item) => `
          <article class="service-card">
            <div class="service-card-media">${image(item.image, item.alt)}</div>
            <div class="service-card-copy">
              <p class="card-index">${item.label}</p>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
              <a class="text-link" href="/contact">Ask about this service <span aria-hidden="true">→</span></a>
            </div>
          </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="services-gallery page-section">
    <div class="section-shell">
      <header class="section-intro gallery-intro">
        <p class="eyebrow">Inside the garage</p>
        <h2>Work you can see.</h2>
        <p>A look at our Feltham workshop, tyre fitting and mechanical services.</p>
      </header>
      <div class="gallery-grid">
        ${image(assets.galleryEngine, 'Close-up of a red vehicle engine bay', 'gallery-wide')}
        ${image(assets.galleryFitting, 'Technicians fitting a tyre in the workshop', 'gallery-small')}
        ${image(assets.galleryMaxxis, 'GB Autos and Tyres storefront with Maxxis tyre banner', 'gallery-small')}
        ${image(assets.storefrontWide, 'GB Autos and Tyres garage and tyre bay on Staines Road', 'gallery-wide')}
      </div>
    </div>
  </section>`;

const contact = () => `
  <section class="contact-hero">
    ${image(assets.contactHero, 'Workshop technician producing sparks while working', 'contact-hero-image', true)}
    <div class="contact-hero-shade" aria-hidden="true"></div>
    <div class="section-shell contact-hero-content">
      <header class="contact-intro">
        <p class="eyebrow">Get in touch</p>
        <h1>Let’s get you back on the road.</h1>
        <p>Tell us what your vehicle needs and our Feltham team will get back to you. For the quickest answer during opening hours, call the garage directly.</p>
        <a class="contact-phone" href="tel:02088442156">
          <span>Call the garage</span>
          <strong>020 8844 2156</strong>
        </a>
        <dl class="contact-quick-facts">
          <div><dt>Mon–Sat</dt><dd>09:00–18:30</dd></div>
          <div><dt>Sunday</dt><dd>10:00–17:00</dd></div>
        </dl>
      </header>
      <form class="contact-form" data-form="contact">
        <div class="form-heading">
          <p class="eyebrow">Send an enquiry</p>
          <h2>What can we help with?</h2>
          <p>Include a few details and your email address so we can reply.</p>
        </div>
        <div class="field">
          <label for="first-name">First name <span>(optional)</span></label>
          <input id="first-name" name="name" autocomplete="given-name" placeholder="e.g. Alex…">
        </div>
        <div class="field">
          <label for="contact-email">Email address <span>(required)</span></label>
          <input id="contact-email" name="email" type="email" autocomplete="email" spellcheck="false" placeholder="e.g. you@example.com…" required>
        </div>
        <div class="field">
          <label for="message">Message <span>(required)</span></label>
          <textarea id="message" name="message" placeholder="e.g. Ford Fiesta with a brake noise…" required></textarea>
        </div>
        <button class="button button-primary contact-submit" type="submit">Send enquiry <span aria-hidden="true">→</span></button>
      </form>
    </div>
  </section>

  ${locationSection({ heading: 'Visit our Feltham workshop', tyreWord: 'tyres and mechanical work', hoursLabel: 'Opening hours' })}`;

const posts = [
  {
    href: '/blog-post3',
    title: 'Best Cheap Cars for High Reliability',
    date: '7/6/2025',
    readTime: '4 min read',
    image: assets.redCar,
    alt: 'A red car parked outside an automotive workshop'
  },
  {
    href: '/blog-post2',
    title: 'All You Need to Know About Tyres',
    date: '7/6/2025',
    readTime: '4 min read',
    image: assets.tyreWeights,
    alt: 'A collection of black tyre weights and rusty chains'
  },
  {
    href: '/blog-post1',
    title: "10 Essential Tips to Improve Your Car's Reliability and Performance",
    date: '7/6/2025',
    readTime: '4 min read',
    image: assets.engineOil,
    alt: 'A person refilling motor oil in a car engine bay'
  },
  {
    href: '/blog-post',
    title: 'Essential Insights for Every Garage Visitor: Car Reliability, Tyres, and More',
    date: '7/6/2025',
    readTime: '8 min read',
    image: assets.redCar,
    alt: 'A red car parked outside an automotive workshop'
  }
];

const blog = () => `
  <section class="blog-hero page-section">
    <div class="section-shell blog-hero-grid">
      <div>
        <p class="eyebrow">Garage notes</p>
        <h1>Useful advice for the road ahead.</h1>
      </div>
      <p>Plain-English guides on tyres, maintenance and choosing a reliable vehicle—written to help local drivers make informed decisions.</p>
    </div>
  </section>

  <section class="blog-list page-section">
    <div class="section-shell blog-grid">
      ${posts.map((post, index) => `
        <article class="blog-card">
          <a class="blog-card-link" href="${post.href}">
            <div class="blog-card-media">${image(post.image, post.alt)}</div>
            <div class="blog-card-copy">
              <p class="card-index">${index === 1 ? 'Tyre guide' : 'Driver guide'}</p>
              <h2>${post.title}</h2>
              <p class="blog-card-meta"><time datetime="2025-06-07">${post.date}</time><span aria-hidden="true">·</span>${post.readTime}</p>
              <span class="blog-card-arrow" aria-hidden="true">↗</span>
            </div>
          </a>
        </article>`).join('')}
    </div>
  </section>

  <section class="blog-cta page-section">
    <div class="section-shell blog-cta-grid">
      <div class="blog-cta-copy">
        <p class="eyebrow">Need more than advice?</p>
        <h2>Bring it to the garage.</h2>
        <p>We provide reliable mechanical services and durable tyres for vehicles across Feltham. Tell us what is happening and we will help you plan the next step.</p>
        <div class="button-group">
          <a class="button button-primary" href="tel:02088442156">Call the garage</a>
          <a class="button button-ghost-light" href="/contact">Send an enquiry</a>
        </div>
      </div>
      <figure class="blog-cta-media">
        ${image(assets.blogPromo, 'A technician working on a small vehicle tyre in a workshop')}
      </figure>
    </div>
  </section>`;

const reliabilitySections = [
  {
    heading: 'Understanding Car Reliability',
    paragraphs: [
      "Car reliability matters when maintaining or buying a vehicle. Manufacturer reputation, build quality and a complete maintenance history all help indicate how dependably a car may perform over time.",
      'A vehicle serviced at the recommended intervals is generally easier to assess than one with missing records. Receipts and inspection notes can show whether important work was completed when it was needed.',
      'Engine, transmission and electrical issues can become expensive when servicing is neglected. Researching common problems and arranging a pre-purchase inspection can reveal risks that are not obvious during a brief viewing.',
      'An experienced mechanic can often identify developing faults, previous repair work and wear that a buyer may otherwise miss.',
      'Climate, driving frequency and the loads a vehicle carries also affect long-term reliability, so the right choice depends on how the car will actually be used.'
    ]
  },
  {
    heading: 'The Importance of Quality Tyres',
    paragraphs: [
      'Tyres are the only contact point between a car and the road. Their quality and condition affect braking, handling, comfort and fuel efficiency, especially when the weather is poor.',
      'Choose tyres for the conditions in which you drive. All-season, winter and performance tyres are designed around different temperatures, surfaces and vehicle demands.',
      'Pressure checks, rotation and balancing promote even wear and help tyres last longer. Incorrect pressure can reduce efficiency, weaken handling and raise the risk of damage.',
      'Choosing a suitable tyre and maintaining it consistently supports safety as well as day-to-day performance.'
    ]
  },
  {
    heading: 'Common Garage Services and What They Entail',
    paragraphs: [
      'Oil changes, brake repairs, alignment checks and diagnostic work are among the services that protect a vehicle from avoidable wear and help keep it safe on the road.',
      'Fresh oil protects moving engine parts from friction and heat. The correct replacement interval depends on the vehicle, mileage and oil specified by its manufacturer.',
      'Brake inspections cover pads, discs and fluid so that reduced stopping performance can be addressed promptly.',
      'Correct wheel alignment improves handling and tyre life, while diagnostic equipment helps technicians identify faults in modern electronic systems before they cause wider damage.'
    ]
  },
  {
    heading: 'The Value of Preventive Maintenance',
    paragraphs: [
      'Preventive maintenance helps find small concerns before they become disruptive or costly repairs. Fluid levels, battery condition, belts and hoses all benefit from regular checks.',
      'Engine oil, coolant, brake fluid and transmission fluid each support a critical system. Their level and condition should be checked at appropriate intervals.',
      'Battery terminals need to remain clean and secure, and testing can expose a weakening battery before it causes an unexpected breakdown.',
      'Cracked belts or deteriorating hoses can lead to leaks, overheating and loss of important engine functions, so visible wear deserves timely attention.',
      'A schedule based on mileage, driving conditions and the manufacturer’s recommendations keeps maintenance relevant to the individual vehicle rather than relying on guesswork.'
    ]
  },
  {
    heading: 'The Impact of Technology on Modern Garages',
    paragraphs: [
      'Modern diagnostic equipment allows technicians to locate both mechanical and electronic faults more quickly. Garages are also adapting their tools and training for electric and hybrid vehicles.',
      'Electric and hybrid vehicles require equipment capable of handling their high-voltage systems, software and manufacturer-specific diagnostic procedures.',
      'Workshop software and automated systems can improve scheduling, inventory and repair accuracy, leaving technicians more time to focus on service quality.',
      'Used well, these technologies reduce vehicle downtime and make complex repairs easier to explain and manage.'
    ]
  },
  {
    heading: 'Choosing the Right Garage: What to Look For',
    paragraphs: [
      'Look for relevant qualifications, clear pricing and consistently useful customer feedback. A trustworthy garage should explain the work, answer questions and make the scope of a repair easy to understand.',
      'Reviews can reveal patterns in workmanship, communication and the way a business handles unexpected problems.',
      'Ask what is included in an estimate and compare like-for-like work. Transparent pricing makes it easier to avoid surprises.',
      'Convenient location and practical arrangements while a car is being repaired may also influence the right choice.',
      'Technical ability and attentive customer service together make it easier to build a dependable long-term relationship with a garage.'
    ]
  },
  {
    heading: 'Staying Informed: Resources for Garage Visitors',
    paragraphs: [
      'Reputable automotive publications, owner communities and practical reference books can help drivers understand routine maintenance and common faults.',
      'Model-specific forums can be useful for recognising common symptoms, although advice should be checked before acting on it.',
      'Reference books and well-produced maintenance guides explain the basic systems in a vehicle and help owners ask more useful questions.',
      'The technicians working on a vehicle are also an important source of information. Asking for a clear explanation of a fault and the recommended repair helps owners make informed decisions.'
    ]
  }
];

const performanceSections = [
  {
    heading: 'Regular Maintenance: The Foundation of Reliability',
    paragraphs: [
      'A consistent maintenance schedule helps a car run smoothly and can extend its useful life. Oil changes, tyre rotations, brake inspections and fluid checks all reduce avoidable wear.',
      'Engine oil degrades as it works, so it should be replaced at the interval and specification given for the vehicle.',
      'Tyres should be inspected for pressure and uneven wear. Rotation can help distribute wear and preserve grip when the vehicle manufacturer recommends it.',
      'Braking components need attention before their performance falls, and coolant, transmission fluid and brake fluid should all remain at the correct condition and level.',
      'Taking care of these routine jobs can prevent minor issues from developing into major repairs.'
    ]
  },
  {
    heading: 'Quality Parts: Choosing the Right Components',
    paragraphs: [
      'Replacement parts need to suit the vehicle and the job. Original-equipment components offer known compatibility, while aftermarket parts vary and should be chosen from reputable manufacturers.',
      'Some aftermarket components can provide useful alternatives or performance benefits, but poor compatibility can undermine reliability.',
      'Filters, spark plugs and fluids also affect performance. Using suitable, good-quality consumables supports efficiency and protects the systems around them.',
      'Checking specifications and choosing established suppliers is worthwhile whenever a repair or upgrade depends on replacement parts.'
    ]
  },
  {
    heading: 'Driving Habits: How Your Style Affects Performance',
    paragraphs: [
      'Hard acceleration, sharp braking and excessive speed place extra stress on tyres, brakes and the engine. Smoother inputs generally reduce wear and can improve fuel economy.',
      'Progressive acceleration and braking make better use of momentum and place less repeated load on mechanical components.',
      'Maintaining a steady speed and avoiding unnecessary idling are simple ways to reduce strain while keeping everyday driving more predictable.',
      'Reviewing everyday habits can reveal small changes that support both fuel efficiency and long-term reliability.'
    ]
  },
  {
    heading: 'Upgrades and Modifications: Enhancing Performance Responsibly',
    paragraphs: [
      'Exhaust, suspension and engine-tuning changes can alter performance, but each modification needs to remain compatible with the rest of the vehicle.',
      'A freer-flowing exhaust may change power delivery and sound, while suspension components alter handling and ride quality. Both need to suit how the car is used.',
      'Engine software can increase power and torque, but poor calibration may place extra stress on the engine and transmission.',
      'Research the parts, consider road and noise regulations, and use experienced installers. A responsible upgrade should improve the intended characteristic without compromising reliability.'
    ]
  }
];

const tyreGuideSections = [
  {
    heading: 'Understanding Tyre Basics',
    paragraphs: [
      "Tyres are critical components of any vehicle, providing the necessary contact with the road surface, ensuring safety, and enhancing performance. Understanding the basics of tyres involves exploring their composition, structure, and types, which collectively contribute to their functionality and longevity.",
      "Most tyres are composed of various materials, including rubber, fabric, and steel. The outer layer typically consists of natural or synthetic rubber, which provides the essential grip on different road surfaces. Beneath the rubber, additional layers of fabric increase strength, enhance flexibility, and afford protection. Steel belts are often incorporated to improve durability and maintain tyre shape while under pressure. The intricate balance of these materials is fundamental in achieving the desired performance characteristics.",
      "The structure of a tyre includes several components, such as the tread, sidewall, and bead. The tread pattern is pivotal as it dictates traction, handling, and water dispersion. Different tread designs cater to specific driving conditions; for instance, all-weather tyres feature more extensive grooves for better water evacuation, while performance tyres have shallower grooves for increased contact and stability. Furthermore, the sidewall design plays a crucial role in providing lateral support and absorbing impacts from rough terrain, contributing to overall ride comfort.",
      "Tyres are generally categorized into several types based on their intended use and performance characteristics. Common categories include all-season, winter, and performance tyres. Each type is engineered to meet specific driving demands, ensuring optimal performance under various conditions. Understanding these fundamental aspects is essential for vehicle owners, as it influences tyre selection, maintenance routines, and overall driving safety."
    ]
  },
  {
    heading: 'Selecting the Right Tyre for Your Vehicle',
    paragraphs: [
      "Choosing the right tyre for your vehicle is a crucial aspect of ensuring optimal performance, safety, and efficiency. One of the first factors to consider is the tyre size, which is specified in a series of numbers and letters found on the sidewall of the tyre. This information indicates the width, aspect ratio, and diameter, and selecting the correct size will influence handling and comfort. Incorrect size selection can result in compromised vehicle dynamics and could even lead to safety hazards.",
      "Another key consideration is the load rating, which indicates the maximum weight a tyre can carry. This rating is vital, especially for vehicles that frequently transport heavy loads or carry multiple passengers. Alongside the load rating, it is essential to take into account the speed rating that denotes the maximum speed the tyre can safely accommodate. Ensuring both ratings match or exceed the requirements of your vehicle promotes safe driving under varying conditions.",
      "Additionally, the conditions in which you typically drive should guide your selection. For example, if you often drive in wet, snowy, or icy conditions, all-season or winter tyres may be necessary to provide adequate traction. Conversely, if you frequently navigate rough terrain, selecting all-terrain or off-road tyres might be more suitable for your needs. Furthermore, consider the type of vehicle you have—sedans typically benefit from different tyre characteristics than sports cars or SUVs.",
      "Finally, it is essential to refer to your vehicle's owner manual, which often includes specific recommendations for tyre types and specifications, ensuring you make an informed and fitting choice. By carefully evaluating size, load and speed ratings, terrain, and vehicle type, you can enhance not only the performance of your vehicle but also ensure a safer driving experience."
    ]
  },
  {
    heading: 'Tyre Maintenance for Longevity and Safety',
    paragraphs: [
      "Proper tyre maintenance is crucial for ensuring the longevity and safety of your vehicle. Regular inspections play a vital role in identifying any potential issues before they escalate. It is advisable to inspect tyres at least once a month, checking for visible signs of wear and tear such as cracks, bulges, or foreign objects lodged in the tread. These indicators can significantly compromise the structural integrity of the tyre, leading to failure while driving.",
      "Equally important is the maintenance of the correct tyre pressure. Under-inflated or over-inflated tyres can adversely affect vehicle handling, fuel efficiency, and tyre lifespan. It is recommended to check tyre pressure weekly, using a reliable gauge, and to adjust as per the manufacturer’s guidelines found in the owner’s manual or on the vehicle door placard. Maintaining optimal pressure not only bolsters safety but also extends the life of the tyres.",
      "Another essential aspect of tyre care is the practice of rotating and balancing tyres regularly. Rotating tyres helps to ensure that they wear evenly, promoting uniform longevity. Generally, rotating tyres every 5,000 to 7,500 miles is recommended, but this may vary depending on driving habits and conditions. Alongside rotation, balancing ensures that weight is distributed evenly around the wheel, which leads to a smoother ride and mitigates uneven wear.",
      "Understanding tread wear indicators is crucial for tyre safety. Most modern tyres feature small raised bars at regular intervals within the grooves, indicating when tread depth has worn down to a critical level. If the tread depth reaches these indicators, it is time to replace the tyres to maintain adequate traction and reduce the risk of hydroplaning in wet conditions.",
      "Incorporating these maintenance practices into your routine can significantly enhance both the lifespan of your tyres and the overall safety of your driving experience."
    ]
  },
  {
    heading: 'Innovations and Trends in Tyre Technology',
    paragraphs: [
      "The automotive industry is experiencing significant advancements in tyre technology, driven by a need for improved performance, safety, and sustainability. One of the most notable trends is the development of eco-friendly tyres, which utilize sustainable materials such as bio-based compounds and recycled rubber. These innovations are aimed at reducing the environmental impact associated with tyre production and disposal. Manufacturers are increasingly adopting these eco-friendly materials to meet the growing consumer demand for sustainable automotive solutions, which ultimately benefits the environment.",
      "Another key innovation in tyre technology is the emergence of smart tyres equipped with embedded sensors. These sensors monitor various parameters, such as temperature, pressure, and tread wear, providing real-time data to drivers and fleet operators. The technology not only enhances safety by alerting users to potential issues before they escalate but also optimizes tyre maintenance. This can lead to improved fuel efficiency and longer tyre lifespan, enabling consumers to save costs in the long run.",
      "Advancements in tread design also play a crucial role in the evolution of tyre technology. Enhanced tread patterns not only improve traction and braking performance but also contribute to reducing rolling resistance, ultimately yielding better fuel efficiency. Manufacturers are experimenting with various designs, including asymmetrical treads and unique siping patterns, to cater to diverse driving conditions and consumer preferences. These innovations are particularly beneficial for electric vehicles, as they can significantly extend range by minimizing energy consumption.",
      "The integration of these trends highlights the continuous evolution of tyre technology, with a focus on performance, safety, and environmental sustainability. As the market for innovative tyres grows, consumers are likely to encounter a wider range of options that promise better driving experiences while contributing positively to the planet. This evolution signals a future where cutting-edge tyre technology plays a pivotal role in shaping the automotive landscape."
    ]
  }
];

const cheapCarSections = [
  {
    heading: 'Understanding Reliability in Cars',
    paragraphs: [
      "Reliability in cars refers to the ability of a vehicle to consistently perform its intended functions without failure over time. It is a crucial factor to consider, especially for budget-conscious buyers, as it significantly influences ownership costs and overall satisfaction. Several metrics and ratings are employed to evaluate the reliability of vehicles, including consumer reviews, warranty claims, maintenance records, and specific reliability ratings from trusted automotive sources such as J.D. Power and Consumer Reports. These indicators provide an essential overview of how a car might perform in the long term.",
      "Reliable vehicles tend to require less frequent maintenance, which can lead to substantial savings over time. This is particularly important for those working within a constrained budget, as unexpected repairs can quickly become a financial burden. The more reliable a car is, the less likely it is to experience significant failures, which makes it a more economical choice in the long run.",
      "Moreover, the reliability of a vehicle is often associated with the manufacturer's reputation as well as the quality of materials and engineering used in its construction. Buyers prioritizing reliability should consider models that have demonstrated strong performance in longevity tests and consumer feedback. Vehicles that receive high ratings in reliability not only provide peace of mind but also enhance the overall driving experience by minimizing the likelihood and frequency of problems. Thus, understanding and prioritizing reliability is imperative for any car buyer, especially those seeking affordable options that do not compromise on performance or dependability."
    ]
  },
  {
    heading: 'Factors to Consider When Choosing a Reliable Cheap Car',
    paragraphs: [
      "When seeking a reliable cheap car, several key factors come into play, each significantly influencing the overall reliability and longevity of the vehicle. One of the primary considerations is brand reputation. Certain manufacturers are well-known for producing vehicles that exhibit a track record of dependability. Brands like Toyota and Honda, for example, have garnered a solid reputation for their commitment to quality and durability. Understanding the historical performance of various brands can provide invaluable insight into potential choices.",
      "Another crucial element is the age of the vehicle. Generally, newer models may offer improved reliability and updated features; however, pre-owned cars that have been well-maintained often represent great value. It is vital to evaluate a car's maintenance history, which can indicate how well the vehicle was cared for by previous owners. Regular servicing and prompt repair of issues can contribute to a vehicle's longevity.",
      "Additionally, researching specific models known for their durability enhances the decision-making process. Certain cars consistently receive high reliability ratings across various studies and consumer reports. Websites dedicated to automotive ratings, such as J.D. Power or Consumer Reports, provide extensive information on vehicle performance, including frequency of repairs and owner satisfaction. This data can be a reliable compass when narrowing down options.",
      "In sum, taking into account brand reputation, vehicle age, maintenance history, and well-regarded models can guide potential buyers toward making an informed decision. By diligently researching vehicles and relying on established reliability ratings, consumers can ensure they select a cheap car that meets their requirements for performance and longevity."
    ]
  },
  {
    heading: 'Top Picks for Affordable Reliable Cars',
    paragraphs: [
      "When it comes to finding an affordable car that doesn’t compromise on reliability, several models stand out in the market, providing both excellent performance and longevity. Here are some top picks that cater to varied budgets, considering both new and used options.",
      "One of the most commendable choices is the Toyota Corolla. This compact car boasts an average price of around $20,000 for new models, while used options can often be found for significantly less. The Corolla is well-regarded for its remarkable fuel efficiency, averaging 30-40 miles per gallon. Many owners report minimal maintenance issues, helping it maintain a solid reputation for durability and longevity.",
      "Another strong contender is the Honda Civic, known for its sporty design and high reliability. New Civics start at approximately $22,000, with used models available at more accessible prices. This vehicle offers a fuel economy of around 32-42 miles per gallon, depending on the model year and engine choice. Civic owners frequently praise its performance and low-cost maintenance, running well even after many years on the road.",
      "The Hyundai Elantra is also worth consideration. With new models priced around $20,000, the Elantra has become known for its impressive warranty and durability. Fuel efficiency hovers between 31-41 miles per gallon, and the car’s comfortable interior and reliable performance make it a favorite among budget-conscious buyers. Feedback from owners highlights the Elantra’s dependable nature and affordable upkeep.",
      "Lastly, the Kia Forte is an economical choice with new models priced similarly to the Elantra. With excellent fuel efficiency, reaching up to 31-41 miles per gallon, the Forte has garnered positive reviews for its longevity and low maintenance costs. Owners often appreciate its spacious interior and advanced technology features, enhancing the overall driving experience.",
      "These models exemplify the best affordable cars for reliability, offering a combination of quality, efficiency, and owner satisfaction at various price points, whether new or used."
    ]
  },
  {
    heading: 'Tips for Maintaining Your Reliable Cheap Car',
    paragraphs: [
      "Owning a reliable, budget-friendly car comes with the responsibility of ensuring it remains in optimal condition through effective maintenance. Regular maintenance not only enhances the performance and longevity of your vehicle but also minimizes total ownership costs. One of the fundamental aspects of maintaining a car is adhering to a routine schedule for regular check-ups and service intervals. Following the manufacturer's maintenance recommendations can prevent minor issues from escalating into costly repairs.",
      "Another vital practice is to stay aware of the car's fluid levels, including engine oil, coolant, brake fluid, and transmission fluid. Regularly checking and changing these fluids as needed can significantly improve the performance and reliability of your vehicle. Additionally, tire maintenance is crucial; keeping them inflated to the correct pressure and rotating them periodically can enhance fuel efficiency and prolong tire life, contributing to overall cost savings.",
      "In terms of cost-effective repair options, consider learning some basic automotive skills to perform simple tasks such as oil changes or air filter replacements. Many online resources and tutorials are readily available, allowing you to tackle these minor repairs confidently. This can save you a considerable amount of money that would otherwise be spent on a mechanic.",
      "Furthermore, maintaining a clean car is often overlooked but is essential for both aesthetics and longevity. Regular cleaning can prevent rust and corrosion, particularly in regions exposed to salted roads during winter. Lastly, it’s wise to establish a good relationship with a trusted mechanic instead of merely visiting a shop on an as-needed basis. A familiar mechanic can provide valuable insights into your specific vehicle's needs and reliability concerns, ensuring that repairs are handled efficiently and affordably."
    ]
  }
];

const renderArticleSections = (sections) => sections.map((section) => `
  <section class="article-section">
    <h2>${section.heading}</h2>
    ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
  </section>`).join('');

const article = (post, sections) => `
  <article class="article-page page-section">
    <div class="article-shell">
      <header class="article-header">
        <a class="article-back" href="/blog"><span aria-hidden="true">←</span> All garage notes</a>
        <p class="eyebrow">Driver guide</p>
        <h1>${post.title}</h1>
        <p class="article-meta"><span>GB Autos &amp; Tyres</span><time datetime="2025-06-07">${post.date}</time><span>${post.readTime}</span></p>
      </header>
      <figure class="article-hero-media">
        ${image(post.image, post.alt, '', true)}
      </figure>
      <div class="article-layout">
        <div class="article-content">${renderArticleSections(sections)}</div>
        <aside class="article-aside" aria-label="Contact the garage">
          <p class="eyebrow">Need practical help?</p>
          <h2>Talk to the workshop.</h2>
          <p>For tyres, servicing or a vehicle concern, speak directly with our Feltham team.</p>
          <a class="button button-primary" href="tel:02088442156">020 8844 2156</a>
          <a class="text-link" href="/contact">Send an enquiry <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </div>
  </article>`;

const articlePages = {
  '/best-cheap-cars-for-high-reliability': () => article(posts[0], cheapCarSections),
  '/all-you-need-to-know-about-tyres': () => article(posts[1], tyreGuideSections),
  '/blog-post1': () => article(posts[2], performanceSections),
  '/blog-post': () => article(posts[3], reliabilitySections)
};

const notFound = () => `
  <section class="not-found page-section">
    <div class="section-shell">
      <p class="error-code">404</p>
      <h1>Page not found</h1>
      <p>That route has taken a wrong turn. Head back to the garage homepage.</p>
      <a class="button button-primary" href="/">Back to home</a>
    </div>
  </section>`;

const compatibilityAliases = {
  '/blog-post2': '/all-you-need-to-know-about-tyres',
  '/blog-post3': '/best-cheap-cars-for-high-reliability'
};

const routeFromLocation = () => {
  const normalized = window.location.pathname.replace(/\/$/, '') || '/';
  return compatibilityAliases[normalized] || normalized;
};

const route = routeFromLocation();
const pages = {
  '/': home,
  '/services': services,
  '/contact': contact,
  '/blog': blog,
  ...articlePages
};

const titles = {
  '/': 'GB Autos and Tyres - Trusted Garage for Repairs',
  '/services': 'GB Autos and Tyres - Trusted Garage Services',
  '/contact': 'Contact GB Autos and Tyres',
  '/blog': 'GB Autos and Tyres: Quality Repairs and Durable Tyres',
  '/best-cheap-cars-for-high-reliability': 'Best Cheap Cars for High Reliability | GB Autos and Tyres',
  '/all-you-need-to-know-about-tyres': 'All You Need to Know About Tyres | GB Autos and Tyres',
  '/blog-post1': "10 Essential Tips to Improve Your Car's Reliability and Performance | GB Autos and Tyres",
  '/blog-post': 'Essential Insights for Every Garage Visitor | GB Autos and Tyres'
};

const app = document.querySelector('#app');
app.innerHTML = (pages[route] || notFound)();
document.title = titles[route] || 'Page Not Found | GB Autos and Tyres';
document.querySelector('#year').textContent = String(new Date().getFullYear());

const blogRoutes = new Set(['/blog', ...Object.keys(articlePages)]);
document.querySelectorAll('.nav a').forEach((link) => {
  const target = new URL(link.href, window.location.href).pathname.replace(/\/$/, '') || '/';
  if (target === route || (target === '/blog' && blogRoutes.has(route))) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const closeMenu = () => {
  if (!toggle || !nav) return;
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
};

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });
}

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const isContactForm = form.dataset.form === 'contact';
    const subject = isContactForm
      ? `Website enquiry${data.get('name') ? ` from ${data.get('name')}` : ''}`
      : 'Website inquiry';
    const lines = isContactForm
      ? [
          `Name: ${data.get('name') || 'Not provided'}`,
          `Email: ${data.get('email')}`,
          '',
          data.get('message')
        ]
      : [`Please contact me at: ${data.get('email')}`];

    window.location.href = `mailto:gbautos100@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
});
