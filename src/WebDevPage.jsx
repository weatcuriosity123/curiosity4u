import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Code2, Lock, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';


export default function WebDevPage() {
  const navigate = useNavigate();
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    { icon: '🌐', label: 'Business Websites', sub: '1–10 pages' },
    { icon: '🎯', label: 'Landing Pages', sub: 'For ads & campaigns' },
    { icon: '🛒', label: 'E-commerce Websites', sub: 'Full product stores' },
    { icon: '🔍', label: 'SEO Setup', sub: 'Google visibility' },
    { icon: '📍', label: 'Google Maps Integration', sub: 'Local discovery' },
    { icon: '💬', label: 'WhatsApp Automation', sub: 'Instant responses' },
    { icon: '🚀', label: 'Hosting & Domain Setup', sub: 'End-to-end deployment' },
  ];

  const whyUs = [
    { icon: '⚡', title: 'Fast Delivery', desc: 'Professional and elegant design.' },
    { icon: '🔒', title: 'Security-First', desc: 'Every site gets a basic security check' },
    { icon: '📈', title: 'Built to Convert', desc: 'Not just design—built for results' },
    { icon: '💬', title: 'Direct Communication', desc: 'No middle layers, talk to us directly' },
    { icon: '💸', title: 'Startup-Friendly Pricing', desc: 'Transparent packages, no hidden costs' },
    { icon: '🎯', title: 'Google Ads', desc: 'Data-driven campaigns to capture intent' },
    { icon: '📱', title: 'Meta Ads', desc: 'Engaging ads on Facebook & Instagram' },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹6,999',
      tag: 'For small businesses getting started',
      color: '#60a5fa',
      features: [
        '1–3 Page Website',
        'Mobile Responsive',
        'Contact Form',
        'WhatsApp Integration',
        'Basic UI Setup',
      ],
    },
    {
      name: 'Growth',
      price: '₹11,999',
      tag: 'For growing businesses',
      color: '#a78bfa',
      popular: true,
      features: [
        'Everything in Starter',
        'Google Maps Listing Setup',
        'Basic SEO (Meta Tags, Keywords)',
        'Lead Capture Form',
        'WhatsApp Automation Flow',
      ],
    },
    {
      name: 'Pro',
      price: '₹17,999',
      tag: 'For serious growth',
      color: '#34d399',
      features: [
        'Everything in Growth',
        'Google Ads Setup',
        'Conversion Tracking',
        'Speed Optimization',
        'Basic Security Hardening',
      ],
    },
  ];

  const process = [
    { step: '01', title: 'Requirement Discussion', desc: 'We understand your business, goals, and target audience.' },
    { step: '02', title: 'Design & Structure', desc: 'Layout planning and UI mockup tailored to your brand.' },
    { step: '03', title: 'Development', desc: 'Clean, fast code with integrations baked in from the start.' },
    { step: '04', title: 'Testing', desc: 'Cross-browser, mobile, and speed testing before launch.' },
    { step: '05', title: 'Launch', desc: 'We handle deployment, domain, and go-live checks.' },
    { step: '06', title: 'Maintenance', desc: 'Ongoing support, updates, performance monitoring, and improvements to keep your system running smoothly.' }
  ];

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Orbs */}
      <div className="orb orb-blue" style={{ width: '550px', height: '550px', top: '-180px', left: '-180px' }} />
      <div className="orb" style={{ background: 'rgba(37,99,235,0.12)', width: '400px', height: '400px', bottom: '15%', right: '-120px', filter: 'blur(80px)', position: 'absolute', borderRadius: '50%' }} />
      <div className="orb" style={{ background: 'rgba(52,211,153,0.08)', width: '300px', height: '300px', top: '50%', left: '55%', filter: 'blur(80px)', position: 'absolute', borderRadius: '50%' }} />

      {/* Nav */}
      <nav style={{ padding: '2rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => navigate('/')} className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            <ArrowLeft size={16} style={{ marginRight: 6 }} /> Back to Home
          </button>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo/Curiosity logo nobg.png" alt="Curiosity4u Logo" style={{ height: '55px', objectFit: 'contain' }} />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container" style={{ paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-eyebrow fade-up" style={{ color: '#60a5fa', borderColor: 'rgba(96,165,250,0.3)', background: 'rgba(96,165,250,0.08)' }}>
            <Code2 size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Vistara
          </div>
          <h1 className="hero-title fade-up delay-1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Build Websites That{' '}
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Convert, Scale
            </span>{' '}
            &amp; Stay Secure
          </h1>
          <p className="fade-up delay-2" style={{ margin: '0 auto 2.5rem auto', maxWidth: '620px', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            We design and develop fast, modern websites tailored for businesses—optimized for performance, visibility, and growth.
          </p>
          <div className="fade-up delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#packages" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', boxShadow: '0 8px 30px -10px rgba(37,99,235,0.6)', padding: '14px 32px', fontSize: '1.05rem' }}>
              Get My Website <ChevronRight size={18} style={{ marginLeft: 4 }} />
            </a>
            <a href="#process" className="btn btn-ghost" style={{ padding: '14px 32px', fontSize: '1.05rem' }}>
              View Our Process
            </a>
          </div>
          <div className="fade-up delay-4" style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '50px', padding: '8px 18px', fontSize: '0.85rem', color: '#34d399' }}>
            <Lock size={14} /> Includes a basic security check — every project, no extra charge
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>What We Deliver</h2>
          <p className="fade-up delay-1" style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem' }}>
            Everything your business needs to go digital—without complexity.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem' }}>
          {deliverables.map((d, i) => (
            <div key={i} className="service-card fade-up" style={{ animationDelay: `${0.07 * i}s`, textAlign: 'center', padding: '1.75rem 1.25rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{d.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>{d.label}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{d.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ marginTop: '6rem', background: 'var(--bg-2)', padding: '5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>Why Businesses Choose Us</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {whyUs.map((w, i) => (
              <div key={i} className="service-card fade-up" style={{ animationDelay: `${0.08 * i}s`, display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.75rem' }}>
                <div style={{ fontSize: '2rem', flexShrink: 0 }}>{w.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>{w.title}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }} id="packages">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow fade-up" style={{ color: '#60a5fa', borderColor: 'rgba(96,165,250,0.3)', background: 'rgba(96,165,250,0.08)' }}>Packages</div>
          <h2 className="section-title fade-up delay-1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>Simple, Transparent Pricing</h2>
          <p className="fade-up delay-2" style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem' }}>
            No hidden costs. Pick a plan that fits your stage.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {packages.map((pkg, i) => (
            <div key={i} className="service-card fade-up" style={{ animationDelay: `${0.1 * i}s`, position: 'relative', border: pkg.popular ? `1px solid ${pkg.color}55` : '1px solid var(--border)', paddingTop: pkg.popular ? '0' : undefined, overflow: 'visible' }}>
              {pkg.popular && (
                <div style={{ background: `linear-gradient(135deg, ${pkg.color}22, ${pkg.color}11)`, borderBottom: `1px solid ${pkg.color}44`, borderRadius: '20px 20px 0 0', margin: '-2rem -2rem 1.5rem -2rem', padding: '0.6rem 2rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: pkg.color }}>
                  ⭐ Most Popular
                </div>
              )}
              <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: pkg.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{pkg.name}</div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '0.4rem', color: pkg.color }}>{pkg.price}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>{pkg.tag}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {pkg.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={16} color={pkg.color} style={{ flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/918530061662?text=${encodeURIComponent(`Hello, I am interested in the ${pkg.name} package for Vistara Web Development.`)}`} target="_blank" rel="noreferrer" className="btn" style={{ width: '100%', justifyContent: 'center', background: pkg.popular ? `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)` : 'transparent', border: `1px solid ${pkg.color}66`, color: pkg.popular ? '#050508' : pkg.color, borderRadius: '50px', fontWeight: 700 }}>
                Get Started <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section style={{ marginTop: '6rem', background: 'var(--bg-2)', padding: '5rem 0', position: 'relative', zIndex: 1 }} id="process">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>Our Process</h2>
            <p className="fade-up delay-1" style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto', fontSize: '1.05rem' }}>
              Simple. Transparent. Efficient.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            {process.map((p, i) => (
              <div key={i} className="fade-up" style={{ animationDelay: `${0.08 * i}s`, display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '1.5rem 2rem' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#60a5fa', opacity: 0.5, flexShrink: 0, minWidth: '40px' }}>{p.step}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.3rem' }}>{p.title}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Add-On Banner */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(52,211,153,0.1), rgba(37,99,235,0.08))', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '24px', padding: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 420px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', borderRadius: '50px', padding: '5px 14px', fontSize: '0.78rem', fontWeight: 700, color: '#34d399', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              <Lock size={12} /> Add-On Advantage
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.75rem' }}>Every Website Includes a Security Check</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '520px' }}>
              Every website we build includes a basic security check to ensure your platform is not exposed to common vulnerabilities—at no extra cost. Your business deserves a safe digital home.
            </p>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '20px', padding: '2rem', textAlign: 'center', minWidth: '180px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#34d399' }}>Security Included</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>Every package, every time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.18), rgba(96,165,250,0.08))', border: '1px solid rgba(37,99,235,0.3)', borderRadius: '28px', padding: '4rem 3rem', textAlign: 'center' }}>
          <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Get your business online in{' '}
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              days—not months.
            </span>
          </h2>
          <p className="fade-up delay-1" style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Start with a conversation. We'll figure out the best approach for your business together.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/918530061662?text=${encodeURIComponent('Hello, I am interested in starting a project with Vistara.')}`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', boxShadow: '0 8px 30px -10px rgba(37,99,235,0.6)', padding: '14px 36px', fontSize: '1.05rem' }}>
              Start My Website <ArrowRight size={18} style={{ marginLeft: 6 }} />
            </a>
            <button onClick={() => navigate('/')} className="btn btn-ghost" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
