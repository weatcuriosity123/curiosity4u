import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  Telescope, Rocket, BookOpen, Users, Star, Mail, Phone, MapPin,
  ArrowRight, ChevronRight, Zap, Shield, TrendingUp, MessageCircle,
  Globe, Code2, ShoppingBag, Cpu, Award, Heart, Sparkles,
  FlaskConical, Landmark, GraduationCap, Lightbulb, Target,
} from 'lucide-react';
import PraviPage from './PraviPage.jsx';
import WebDevPage from './WebDevPage.jsx';
import VAPTPage from './VAPTPage.jsx';
import './index.css';

/* ─── ICON HELPER ─── */
function Icon({ icon: I, size = 20, color, style = {} }) {
  return <I size={size} color={color || 'currentColor'} strokeWidth={1.8} style={style} />;
}

/* ─── DATA ─── */
const SERVICES = [
  {
    badge: 'EdTech · Live',
    Icon: GraduationCap,
    iconBg: 'rgba(124,58,237,0.15)',
    color: '#a78bfa',
    title: 'PRAVI',
    description: "We don't teach, we Educate. A mindfulness-driven platform for middle school champs — combining robotics, drones, and Intellectual Property Rights with DRDO-experienced mentors.",
    tags: ['Robotics', 'Drones', 'Patents & IPR', 'DRDO Mentors'],
    glow: 'rgba(124,58,237,0.12)',
    link: '/pravi',
    isInternal: true,
  },
  {
    badge: 'Web Dev',
    Icon: Code2,
    iconBg: 'rgba(37,99,235,0.15)',
    color: '#60a5fa',
    title: 'Vistara',
    description: 'Fast, modern websites that convert — built for businesses in 1–7 days. Mobile-first, SEO-ready, and security-checked before launch.',
    tags: ['Business Websites', 'Landing Pages', 'E-commerce', 'SEO Setup'],
    glow: 'rgba(37,99,235,0.1)',
    link: '/webdev',
    isInternal: true,
  },
  {
    badge: 'Cybersecurity',
    Icon: Shield,
    iconBg: 'rgba(220,38,38,0.15)',
    color: '#f87171',
    title: 'Vajra',
    description: "Find vulnerabilities before attackers do. We simulate real-world attacks on your websites, APIs, and systems to uncover security gaps before they're exploited.",
    tags: ['Penetration Testing', 'Web App Security', 'API Testing', 'Risk Reports'],
    glow: 'rgba(220,38,38,0.08)',
    link: '/vapt',
    isInternal: true,
  },
];

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "Curiosity4u Learn completely transformed the way I approach coding. The mentor support and structured curriculum helped me land my first tech job within 6 months.",
    name: 'Arjun Sharma',
    role: 'Software Engineer, Bangalore',
    avatarBg: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
  },
  {
    stars: 5,
    quote: "The blend of cultural heritage with modern tech at Curiosity4u is unlike anything I've seen. It's not just education — it's an identity movement for our generation.",
    name: 'Priya Nair',
    role: 'UX Designer, Kochi',
    avatarBg: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
  },
  {
    stars: 5,
    quote: "The live mentorship sessions are gold. Getting real-world guidance from industry leaders while working on actual projects accelerated my growth exponentially.",
    name: 'Divya Krishnamurti',
    role: 'Product Manager, Hyderabad',
    avatarBg: 'linear-gradient(135deg, #059669, #0ea5e9)',
  },
  {
    stars: 5,
    quote: "Curiosity4u is doing something truly remarkable — democratizing quality education for every corner of India, regardless of background or location.",
    name: 'Siddharth Joshi',
    role: 'Full-Stack Developer, Pune',
    avatarBg: 'linear-gradient(135deg, #d97706, #f43f5e)',
  },
  {
    stars: 5,
    quote: "From the moment I joined, I felt like part of a community. The sense of belonging and shared mission is what makes Curiosity4u more than just a platform.",
    name: 'Anjali Verma',
    role: 'Content Creator, Delhi',
    avatarBg: 'linear-gradient(135deg, #7c3aed, #f43f5e)',
  },
];

const FOUNDERS = [
  {
    photo: '/founder/1.png',
    name: 'Founder',
    role: 'Founder & CEO',
    experience: [
      'Robotics & Drone Tech Expert',
      'PICOER — Robo Rashtra Organiser',
      'EdTech Innovator & Mentor',
      'Hands-on STEM Curriculum Builder',
    ],
    color: '#a78bfa',
  },
  {
    photo: '/founder/2.png',
    name: 'Co-Founder',
    role: 'Co-Founder & COO',
    experience: [
      'Operations & Strategic Partnerships',
      'Community & Platform Growth',
      'Educational Program Design',
      'Cultural Heritage Advocacy',
    ],
    color: '#60a5fa',
  },
  {
    photo: '/founder/3.png',
    name: 'Co-Founder',
    role: 'Co-Founder & CTO',
    experience: [
      'Full-Stack Web Development (Vistara)',
      'Cybersecurity & VAPT (Vajra)',
      'Product Architecture & Deployment',
      'Startup Tech Infrastructure',
    ],
    color: '#34d399',
  },
];

/* ─── NAVBAR ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo/Curiosity logo nobg.png" alt="Curiosity4u Logo" style={{ height: '80px', objectFit: 'contain' }} />
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#solutions">Solutions</a></li>
          {/* <li><a href="#team">Team</a></li> */}
          <li><a href="#contact" className="nav-cta">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="hero">
      <div className="orb orb-purple" style={{ width: '600px', height: '600px', top: '-200px', left: '-200px' }} />
      <div className="orb orb-blue" style={{ width: '400px', height: '400px', bottom: '-100px', right: '-100px' }} />
      <div className="container">
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', zIndex: 1 }}>
          <div className="hero-eyebrow fade-up">
            <span className="dot" />
            Now Shaping India's Future Technologies.
          </div>
          <div className="fade-up delay-1" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <img src="/logo/Curiosity logo nobg.png" alt="Curiosity4u Logo" style={{ height: '240px', objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(124,58,237,0.4))' }} />
          </div>
          <h1 className="hero-title fade-up delay-1">
            Your <span className="italic">Curiosity</span><br />
            Our Solution<span style={{ color: 'var(--primary)' }}>.</span>
          </h1>
          <p className="hero-subtitle fade-up delay-2" style={{ margin: '0 auto 2.5rem auto', maxWidth: '640px' }}>
            A catalyst for the future — igniting the inquisitive spirit in every learner by blending
            cutting-edge technology with India's rich cultural heritage.
          </p>
          <div className="hero-actions fade-up delay-3" style={{ justifyContent: 'center' }}>
            <a href="#solutions" className="btn btn-primary">
              Explore Platforms <Icon icon={ArrowRight} size={16} style={{ marginLeft: 6 }} />
            </a>
            <a href="#about" className="btn btn-ghost">Our Mission</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  const points = [
    { Icon: Rocket, text: 'Catalyst for India\'s tech-savvy future' },
    { Icon: Landmark, text: 'Rooted in rich cultural heritage' },
    { Icon: Lightbulb, text: 'Innovation meets ancient wisdom' },
    { Icon: Heart, text: 'Fostering thinkers and creators' },
  ];

  return (
    <section className="section" id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-purple" style={{ width: '350px', height: '350px', top: '0', right: '-100px' }} />
      <div className="container">
        <div className="about-grid">
          {/* Visual */}
          <div className="about-visual">
            <div className="about-orbit"><div className="orbit-dot" /></div>
            <div className="about-logo-wrap">
              <div className="about-logo-inner">
                <Telescope size={48} strokeWidth={1.4} color="#a78bfa" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text">
            <span className="section-eyebrow">
              <Sparkles size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              About Us
            </span>
            <h2 className="section-title">
              Innovation Rooted in <span className="gradient-text">Heritage</span>
            </h2>
            <p className="desc">
              At Curiosity4u, we are dedicated to igniting the inquisitive spirit within every learner and innovator.
              As a parent company to various educational and product-based platforms, our mission is to be a catalyst
              for shaping the future of our tech-savvy nation while staying rooted in our rich cultural heritage.
            </p>
            <p className="desc">
              We believe that advancements in technology and our ancient culture can go hand in hand, creating a unique
              blend of innovation and tradition. Join us as we foster a generation of thinkers and creators, committed
              to making a meaningful impact on the world.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
              {points.map(({ Icon: I, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <I size={15} color="#a78bfa" strokeWidth={1.8} />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  const navigate = useNavigate();
  const handleCardClick = (s) => {
    if (s.isInternal && s.link !== '#') navigate(s.link);
    else if (!s.isInternal && s.link !== '#') window.open(s.link, '_blank');
  };

  return (
    <section className="section" id="solutions" style={{ background: 'var(--bg-2)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-blue" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px' }} />
      <div className="container">
        <div className="text-center" style={{ marginBottom: '1rem' }}>
          <span className="section-eyebrow">
            <Rocket size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            Our Platforms
          </span>
          <h2 className="section-title">
            A Complete <span className="gradient-text">Ecosystem</span> of Growth
          </h2>
          <p className="section-subtitle">
            From learning to cybersecurity — each platform is designed with purpose, care, and real-world impact.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="service-card"
              style={{ '--card-glow-color': s.glow, cursor: s.link !== '#' ? 'pointer' : 'default' }}
              onClick={() => handleCardClick(s)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span className="service-badge" style={{ color: s.color, borderColor: `${s.color}40`, margin: 0 }}>{s.badge}</span>
                {s.link !== '#' && (
                  <ChevronRight size={16} color="var(--text-muted)" />
                )}
              </div>
              <div className="service-icon" style={{ background: s.iconBg }}>
                <s.Icon size={28} color={s.color} strokeWidth={1.6} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="service-tags">
                {s.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  // Duplicate the list for seamless loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="section testimonials" id="testimonials" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="text-center">
          <span className="section-eyebrow">
            <MessageCircle size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            Testimonials
          </span>
          <h2 className="section-title">Voices of Our <span className="gradient-text">Community</span></h2>
          <p className="section-subtitle">
            Real stories from learners, creators, and changemakers who are part of the Curiosity4u family.
          </p>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {marqueeItems.map((t, i) => (
            <div className="testimonial-card-marquee" key={i}>
              <div className="stars" style={{ marginBottom: '1rem', display: 'flex', gap: '4px' }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="quote" style={{ fontSize: '1rem', lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '80px' }}>
                "{t.quote}"
              </p>
              <div className="testimonial-footer" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="t-avatar" style={{
                  background: t.avatarBg,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'white'
                }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="t-name" style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t.name}</div>
                  <div className="t-role" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOUNDERS ─── */
function Team() {
  return (
    <section className="section" id="team" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-pink" style={{ width: '400px', height: '400px', top: '-100px', right: '-100px' }} />
      <div className="container">
        <div className="text-center">
          <span className="section-eyebrow">
            <Users size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            Our Team
          </span>
          <h2 className="section-title">The <span className="gradient-text">Minds</span> Behind Curiosity4u</h2>
          <p className="section-subtitle">
            A passionate team of innovators, educators, and builders united by a shared dream to reshape India's future.
          </p>
        </div>
        <div className="founders-grid">
          {FOUNDERS.map((f, i) => (
            <div className="founder-card" key={i} style={{ '--founder-color': f.color }}>
              <div style={{
                width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden',
                border: `3px solid ${f.color}50`, boxShadow: `0 0 0 6px ${f.color}12`,
                margin: '0 auto 1.25rem', flexShrink: 0,
              }}>
                <img src={f.photo} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="founder-name">{f.name}</div>
              <div className="founder-role">{f.role}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginTop: '1rem', textAlign: 'left' }}>
                {f.experience.map(exp => (
                  <div key={exp} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <ChevronRight size={13} color={f.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '918530061662';
    const text = `Hello, I am ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-eyebrow">
              <Mail size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              Get In Touch
            </span>
            <h2 className="section-title">Let's <span className="gradient-text">Collaborate</span></h2>
            <p>
              Whether you're a learner, a partner, or simply a curious soul — we'd love to hear from you.
              Drop us a message and we'll get back to you within 24 hours.
            </p>
            <div className="contact-item">
              <div className="contact-icon"><Mail size={18} strokeWidth={1.8} /></div>
              <span>weatcuriosity@gmail.com</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={18} strokeWidth={1.8} /></div>
              <span>+91 8530061662</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={18} strokeWidth={1.8} /></div>
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Rahul Mehta"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="rahul@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                rows={5}
                className="form-control"
                placeholder="Tell us about your project or inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message <Icon icon={ArrowRight} size={16} style={{ marginLeft: 6 }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="logo" style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <img src="/logo/Curiosity logo nobg.png" alt="Curiosity4u Logo" style={{ height: '45px', objectFit: 'contain' }} />
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', maxWidth: '260px', lineHeight: 1.6 }}>
              Igniting the inquisitive spirit in every learner — bridging technology and heritage.
            </div>
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Curiosity4u. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── HOME PAGE ─── */
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </>
  );
}

/* ─── ROOT APP ─── */
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    };

    // Initial pass
    observe();

    // Re-run on route changes (elements re-mount)
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pravi" element={<PraviPage />} />
      <Route path="/webdev" element={<WebDevPage />} />
      <Route path="/vapt" element={<VAPTPage />} />
    </Routes>
  );
}
