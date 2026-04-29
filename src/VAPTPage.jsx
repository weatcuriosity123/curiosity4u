import { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, Shield, AlertTriangle, ChevronRight, ArrowRight, Lock, FileText, RefreshCw, Target, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

export default function VAPTPage() {
  const navigate = useNavigate();
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatWeTest = [
    { icon: '🌐', label: 'Web Applications' },
    { icon: '📱', label: 'Android Applications' },
    { icon: '🔌', label: 'APIs' },
    { icon: '🔑', label: 'Authentication Systems' },
    { icon: '⚙️', label: 'Business Logic Flows' },
    { icon: '🖥️', label: 'Server & Configuration Issues' },
  ];

  const tools = [
    { name: 'OWASP ZAP', desc: 'Industry-standard open-source web scanner', icon: '🔍' },
    { name: 'Burp Suite', desc: 'Professional-grade web security testing platform', icon: '🛡️' },
    { name: 'Nuclei', desc: 'Fast, template-based vulnerability scanner', icon: '⚡' },
  ];

  const packages = [
    {
      name: 'Basic Security Check',
      price: '₹3,999',
      tag: 'Quick security overview',
      color: '#60a5fa',
      type: 'Automated Only',
      attacks: '6–8 attacks covered',
      features: [
        'Missing Security Headers',
        'SSL/TLS Issues',
        'Basic XSS Detection',
        'Open Ports',
        'Directory Listing',
        'Clickjacking',
      ],
      description: 'In our Basic Security Check, we perform an automated scan to detect common issues such as missing safety settings, expired or weak security certificates, basic website loopholes, open network ports, exposed folders, and clickjacking risks that may allow fake overlays or misuse of your website. This package is ideal for small websites or businesses that want an affordable health check and early warning system.',
    },
    {
      name: 'Advanced Vajra',
      price: '₹8,999',
      tag: 'Balanced testing',
      color: '#f87171',
      popular: true,
      type: 'Automated + Manual Validation',
      attacks: '10–15 attacks covered',
      retest: true,
      features: [
        'XSS (Reflected, Stored)',
        'SQL Injection (Basic)',
        'Authentication Issues',
        'Session Misconfiguration',
        'IDOR (Basic)',
        'API Testing (Basic)',
        'Directory Traversal',
        'Rate Limiting Issues',
      ],
      description: 'Our Advanced Vajra service goes deeper by combining automated tools with manual expert testing. We check whether someone can misuse forms, login pages, user accounts, sessions, or APIs. We test for common attack methods like fake input injections, weak login systems, account session problems, access control mistakes, and directory traversal issues where private files may become accessible. We also review security headers, request limits, and other protections that help prevent abuse. This package is best for growing businesses, e-commerce stores, school portals, admin panels, and companies that handle user data. It also includes a retest after fixes to confirm improvements.',
    },
    {
      name: 'Premium Vajra',
      price: '₹17,999+',
      tag: 'Full security assessment',
      color: '#a78bfa',
      type: 'Deep Manual Testing',
      attacks: '15–25 attacks covered',
      retest: true,
      features: [
        'Advanced SQL Injection',
        'XSS (All Types)',
        'IDOR (Complex)',
        'Authentication Bypass',
        'Privilege Escalation',
        'Business Logic Flaws',
        'API Vulnerabilities',
        'File Upload Vulnerabilities',
        'CSRF',
        'Data Exposure',
      ],
      description: 'Our Premium Vajra is the highest level of security testing for organizations that need strong protection and complete confidence. We manually simulate advanced hacker techniques to find serious risks such as database compromise, complex account takeover, privilege escalation, broken business logic, exposed sensitive information, insecure APIs, file upload abuse, payment flow weaknesses, and unauthorized access to private data. We also test for advanced cross-site scripting, CSRF attacks, and hidden flaws that automated scanners often miss. This service is recommended for large businesses, fintech platforms, SaaS products, healthcare portals, government systems, and companies where security is critical. It includes a detailed report, fix guidance, and retesting support to ensure your platform becomes safer and more trusted by users.',
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);

  const deliverables = [
    { icon: <FileText size={20} color="#f87171" />, title: 'Clear Vulnerability Reports', desc: 'Every finding documented with full context.' },
    { icon: <Target size={20} color="#fb923c" />, title: 'Step-by-Step Reproduction', desc: 'Exact steps to reproduce each vulnerability.' },
    { icon: <AlertTriangle size={20} color="#fbbf24" />, title: 'Risk Severity Classification', desc: 'Rated from Low → Critical with business impact.' },
    { icon: <CheckCircle2 size={20} color="#34d399" />, title: 'Fix Recommendations', desc: 'Actionable remediation guidance for every issue.' },
    { icon: <RefreshCw size={20} color="#a78bfa" />, title: 'Retest Option', desc: 'Available in Advanced & Premium plans after patching.' },
  ];

  const whyItMatters = [
    'Prevent data leaks before they happen',
    'Avoid financial loss from breaches',
    'Protect customer trust & reputation',
    'Stay compliant with security standards',
  ];

  const process = [
    { step: '01', title: 'Scope Definition', desc: 'We agree on what gets tested—URLs, APIs, features in scope.' },
    { step: '02', title: 'Recon & Scanning', desc: 'Automated and manual enumeration of attack surface.' },
    { step: '03', title: 'Vulnerability Validation', desc: 'Manual verification to eliminate false positives.' },
    { step: '04', title: 'Reporting', desc: 'Detailed report with findings, severity, and fixes.' },
    { step: '05', title: 'Client Explanation', desc: 'We walk you through every finding in plain language.' },
    { step: '06', title: 'Retest', desc: 'Verify fixes are properly implemented (Advanced & Premium).' },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Orbs */}
      <div className="orb orb-pink" style={{ width: '550px', height: '550px', top: '-200px', left: '-180px' }} />
      <div className="orb" style={{ background: 'rgba(239,68,68,0.08)', width: '400px', height: '400px', bottom: '15%', right: '-120px', filter: 'blur(80px)', position: 'absolute', borderRadius: '50%' }} />
      <div className="orb" style={{ background: 'rgba(167,139,250,0.07)', width: '300px', height: '300px', top: '45%', left: '60%', filter: 'blur(80px)', position: 'absolute', borderRadius: '50%' }} />

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
          <div className="section-eyebrow fade-up" style={{ color: '#f87171', borderColor: 'rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.08)' }}>
            <Shield size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} /> Vajra · Cybersecurity
          </div>
          <h1 className="hero-title fade-up delay-1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Find Vulnerabilities{' '}
            <span style={{ background: 'linear-gradient(135deg, #f87171, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Before Attackers Do
            </span>
          </h1>
          <p className="fade-up delay-2" style={{ margin: '0 auto 2.5rem auto', maxWidth: '620px', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            We simulate real-world attacks to identify security weaknesses in your website, APIs, and systems—before they are exploited.
          </p>
          <div className="fade-up delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#packages" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', boxShadow: '0 8px 30px -10px rgba(220,38,38,0.6)', padding: '14px 32px', fontSize: '1.05rem' }}>
              Request Security Audit <ChevronRight size={18} style={{ marginLeft: 4 }} />
            </a>
            <a href="#process" className="btn btn-ghost" style={{ padding: '14px 32px', fontSize: '1.05rem' }}>
              See How It Works
            </a>
          </div>
          <div className="fade-up delay-4" style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '50px', padding: '8px 18px', fontSize: '0.85rem', color: '#f87171' }}>
            <RefreshCw size={14} /> Free retest after fixes — included in Advanced &amp; Premium plans
          </div>
        </div>
      </section>

      {/* What is VAPT */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '24px', padding: '3rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🔐</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1.25rem' }}>What is Vajra?</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            <strong style={{ color: 'var(--text)' }}>Vajra (Vulnerability Assessment and Penetration Testing)</strong> is the process of identifying, analyzing, and exploiting security flaws in your system to understand real risk—using the same techniques attackers would use, before they get the chance.
          </p>
        </div>
      </section>

      {/* What We Test */}
      <section style={{ marginTop: '6rem', background: 'var(--bg-2)', padding: '5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>What We Test</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center' }}>
            {whatWeTest.map((w, i) => (
              <div key={i} className="fade-up" style={{ animationDelay: `${0.08 * i}s`, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', fontWeight: 600 }}>
                <span style={{ fontSize: '1.5rem' }}>{w.icon}</span> {w.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — Tools */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>How We Work</h2>
          <p className="fade-up delay-1" style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            A combination of automated tools and manual testing ensures accuracy and minimal false positives.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {tools.map((t, i) => (
            <div key={i} className="service-card fade-up" style={{ animationDelay: `${0.1 * i}s`, textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.icon}</div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.5rem' }}>{t.name}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section style={{ marginTop: '6rem', background: 'var(--bg-2)', padding: '5rem 0', position: 'relative', zIndex: 1 }} id="packages">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-eyebrow fade-up" style={{ color: '#f87171', borderColor: 'rgba(248,113,113,0.3)', background: 'rgba(248,113,113,0.08)' }}>Engagement Levels</div>
            <h2 className="section-title fade-up delay-1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>Choose Your Coverage</h2>
            <p className="fade-up delay-2" style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem' }}>
              From a quick scan to a deep manual assessment—pick the level that matches your risk.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {packages.map((pkg, i) => (
              <div key={i} className="service-card fade-up" style={{ animationDelay: `${0.1 * i}s`, position: 'relative', border: pkg.popular ? `1px solid ${pkg.color}55` : '1px solid var(--border)', paddingTop: pkg.popular ? '0' : undefined, display: 'flex', flexDirection: 'column' }}>
                {pkg.popular && (
                  <div style={{ background: `linear-gradient(135deg, ${pkg.color}22, ${pkg.color}11)`, borderBottom: `1px solid ${pkg.color}44`, borderRadius: '20px 20px 0 0', margin: '-2rem -2rem 1.5rem -2rem', padding: '0.6rem 2rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: pkg.color }}>
                    ⭐ Most Popular
                  </div>
                )}
                <div style={{ marginBottom: '0.5rem', fontSize: '0.78rem', color: pkg.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{pkg.name}</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '0.3rem', color: pkg.color }}>{pkg.price}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{pkg.tag}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: `${pkg.color}14`, border: `1px solid ${pkg.color}33`, borderRadius: '50px', padding: '3px 10px', fontSize: '0.74rem', fontWeight: 600, color: pkg.color, marginBottom: '0.5rem', width: 'fit-content' }}>
                  {pkg.type}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
                  🎯 {pkg.attacks}
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', flex: 1 }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem' }}>
                      <CheckCircle2 size={15} color={pkg.color} style={{ flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
                {pkg.retest && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '12px', padding: '0.6rem 1rem', fontSize: '0.82rem', color: '#34d399', marginBottom: '1.25rem', fontWeight: 600 }}>
                    <RefreshCw size={14} /> Free Retest After Fixes
                  </div>
                )}
                <button onClick={() => setSelectedPlan(pkg)} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem', borderRadius: '50px', border: '1px solid var(--border)' }}>
                  Know More
                </button>
                <a href={`https://wa.me/918530061662?text=${encodeURIComponent(`Hello, I am interested in the ${pkg.name} plan with Vajra.`)}`} target="_blank" rel="noreferrer" className="btn" style={{ width: '100%', justifyContent: 'center', background: pkg.popular ? `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)` : 'transparent', border: `1px solid ${pkg.color}66`, color: pkg.popular ? '#050508' : pkg.color, borderRadius: '50px', fontWeight: 700 }}>
                  Book This Plan <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>What You Get</h2>
          <p className="fade-up delay-1" style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem' }}>
            Every engagement comes with a complete, actionable security report.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {deliverables.map((d, i) => (
            <div key={i} className="service-card fade-up" style={{ animationDelay: `${0.08 * i}s`, display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: '12px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{d.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>{d.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{d.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section style={{ marginTop: '6rem', background: 'var(--bg-2)', padding: '5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 380px' }}>
              <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1.25rem' }}>Why It Matters</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '2rem' }}>
                Most attacks don't target big companies—they target{' '}
                <strong style={{ color: 'var(--text)' }}>unsecured systems.</strong> If your business is online, you are a potential target.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {whyItMatters.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem' }}>
                    <CheckCircle2 size={18} color="#f87171" style={{ flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(167,139,250,0.08))', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '24px', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>🛡️</div>
                <div style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.75rem' }}>We Don't Just Find Issues</div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  We help you <strong style={{ color: 'var(--text)' }}>fix them.</strong> If your website is built by us, you get a better security baseline, faster remediation, and integrated support—closing the loop between development and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }} id="process">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>Execution Flow</h2>
          <p className="fade-up delay-1" style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto', fontSize: '1.05rem' }}>
            A structured process that gives you results you can act on.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
          {process.map((p, i) => (
            <div key={i} className="fade-up" style={{ animationDelay: `${0.08 * i}s`, display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '1.5rem 2rem' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#f87171', opacity: 0.5, flexShrink: 0, minWidth: '40px' }}>{p.step}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.3rem' }}>{p.title}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(167,139,250,0.08))', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '28px', padding: '4rem 3rem', textAlign: 'center' }}>
          <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Don't wait for a breach{' '}
            <span style={{ background: 'linear-gradient(135deg, #f87171, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              to act.
            </span>
          </h2>
          <p className="fade-up delay-1" style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Every day without a security test is a day attackers have an advantage. Book a test today and take back control.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/918530061662?text=${encodeURIComponent('Hello, I am interested in booking a security test with Vajra.')}`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', boxShadow: '0 8px 30px -10px rgba(220,38,38,0.6)', padding: '14px 36px', fontSize: '1.05rem' }}>
              Book Security Test <ArrowRight size={18} style={{ marginLeft: 6 }} />
            </a>
            <button onClick={() => navigate('/')} className="btn btn-ghost" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Plan Details Modal */}
      {selectedPlan && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(5, 5, 8, 0.8)', backdropFilter: 'blur(8px)' }} onClick={() => setSelectedPlan(null)}>
          <div style={{ background: 'var(--bg-card)', border: `1px solid ${selectedPlan.color}44`, borderRadius: '24px', padding: '2.5rem', maxWidth: '600px', width: '100%', position: 'relative', boxShadow: `0 20px 40px -10px ${selectedPlan.color}22`, overflowY: 'auto', maxHeight: '90vh' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedPlan(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <X size={24} />
            </button>
            <div style={{ marginBottom: '0.5rem', fontSize: '0.85rem', color: selectedPlan.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Package Details</div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text)' }}>{selectedPlan.name}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
              {selectedPlan.description}
            </p>
            <a href={`https://wa.me/918530061662?text=${encodeURIComponent(`Hello, I am interested in the ${selectedPlan.name} plan with Vajra.`)}`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: `linear-gradient(135deg, ${selectedPlan.color}, ${selectedPlan.color}cc)`, border: `1px solid ${selectedPlan.color}`, padding: '14px 24px', fontSize: '1.05rem', color: selectedPlan.popular ? '#050508' : '#fff', borderRadius: '50px' }}>
              Book This Plan <ArrowRight size={18} style={{ marginLeft: 6 }} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
