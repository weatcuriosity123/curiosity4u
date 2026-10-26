import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VMBroucherPage() {
  const navigate = useNavigate();
  const iframeRef = useRef(null);

  useEffect(() => {
    document.title = 'Curiosity4U Virtual Lab — Interactive Client Brochure';
    window.scrollTo(0, 0);

    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        try {
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.focus();
            iframeRef.current.contentWindow.print();
            return;
          }
        } catch {
          // Fallback
        }
        window.open('/VMBroucher/index.html?print=1&v=labs', '_blank');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#050811',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 9999,
      }}
    >
      <iframe
        ref={iframeRef}
        src="/VMBroucher/index.html?v=labs"
        title="Curiosity4U Virtual Lab Interactive Brochure"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          flex: 1,
        }}
      />
    </div>
  );
}

