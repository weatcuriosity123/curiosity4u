import { useEffect, useState } from 'react';
import {
  ArrowLeft, ArrowRight, ExternalLink, Cpu, Terminal, Shield, CheckCircle2,
  Calendar, Users, BookOpen, Layers, Laptop, Sparkles, Send, Phone, Mail,
  ChevronRight, RefreshCw, Sliders, Monitor, Globe, Code2, Server, Check,
  Menu, X, Clock,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

export default function SarthiPage() {
  const navigate = useNavigate();
  useScrollAnimation();

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // SEO Title and Meta Description
    document.title = 'Sarthi by Curiosity4U | Virtual Computing Labs for Education';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Meet Sarthi by Curiosity4U: browser-based virtual computing labs that help students practice, code, and learn while simplifying lab management.');
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = 'Meet Sarthi by Curiosity4U: browser-based virtual computing labs that help students practice, code, and learn while simplifying lab management.';
      document.head.appendChild(metaDesc);
    }

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.curiosity4u.in/sarthi';

    window.scrollTo(0, 0);
  }, []);

  const proofPoints = [
    { label: 'Browser-Based Access', sub: 'Chrome, Edge, Firefox' },
    { label: 'Zero Local Installation', sub: 'Runs on existing PCs' },
    { label: 'Ready-to-Use Environments', sub: 'Linux, IDEs & CLI' },
    { label: 'Session Recovery', sub: 'Seamless persistence' },
    { label: 'Faculty & Admin Controls', sub: 'Classroom governance' },
  ];

  const forRoles = [
    {
      badge: 'For Students',
      title: 'Focus on Discovery',
      accent: '#00e5ff',
      icon: Laptop,
      description: 'Open a browser and enter a ready-to-use computing environment. Spend less time configuring software and more time learning, experimenting, and building.',
      points: [
        'Instant access to a modern Linux desktop with bash shell',
        'Pre-configured code editors and developer tools on first click',
        'Experiment fearlessly without fear of breaking personal machines',
      ],
    },
    {
      badge: 'For Faculty',
      title: 'Guide the Classroom',
      accent: '#a78bfa',
      icon: Users,
      description: 'Use supported faculty and administrative controls to prepare lab environments, organize student batches, and streamline practical sessions.',
      points: [
        'Deploy identical lab images to ensure a uniform baseline',
        'Spend lecture and practical hours teaching rather than debugging setup',
        'Organize student batches and supervise active student sessions',
      ],
    },
    {
      badge: 'For Institutions',
      title: 'Modernize Practical Learning',
      accent: '#34d399',
      icon: Server,
      description: 'Make virtual computing environments available through existing compatible devices and simplify lab maintenance without unnecessarily replacing working hardware.',
      points: [
        'Transform low-spec legacy lab PCs into modern workstations',
        'Eliminate repetitive manual lab re-imaging and disk formatting',
        'Scalable institutional licensing with guided onboarding',
      ],
    },
  ];

  const capabilities = [
    {
      title: 'Browser-Accessible Linux Desktop & Terminal',
      description: 'Full graphical Linux desktop environment and native bash terminal accessible from standard web browsers with no client installations.',
      tag: 'Desktop & Shell',
      color: '#00e5ff',
    },
    {
      title: 'Programming Environments & IDE Access',
      description: 'Pre-configured developer tools including VS Code, Python 3, GCC/G++, ROS 2, and Git ready to execute from the very first minute.',
      tag: 'Developer Tools',
      color: '#60a5fa',
    },
    {
      title: 'Preconfigured Laboratory Templates',
      description: 'Standardized curriculum templates tailored for Operating Systems, Robotics, Web Development, and Computer Science practicals.',
      tag: 'Templates',
      color: '#a78bfa',
    },
    {
      title: 'Session Persistence & Reconnect Functionality',
      description: 'Uninterrupted workflows where active terminal commands, open editor buffers, and files stay live even if the tab or network drops.',
      tag: 'Reliability',
      color: '#34d399',
    },
    {
      title: 'Persistent & Temporary Storage Modes',
      description: 'Support both persistent directories for semester-long project work and clean temporary sandbox modes for single lab exercises.',
      tag: 'Storage Modes',
      color: '#fbbf24',
    },
    {
      title: 'Faculty & Administrator Controls',
      description: 'Centralized administrative workflows to assign access, manage batch cohorts, and supervise lab allocations cleanly.',
      tag: 'Governance',
      color: '#f43f5e',
    },
    {
      title: 'Classroom & Student Onboarding',
      description: 'Streamlined batch onboarding enabling instructors to get an entire classroom of students practicing simultaneously in minutes.',
      tag: 'Classroom Setup',
      color: '#00e5ff',
    },
    {
      title: 'Network Isolation & Assessment Restrictions',
      description: 'Controlled network parameters and sandbox safeguards supporting supervised practical lab assessments and exams.',
      tag: 'Security',
      color: '#a78bfa',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Prepare the Environment',
      desc: 'Select an available lab environment appropriate to the course or practical session.',
    },
    {
      number: '02',
      title: 'Organize the Class',
      desc: 'Set up students and classroom access using the supported administrative workflow.',
    },
    {
      number: '03',
      title: 'Open the Virtual Lab',
      desc: 'Students access the lab from a compatible browser and begin working in their assigned environment.',
    },
    {
      number: '04',
      title: 'Learn by Doing',
      desc: 'Students complete practical exercises while faculty guide the session.',
    },
  ];

  const whyChooseBenefits = [
    'Reduce repeated local software installation and configuration work.',
    'Provide more consistent practical environments across student machines.',
    'Help faculty focus on teaching rather than routine environment troubleshooting.',
    'Make use of compatible existing lab computers.',
    'Support organized classroom access and practical sessions.',
    'Evaluate virtual labs through a pilot before committing institutionally.',
  ];

  const pilotDays = [
    {
      day: 'Day 1',
      phase: 'Understand',
      desc: 'Discuss the course, current lab setup, and expected student capacity.',
      badge: 'Discovery & Scope',
    },
    {
      day: 'Day 2',
      phase: 'Prepare',
      desc: 'Configure an appropriate lab environment, subject to technical feasibility.',
      badge: 'Template Setup',
    },
    {
      day: 'Day 3',
      phase: 'Onboard',
      desc: 'Help faculty understand the supported administration and classroom workflow.',
      badge: 'Faculty Walkthrough',
    },
    {
      day: 'Day 4',
      phase: 'Experience',
      desc: 'Run a practical session with a participating student batch and gather feedback.',
      badge: 'Live Session',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Ambient Lighting Orbs */}
      <div className="orb orb-blue" style={{ width: '600px', height: '600px', top: '-180px', left: '-200px', opacity: 0.25 }} />
      <div className="orb" style={{ background: 'rgba(0, 229, 255, 0.12)', width: '500px', height: '500px', top: '15%', right: '-150px', filter: 'blur(90px)', position: 'absolute', borderRadius: '50%' }} />
      <div className="orb orb-purple" style={{ width: '450px', height: '450px', top: '48%', left: '-150px', opacity: 0.2 }} />
      <div className="orb" style={{ background: 'rgba(245, 158, 11, 0.1)', width: '450px', height: '450px', bottom: '15%', right: '-120px', filter: 'blur(90px)', position: 'absolute', borderRadius: '50%' }} />

      {/* ─── NAVIGATION ─── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(5,5,8,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={() => navigate('/')}
              className="btn btn-ghost"
              style={{ padding: '8px 14px', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="Return to Curiosity4U Homepage"
            >
              <ArrowLeft size={16} /> Home
            </button>
            <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo/Curiosity logo nobg.png" alt="Curiosity4u Logo" style={{ height: '54px', objectFit: 'contain' }} />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="desktop-sarthi-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
            <a href="#gita-story" style={{ color: 'var(--text-muted)', fontSize: '0.92rem', transition: 'color 0.2s' }}>Philosophy</a>
            <a href="#how-it-helps" style={{ color: 'var(--text-muted)', fontSize: '0.92rem', transition: 'color 0.2s' }}>Solutions</a>
            <a href="#capabilities" style={{ color: 'var(--text-muted)', fontSize: '0.92rem', transition: 'color 0.2s' }}>Capabilities</a>
            <a href="#workflow" style={{ color: 'var(--text-muted)', fontSize: '0.92rem', transition: 'color 0.2s' }}>How It Works</a>
            <a href="#pilot" style={{ color: 'var(--text-muted)', fontSize: '0.92rem', transition: 'color 0.2s' }}>Campus Pilot</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://labs.curiosity4u.in/welcome"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(135deg, #00e5ff, #0099ff)',
                color: '#050508',
                fontWeight: 700,
                padding: '9px 20px',
                fontSize: '0.88rem',
                border: 'none',
                boxShadow: '0 4px 20px -4px rgba(0,229,255,0.4)',
              }}
            >
              Launch Live Lab <ExternalLink size={15} style={{ marginLeft: 6 }} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--text)', padding: '8px', borderRadius: '8px', cursor: 'pointer', display: 'none' }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', padding: '1.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#gita-story" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text)', fontSize: '0.95rem' }}>Philosophy</a>
            <a href="#how-it-helps" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text)', fontSize: '0.95rem' }}>Solutions</a>
            <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text)', fontSize: '0.95rem' }}>Capabilities</a>
            <a href="#workflow" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text)', fontSize: '0.95rem' }}>How It Works</a>
            <a href="#pilot" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text)', fontSize: '0.95rem' }}>Campus Pilot</a>
            <a href="https://labs.curiosity4u.in/welcome" target="_blank" rel="noreferrer" style={{ color: '#00e5ff', fontWeight: 600 }}>Launch Live VM Portal →</a>
          </div>
        )}
      </header>

      {/* ─── SECTION A — HERO ─── */}
      <section className="section" style={{ paddingTop: '3.5rem', paddingBottom: '5rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Eyebrow */}
            <div
              className="section-eyebrow fade-up"
              style={{
                color: '#00e5ff',
                borderColor: 'rgba(0, 229, 255, 0.3)',
                background: 'rgba(0, 229, 255, 0.08)',
                letterSpacing: '0.12em',
                marginBottom: '1.5rem',
              }}
            >
              <Sparkles size={14} style={{ marginRight: 6, verticalAlign: 'middle', color: '#00e5ff' }} />
              SARTHI BY CURIOSITY4U · VIRTUAL COMPUTING LABS
            </div>

            {/* Headline */}
            <h1
              className="hero-title fade-up delay-1"
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
                lineHeight: 1.12,
                fontWeight: 800,
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
              }}
            >
              Your learning journey deserves a{' '}
              <span style={{
                background: 'linear-gradient(135deg, #00e5ff 0%, #38bdf8 50%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                trusted Sarthi.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p
              className="fade-up delay-2"
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                fontWeight: 600,
                color: '#e2e8f0',
                marginBottom: '1.25rem',
              }}
            >
              Less setup. More discovery.
            </p>

            {/* Description */}
            <p
              className="fade-up delay-2"
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                maxWidth: '720px',
                margin: '0 auto 2.5rem auto',
              }}
            >
              Sarthi brings ready-to-use Linux desktops and programming environments directly to your browser, helping students focus on building practical skills while colleges spend less time managing lab infrastructure.
            </p>

            {/* CTA Buttons */}
            <div
              className="fade-up delay-3"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '3.5rem',
              }}
            >
              <a
                href="https://labs.curiosity4u.in/welcome"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #00e5ff, #0284c7)',
                  color: '#050508',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  padding: '14px 34px',
                  borderRadius: '50px',
                  boxShadow: '0 8px 30px -8px rgba(0, 229, 255, 0.5)',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Launch Live Lab <ArrowRight size={18} />
              </a>

              <a
                href="/VMBroucher"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/VMBroucher');
                }}
                className="btn btn-ghost"
                style={{
                  padding: '14px 28px',
                  fontSize: '1.02rem',
                  borderRadius: '50px',
                  borderColor: 'rgba(255,255,255,0.18)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Book a Free 4-Day Campus Pilot
              </a>
            </div>

            {/* Proof Strip */}
            <div
              className="fade-up delay-4"
              style={{
                background: 'rgba(17, 17, 32, 0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(0, 229, 255, 0.15)',
                borderRadius: '20px',
                padding: '1.25rem 1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.25rem',
                textAlign: 'left',
              }}
            >
              {proofPoints.map((p, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ color: '#00e5ff', marginTop: '3px', flexShrink: 0 }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{p.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Interactive Hero Preview Card */}
          <div
            className="fade-up delay-5"
            style={{
              marginTop: '4rem',
              maxWidth: '1000px',
              marginInline: 'auto',
              position: 'relative',
            }}
          >
            <div
              style={{
                borderRadius: '24px',
                padding: '8px',
                background: 'linear-gradient(135deg, rgba(0,229,255,0.3) 0%, rgba(124,58,237,0.2) 50%, rgba(255,255,255,0.05) 100%)',
                boxShadow: '0 25px 60px -20px rgba(0, 229, 255, 0.25)',
              }}
            >
              <div
                style={{
                  background: '#090b14',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Browser Top Bar Mock */}
                <div
                  style={{
                    padding: '12px 18px',
                    background: '#0e111d',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#eab308' }} />
                    <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#22c55e' }} />
                    <span style={{ marginLeft: 12, fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                      sarthi.curiosity4u.in / session / cs-lab-linux
                    </span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#34d399', background: 'rgba(52,211,153,0.1)', padding: '3px 10px', borderRadius: '50px' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', animation: 'blink 1.5s infinite' }} />
                    Lab Active · 60 FPS
                  </div>
                </div>

                {/* Screenshot */}
                <div style={{ position: 'relative' }}>
                  <img
                    src="/ui_desktop_rich.png"
                    alt="Sarthi Browser-Based Virtual Computing Desktop with Terminal and IDE"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '24px 20px 16px',
                      background: 'linear-gradient(to top, rgba(9,11,20,0.95) 0%, transparent 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="service-badge" style={{ color: '#00e5ff', borderColor: 'rgba(0,229,255,0.4)', margin: 0 }}>
                        Ubuntu 22.04 LTS Desktop
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        VS Code · ROS 2 · Python 3.10 · GCC/G++ pre-installed
                      </span>
                    </div>
                    <a
                      href="https://labs.curiosity4u.in/welcome"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: '0.85rem',
                        color: '#00e5ff',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      Try Interactive Lab Environment <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION B — THE BHAGAVAD GITA STORY ─── */}
      <section id="gita-story" className="section" style={{ background: 'linear-gradient(180deg, var(--bg) 0%, #080c18 50%, var(--bg) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span
              className="section-eyebrow fade-up"
              style={{
                color: '#f59e0b',
                borderColor: 'rgba(245, 158, 11, 0.3)',
                background: 'rgba(245, 158, 11, 0.08)',
              }}
            >
              <Sparkles size={14} style={{ marginRight: 6, verticalAlign: 'middle', color: '#f59e0b' }} />
              THE MEANING BEHIND SARTHI
            </span>
            <h2 className="section-title fade-up delay-1" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
              Every Arjuna deserves a <span style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #00e5ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Sarthi</span>.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            {/* Visual Column */}
            <div className="fade-up" style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  boxShadow: '0 20px 50px -15px rgba(245, 158, 11, 0.18)',
                  position: 'relative',
                  background: '#090d1a',
                }}
              >
                <img
                  src="/sarthi_illustration.jpg"
                  alt="Symbolic digital illustration of Krishna as Sarthi guiding Arjuna's chariot towards a digital cloud horizon"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(9,13,26,0.92) 0%, rgba(9,13,26,0.1) 60%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '20px',
                    right: '20px',
                    color: '#e2e8f0',
                    fontSize: '0.92rem',
                    fontStyle: 'italic',
                    borderLeft: '3px solid #00e5ff',
                    paddingLeft: '12px',
                  }}
                >
                  &ldquo;Students are the seekers. Sarthi guides their digital workspace.&rdquo;
                </div>
              </div>
            </div>

            {/* Story & Philosophy Column */}
            <div className="fade-up delay-1">
              <div style={{ fontSize: '1.08rem', color: '#cbd5e1', lineHeight: '1.9', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  In the <strong>Bhagavad Gita</strong>, Lord Krishna serves as Arjuna&rsquo;s <em>Sarthi</em>—the charioteer who guides him through a challenging battlefield. While Arjuna faces a difficult task, Krishna helps him find direction and keep his purpose in focus.
                </p>
                <p style={{ color: '#94a3b8' }}>
                  That timeless idea inspires our virtual lab.
                </p>
                <p>
                  Today&rsquo;s students have their own challenges: software that refuses to install, missing dependencies, inconsistent environments, and computers that struggle to keep up. These obstacles can turn valuable practical sessions into hours of troubleshooting.
                </p>
                <p>
                  <strong>Sarthi takes care of the computing environment</strong> so learners can focus on what truly matters: experimenting, writing code, solving problems, and discovering what they can build.
                </p>

                {/* Memorable Statement Box */}
                <div
                  style={{
                    background: 'rgba(0, 229, 255, 0.06)',
                    border: '1px solid rgba(0, 229, 255, 0.25)',
                    borderRadius: '16px',
                    padding: '1.25rem 1.5rem',
                    marginTop: '0.75rem',
                  }}
                >
                  <p style={{ fontSize: '1.18rem', fontWeight: 700, color: '#00e5ff', margin: 0, lineHeight: 1.5 }}>
                    &ldquo;Let technology guide the journey. Let students focus on the destination.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Parallel Breakdown Cards */}
          <div
            className="fade-up delay-2"
            style={{
              marginTop: '4rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                title: 'Arjuna',
                symbol: '🏹',
                subtitle: 'The Learner',
                desc: 'A student striving to develop practical skills, write code, experiment, and solve real-world problems.',
                border: 'rgba(245, 158, 11, 0.3)',
                color: '#fbbf24',
              },
              {
                title: 'The Chariot',
                symbol: '⚡',
                subtitle: 'The Computing Environment',
                desc: 'The essential infrastructure carrying the student’s work forward across every semester.',
                border: 'rgba(0, 229, 255, 0.3)',
                color: '#00e5ff',
              },
              {
                title: 'The Battlefield',
                symbol: '⚙️',
                subtitle: 'Technical Friction',
                desc: 'Broken installations, missing dependencies, version clashes, and aging computers.',
                border: 'rgba(239, 68, 68, 0.3)',
                color: '#f87171',
              },
              {
                title: 'Krishna as Sarthi',
                symbol: '🌟',
                subtitle: 'Sarthi Platform',
                desc: 'The trusted guide managing the environment so educators and students concentrate on mastery.',
                border: 'rgba(167, 139, 250, 0.3)',
                color: '#a78bfa',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${item.border}`,
                  borderRadius: '18px',
                  padding: '1.5rem',
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.symbol}</div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: item.color, fontWeight: 700 }}>
                  {item.subtitle}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '4px 0 10px 0', color: 'var(--text)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION C — HOW SARTHI HELPS ─── */}
      <section id="how-it-helps" className="section" style={{ background: 'var(--bg-2)', position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-eyebrow fade-up" style={{ color: '#00e5ff', borderColor: 'rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.08)' }}>
              <Layers size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              EMPOWERING EVERY STAKEHOLDER
            </span>
            <h2 className="section-title fade-up delay-1">
              One Sarthi. <span className="gradient-text">Three ways</span> to move learning forward.
            </h2>
            <p className="section-subtitle fade-up delay-2" style={{ margin: '0 auto' }}>
              Built specifically to align student learning, faculty instruction, and institutional infrastructure.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '2rem',
            }}
          >
            {forRoles.map((role, idx) => (
              <div
                key={idx}
                className="service-card fade-up"
                style={{
                  '--card-glow-color': `${role.accent}20`,
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                    <span
                      className="service-badge"
                      style={{ color: role.accent, borderColor: `${role.accent}40`, margin: 0 }}
                    >
                      {role.badge}
                    </span>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${role.accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <role.icon size={22} color={role.accent} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
                    {role.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {role.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                    {role.points.map((pt, pIdx) => (
                      <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                        <Check size={16} color={role.accent} style={{ flexShrink: 0, marginTop: 3 }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION D — PRODUCT CAPABILITIES ─── */}
      <section id="capabilities" className="section" style={{ position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-eyebrow fade-up" style={{ color: '#a78bfa', borderColor: 'rgba(167,139,250,0.3)', background: 'rgba(167,139,250,0.08)' }}>
              <Cpu size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              VERIFIED LAB CAPABILITIES
            </span>
            <h2 className="section-title fade-up delay-1">
              Built to make practical learning <span style={{ color: '#00e5ff' }}>simpler</span>.
            </h2>
            <p className="section-subtitle fade-up delay-2" style={{ margin: '0 auto' }}>
              Engineered with proven Linux desktop virtualization, zero client-side dependencies, and complete institutional security.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="fade-up"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = c.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: c.color, background: `${c.color}15`, padding: '4px 10px', borderRadius: '50px' }}>
                      {c.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--text)', lineHeight: 1.35 }}>
                    {c.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION E — HOW IT WORKS (TIMELINE) ─── */}
      <section id="workflow" className="section" style={{ background: 'var(--bg-2)', position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-eyebrow fade-up" style={{ color: '#34d399', borderColor: 'rgba(52,211,153,0.3)', background: 'rgba(52,211,153,0.08)' }}>
              <Clock size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              STREAMLINED WORKFLOW
            </span>
            <h2 className="section-title fade-up delay-1">
              From classroom to coding in <span className="gradient-text">four simple steps</span>.
            </h2>
            <p className="section-subtitle fade-up delay-2" style={{ margin: '0 auto' }}>
              Transparent, repeatable, and designed to fit into standard 50-minute college lab periods.
            </p>
          </div>

          {/* Timeline Grid (Horizontal on Desktop, Vertical on Mobile) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '2rem',
              position: 'relative',
            }}
          >
            {steps.map((st, i) => (
              <div
                key={i}
                className="fade-up"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '2rem 1.75rem',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    color: '#00e5ff',
                    opacity: 0.85,
                    marginBottom: '1rem',
                  }}
                >
                  {st.number}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text)' }}>
                  {st.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION F — WHY COLLEGES CHOOSE SARTHI ─── */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-eyebrow fade-up" style={{ color: '#fbbf24', borderColor: 'rgba(251,191,36,0.3)', background: 'rgba(251,191,36,0.08)' }}>
              <Shield size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              PRACTICAL IMPACT
            </span>
            <h2 className="section-title fade-up delay-1">
              Better use of lab time. <span style={{ color: '#00e5ff' }}>Less infrastructure friction.</span>
            </h2>
            <p className="section-subtitle fade-up delay-2" style={{ margin: '0 auto' }}>
              Solving the tangible challenges faced by academic institutions, lab coordinators, and computer science departments.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {whyChooseBenefits.map((b, idx) => (
              <div
                key={idx}
                className="fade-up"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: 'rgba(0, 229, 255, 0.1)',
                    border: '1px solid rgba(0, 229, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Check size={18} color="#00e5ff" />
                </div>
                <div style={{ fontSize: '1rem', color: '#e2e8f0', lineHeight: 1.6, fontWeight: 500 }}>
                  {b}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION G — FOUR-DAY CAMPUS PILOT ─── */}
      <section id="pilot" className="section" style={{ background: 'var(--bg-2)', position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-eyebrow fade-up" style={{ color: '#00e5ff', borderColor: 'rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.08)' }}>
              <Calendar size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              GUIDED INSTITUTIONAL EVALUATION
            </span>
            <h2 className="section-title fade-up delay-1">
              Experience Sarthi in your <span className="gradient-text">own classroom</span>.
            </h2>
            <p className="section-subtitle fade-up delay-2" style={{ margin: '0 auto' }}>
              Explore how Sarthi fits your syllabus, students, and existing lab setup through a guided four-day pilot.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Pilot Schedule Column */}
            <div className="fade-up">
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text)' }}>
                Proposed 4-Day Pilot Schedule
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {pilotDays.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#00e5ff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {p.day} — {p.phase}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>
                        {p.badge}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: '4px 0 0 0' }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.15)', borderRadius: '14px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ℹ️ <em>Institutional pilots are scheduled based on course requirements and batch capacity. Our technical team works alongside your department coordinator to confirm feasibility.</em>
              </div>
            </div>

            {/* Campus Pilot Redirection Card */}
            <div className="fade-up delay-1">
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(0, 229, 255, 0.25)',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  boxShadow: '0 20px 40px -15px rgba(0, 229, 255, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: 'rgba(0, 229, 255, 0.1)',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <BookOpen size={26} color="#00e5ff" />
                </div>

                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--text)' }}>
                  Interactive VM Brochure &amp; Pilot Guide
                </h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Explore our complete institutional deck, architecture specs, lab syllabus mapping, and pilot rollout roadmap in our interactive client brochure.
                </p>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a
                    href="/VMBroucher"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/VMBroucher');
                    }}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #00e5ff, #0284c7)',
                      color: '#050508',
                      fontWeight: 700,
                      padding: '16px 28px',
                      fontSize: '1.05rem',
                      border: 'none',
                      borderRadius: '50px',
                      boxShadow: '0 8px 30px -8px rgba(0, 229, 255, 0.5)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    Open VM Brochure <ArrowRight size={18} />
                  </a>

                  <a
                    href="https://labs.curiosity4u.in/welcome"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '14px 28px',
                      fontSize: '0.95rem',
                      borderRadius: '50px',
                      borderColor: 'rgba(255,255,255,0.15)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    Launch Live Lab (labs.curiosity4u.in) <ExternalLink size={15} />
                  </a>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', flexShrink: 0 }} />
                  <span>Interactive 12-page presentation deck with live lab links &amp; specifications</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── SECTION H — FINAL CTA ─── */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-blue" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.2 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
              border: '1px solid rgba(0, 229, 255, 0.25)',
              borderRadius: '28px',
              padding: '4.5rem 2rem',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <h2
              className="section-title fade-up"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.4rem)', marginBottom: '1.25rem' }}
            >
              Your next great idea starts with the <span style={{ color: '#00e5ff' }}>right environment</span>.
            </h2>
            
            <p
              className="fade-up delay-1"
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.15rem',
                maxWidth: '640px',
                margin: '0 auto 2.5rem auto',
                lineHeight: 1.8,
              }}
            >
              Let Sarthi handle the digital workspace while you focus on learning, creating, and solving real-world problems.
            </p>

            <div
              className="fade-up delay-2"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://labs.curiosity4u.in/welcome"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #00e5ff, #0284c7)',
                  color: '#050508',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  padding: '14px 36px',
                  borderRadius: '50px',
                  border: 'none',
                  boxShadow: '0 8px 30px -8px rgba(0, 229, 255, 0.6)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Launch Sarthi Lab →
              </a>

              <a
                href={`https://wa.me/918530061662?text=${encodeURIComponent('Hello Curiosity4U Team, I would like to talk to your team about Sarthi virtual computing labs.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                style={{
                  padding: '14px 30px',
                  fontSize: '1.02rem',
                  borderRadius: '50px',
                  borderColor: 'rgba(255,255,255,0.2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION I — FOOTER ─── */}
      <footer className="footer" style={{ borderTop: '1px solid var(--border)', padding: '3.5rem 0', background: '#050508' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
              marginBottom: '3rem',
            }}
          >
            {/* Column 1: Brand */}
            <div>
              <div className="logo" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <img src="/logo/Curiosity logo nobg.png" alt="Curiosity4u Logo" style={{ height: '52px', objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '280px' }}>
                Curiosity4U — Igniting the inquisitive spirit in every learner by bridging modern technology with heritage.
              </p>
            </div>

            {/* Column 2: Products */}
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>
                Platforms &amp; Labs
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
                <li><a href="/sarthi" style={{ color: '#00e5ff', fontSize: '0.88rem' }}>Sarthi Virtual Labs</a></li>
                <li><a href="/VMBroucher" style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>VM Interactive Brochure</a></li>
                <li><a href="/pravi" style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Pravi EdTech</a></li>
                <li><a href="/webdev" style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Vistara Web Dev</a></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
                <li><a href="/#about" style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>About Curiosity4U</a></li>
                <li><a href="/#solutions" style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Ecosystem</a></li>
                <li><a href="#pilot" style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Campus Pilot</a></li>
                <li><a href="/#contact" style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Contact &amp; Enquiry</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>
                Direct Contact
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} color="#00e5ff" />
                  <span>weatcuriosity@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={16} color="#00e5ff" />
                  <span>+91 8530061662</span>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <a
                    href="https://labs.curiosity4u.in/welcome"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#00e5ff',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    labs.curiosity4u.in <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid var(--border)',
              paddingTop: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
            }}
          >
            <div>
              © {new Date().getFullYear()} Curiosity4u. All rights reserved. Sarthi Virtual Labs.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="/sarthi" style={{ color: 'var(--text-muted)' }}>Sarthi Overview</a>
              <a href="https://labs.curiosity4u.in/welcome" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>Live Portal</a>
              <a href="/#contact" style={{ color: 'var(--text-muted)' }}>Support</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
