import { MapPinIcon } from './Icons'

export default function Footer() {
  return (
    <footer
      className="text-center section-pad"
      style={{ background: '#1C1017', color: 'rgba(255,255,255,0.7)', padding: '44px 40px' }}
    >
      <div
        style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '2rem',
          color: '#F9A8C9',
          marginBottom: 10,
        }}
      >
        Fara-Ti
      </div>
      <p className="font-semibold" style={{ fontSize: '0.85rem', marginBottom: 4 }}>
        <span className="inline-flex items-center gap-1.5">
          <MapPinIcon size={14} />
          Keerti's homemade farata · Vacoas-Phoenix, Mauritius
        </span>
      </p>
      <p style={{ fontSize: '0.78rem', opacity: 0.5, fontWeight: 600, marginTop: 8 }}>
        "Simple food. Big happiness. Zero leftovers."
      </p>
    </footer>
  )
}
