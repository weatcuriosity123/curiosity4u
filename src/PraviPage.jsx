import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, GraduationCap, ShieldCheck, Rocket, ChevronRight, Download, ExternalLink, Star, Users, Trophy, Zap, BookOpen, HeartHandshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

export default function PraviPage() {
  const navigate = useNavigate();
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: '🎤',
      title: 'Free Public Seminar',
      desc: 'Seminar on latest trends on robotics and drones — open to all, no cost, maximum learning.',
      color: '#a78bfa',
    },
    {
      icon: '🛠️',
      title: 'HandsOn Training With Take Away Kits',
      desc: 'Training by Gurus Experienced from DIAT-DRDO. Real hardware, real skills, real results.',
      color: '#60a5fa',
    },
    {
      icon: '📜',
      title: 'Aimed to file 100+ Patents',
      desc: 'We aim to file 100+ patents/copyrights by 2025 for Everyone.',
      color: '#f43f5e',
    },
    {
      icon: '💰',
      title: 'Monetize Your Innovative Tool',
      desc: 'Platform for champs to monetize patented/copyrighted ideas. Manufacturing provided by Pravi, with up to 20% royalty for champs.',
      color: '#34d399',
    },
    {
      icon: '🏆',
      title: 'Appraisal By Pravi',
      desc: 'Our single batch consists of 20 students, out of which the top 5 students are provided a 100% refund.',
      color: '#fbbf24',
    },
    {
      icon: '🎓',
      title: 'Course Ke Sath Bhi Course Ke Baad Bhi',
      desc: 'Patents/Copyrights last a lifetime. We generate a Student ID for seamless support by our tech-savvy team up to 6 months after enrollment.',
      color: '#fb923c',
    },
  ];

  const programs = [
    {
      title: 'Abhimanyu Trainer Kit',
      desc: 'Our takeaway Abhimanyu training kit is designed to educate your champ with complete knowledge of technology. Not just to get into chakravyu of knowledge but also to come out of it victoriously with wisdom of Innovation.',
      emoji: '🦾',
      brochure: 'https://www.curiosity4u.in/Abhimanyu.pdf',
      quote: `https://wa.me/918530061662?text=${encodeURIComponent('Hello, I am interested in the Abhimanyu Trainer Kit program of PRAVI.')}`,
      tag: 'Training Kit',
    },
    {
      title: 'Eklavya Bot Training Kit',
      desc: 'Our takeaway Eklavya Bot training kit is designed to empower your champ with the skills to control technology through gestures. Just as Eklavya mastered archery with unwavering dedication, your champ will learn to command the Eklavya Bot using a mobile app.',
      emoji: '🤖',
      brochure: 'https://www.curiosity4u.in/Eklavya.pdf',
      quote: `https://wa.me/918530061662?text=${encodeURIComponent('Hello, I am interested in the Eklavya Bot Training Kit program of PRAVI.')}`,
      tag: 'Training Kit',
    },
    {
      title: 'Vayuputra Workshop',
      desc: 'Inspired by the legendary Hanuman, the Vayu Putra Drone Workshop teaches your champ to build and fly drones with agility and precision. The workshop includes a comprehensive kit to enhance their learning journey.',
      emoji: '🚁',
      brochure: 'https://www.curiosity4u.in/Vayuputra.pdf',
      quote: `https://wa.me/918530061662?text=${encodeURIComponent('Hello, I am interested in the Vayuputra Workshop program of PRAVI.')}`,
      tag: 'Workshop',
    },
    {
      title: 'Vayuputra Seminar',
      desc: 'Inspired by the legendary Hanuman, the Vayu Putra Seminar introduces your champ to the world of drones. They will learn about the science of drones, their parts, how they fly, and important safety regulations.',
      emoji: '📚',
      brochure: 'https://www.curiosity4u.in/Vayuputra.pdf',
      quote: `https://wa.me/918530061662?text=${encodeURIComponent('Hello, I am interested in the Vayuputra Seminar program of PRAVI.')}`,
      tag: 'Seminar',
    },
    {
      title: 'Cyber Yodha Seminar',
      desc: 'Our Cyber Yodha Seminar is designed to transform your champ into a vigilant guardian of the digital world. Inspired by legendary warriors, this seminar equips them with knowledge to navigate cyberspace safely and smartly.',
      emoji: '🛡️',
      brochure: 'https://www.curiosity4u.in/CyberYoddha.pdf',
      quote: `https://wa.me/918530061662?text=${encodeURIComponent('Hello, I am interested in the Cyber Yodha Seminar program of PRAVI.')}`,
      tag: 'Seminar',
    },
    {
      title: 'Teachers Training Program',
      desc: 'Our Teachers Training Program empowers educators to inspire the next generation of innovators. Through comprehensive training in robotics, drones, and cybersecurity, we equip teachers with the latest knowledge and skills.',
      emoji: '👨‍🏫',
      brochure: null,
      quote: `https://wa.me/918530061662?text=${encodeURIComponent('Hello, I am interested in the Teachers Training Program of PRAVI.')}`,
      tag: 'Training Program',
      comment: 'https://forms.gle/zWu4Mtf6YWDma2No6',
    },
  ];

  const testimonials = [
    { name: 'Student at Pravi', text: 'The hands-on experience with robotics kits was absolutely incredible. I built my first drone at PRAVI!', stars: 5 },
    { name: 'Student at Pravi', text: 'DRDO mentors are so knowledgeable. I learned more here in a week than in months of school.', stars: 4 },
    { name: 'Student at Pravi', text: 'I filed my first patent at age 12 thanks to PRAVI. This program is life-changing.', stars: 5 },
    { name: 'Student at Pravi', text: 'The Eklavya Bot kit was the coolest thing I ever built. I can control it with gestures!', stars: 4 },
    { name: 'Student at Pravi', text: 'Cyber Yodha seminar taught me how to stay safe online. Every kid should learn this.', stars: 5 },
    { name: 'Student at Pravi', text: 'I was in the top 5 students and got a 100% refund. PRAVI really rewards hard work!', stars: 4 },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Orbs */}
      <div className="orb orb-purple" style={{ width: '600px', height: '600px', top: '-200px', left: '-200px' }} />
      <div className="orb orb-blue" style={{ width: '400px', height: '400px', bottom: '20%', right: '-100px' }} />
      <div className="orb orb-pink" style={{ width: '300px', height: '300px', top: '40%', left: '60%' }} />

      {/* Navigation Bar */}
      <nav style={{ padding: '2rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={() => navigate('/')}
            className="btn btn-ghost"
            style={{ padding: '8px 16px', fontSize: '0.9rem' }}
          >
            <ArrowLeft size={16} style={{ marginRight: 6 }} /> Back to Home
          </button>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo/Curiosity logo nobg.png" alt="Curiosity4u Logo" style={{ height: '55px', objectFit: 'contain' }} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container" style={{ paddingTop: '2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-eyebrow fade-up">
            <GraduationCap size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            EdTech · Mindfulness · Innovation
          </div>
          <h1 className="hero-title fade-up delay-1" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem' }}>
            Welcome to <span className="gradient-text">PRAVI</span>
          </h1>
          <p className="hero-subtitle fade-up delay-2" style={{ margin: '0 auto 2.5rem auto', maxWidth: '600px', fontSize: '1.25rem', color: 'var(--text-muted)' }}>
            We don't teach, <strong style={{ color: 'var(--text)' }}>We Educate.</strong> A mindfulness-driven platform for Everyone.
          </p>
          <div className="fade-up delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#enroll" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', fontSize: '1.05rem', padding: '14px 32px' }}>
              Enroll Now <ChevronRight size={18} style={{ marginLeft: 4 }} />
            </a>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container" style={{ marginTop: '6rem', position: 'relative', zIndex: 1 }} id="aboutUs">
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '28px', padding: '3.5rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 420px' }}>
            <div className="section-eyebrow" style={{ marginBottom: '1.5rem' }}>About Us</div>
            <h2 className="section-title fade-up" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}>
              Shaping the <span className="gradient-text">Innovators of Tomorrow</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '2rem' }}>
              PRAVI combines cutting-edge technology education with mindfulness practices. By integrating Robotics, Drones, and IPR with sessions led by DRDO-experienced mentors, we ensure that students are not only technically proficient but also mentally resilient and innovative thinkers.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                'Hands-on curriculum with real hardware kits',
                'Mentors experienced from DIAT-DRDO',
                'Focus on mental well-being & mindfulness',
                'Patent filing support for middle school students',
                'Certification upon completion',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem' }}>
                  <CheckCircle2 size={18} color="#a78bfa" style={{ flexShrink: 0 }} /> {item}
                </li>
              ))}
            </ul>
            <a href="https://www.curiosity4u.in/pravi.pdf" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', padding: '12px 28px' }}>
              <Download size={16} style={{ marginRight: 8 }} /> Download Brochure
            </a>
          </div>
          <div style={{ flex: '1 1 280px', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center' }}>
            {[
              { icon: <Users size={28} color="#a78bfa" />, val: '20', label: 'Students Per Batch' },
              { icon: <Trophy size={28} color="#fbbf24" />, val: 'Top 5', label: '100% Refund' },
              { icon: <ShieldCheck size={28} color="#60a5fa" />, val: '100+', label: 'Patents Targeted' },
              { icon: <Zap size={28} color="#34d399" />, val: '6 Mo', label: 'Post-Enrollment Support' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: '20px', padding: '1.5rem', minWidth: '130px', textAlign: 'center', flex: '1 1 130px' }}>
                <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.03em' }}>{s.val}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Have For You */}
      <section className="container" style={{ marginTop: '7rem', position: 'relative', zIndex: 1 }} id="Services">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="section-title fade-up" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>What We Have For You</h2>
          <p className="fade-up delay-1" style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Comprehensive offerings designed to nurture curiosity, innovation, and leadership in young minds.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {features.map((f, i) => (
            <div key={i} className="service-card fade-up" style={{ animationDelay: `${0.08 * i}s`, '--card-glow-color': `${f.color}18` }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text)' }}>{f.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs / Catalogues */}
      <section className="container" style={{ marginTop: '7rem', position: 'relative', zIndex: 1 }} id="enroll">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-eyebrow fade-up">Catalogues</div>
          <h2 className="section-title fade-up delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Our Premium Offerings</h2>
          <p className="fade-up delay-2" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
            Empowering champs with hands-on kits, seminars, and comprehensive workshops.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {programs.map((prog, i) => (
            <div key={i} className="service-card fade-up" style={{ animationDelay: `${0.08 * i}s`, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border)' }}>
                <span className="fade-up" style={{ animationDelay: '0.2s' }}>{prog.emoji}</span>
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(124,58,237,0.85)', backdropFilter: 'blur(8px)', color: 'white', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '50px' }}>
                  {prog.tag}
                </div>
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.85rem' }}>{prog.title}</h3>
                <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem', flex: 1 }}>{prog.desc}</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={prog.quote} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ flex: 1, padding: '0.65rem 1rem', justifyContent: 'center', fontSize: '0.9rem', minWidth: '120px' }}>
                    Get A Quote <ExternalLink size={15} />
                  </a>
                  {prog.brochure && (
                    <a href={prog.brochure} target="_blank" rel="noreferrer" style={{ flex: 1, padding: '0.65rem 1rem', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '6px', fontSize: '0.9rem', border: '1px solid var(--border)', borderRadius: '50px', color: 'var(--text)', textDecoration: 'none', transition: 'all 0.25s', minWidth: '120px' }}
                      onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)'; e.currentTarget.style.color = '#a78bfa'; }}
                      onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
                    >
                      <Download size={15} /> Brochure
                    </a>
                  )}
                  {prog.comment && (
                    <a href={prog.comment} target="_blank" rel="noreferrer" style={{ flex: 1, padding: '0.65rem 1rem', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '6px', fontSize: '0.9rem', border: '1px solid var(--border)', borderRadius: '50px', color: 'var(--text)', textDecoration: 'none', transition: 'all 0.25s', minWidth: '120px' }}>
                      <BookOpen size={15} /> Leave a Comment
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Testimonials */}
      <section style={{ marginTop: '7rem', position: 'relative', zIndex: 1, background: 'var(--bg-2)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-eyebrow fade-up">
              <Star size={14} style={{ marginRight: 6 }} /> Student Reviews
            </div>
            <h2 className="section-title fade-up delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>What Students Say</h2>
            <p className="fade-up delay-2" style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', fontSize: '1rem' }}>
              Real stories from real champs who transformed at PRAVI.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card fade-up" style={{ animationDelay: `${0.08 * i}s` }}>
                <div className="stars">{[...Array(t.stars)].map((_, j) => <span key={j} className="star">★</span>)}</div>
                <p className="quote">"{t.text}"</p>
                <div className="testimonial-footer">
                  <div className="t-avatar" style={{ background: `linear-gradient(135deg, #7c3aed, #4f46e5)` }}>
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">PRAVI Program</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer CTA */}
      <section className="container" style={{ marginTop: '7rem', position: 'relative', zIndex: 1 }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.18), rgba(37,99,235,0.12))', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '28px', padding: '4rem 3rem', textAlign: 'center' }}>
          <div className="section-eyebrow fade-up" style={{ margin: '0 auto 1.5rem auto', display: 'inline-flex' }}>Ready to Join?</div>
          <h2 className="section-title fade-up delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem' }}>
            Join the <span className="gradient-text">PRAVI</span> Movement
          </h2>
          <p className="fade-up delay-2" style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Curiosity Providing reliable tech since 2024. Copyright © 2025 — All rights reserved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/918530061662?text=${encodeURIComponent('Hello, I am interested in joining the PRAVI movement.')}`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>
              Get A Quote <ExternalLink size={16} style={{ marginLeft: 6 }} />
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
