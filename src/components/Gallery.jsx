import { motion } from 'framer-motion'
import heroImg from '../assets/heroImg.jpg'

const placeholders = ['your photo here', 'your photo here', 'your photo here', 'your photo here']

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-pad"
      style={{
        padding: '100px 40px',
        background: 'linear-gradient(180deg, #FDE8F2 0%, #FFFBEB 100%)',
      }}
    >
      <div className="text-center mb-10">
        <div
          className="flex items-center justify-center gap-2 font-extrabold uppercase tracking-widest mb-3"
          style={{ fontSize: '0.8rem', color: '#F472B6' }}
        >
          <span style={{ display: 'block', width: 28, height: 2, background: '#F472B6', borderRadius: 2 }} />
          The evidence
          <span style={{ display: 'block', width: 28, height: 2, background: '#F472B6', borderRadius: 2 }} />
        </div>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            color: '#1C1017',
          }}
        >
          Proof that it's <em style={{ fontStyle: 'italic', color: '#F472B6' }}>this</em> good
        </h2>
        <p className="font-semibold mt-2.5" style={{ fontSize: '1rem', color: '#A06080' }}>
          "Scroll at your own risk — you will get hungry."
        </p>
      </div>

      <div className="gallery-grid">
        {/* Main large image — spans 2 cols on both desktop and mobile */}
        <motion.div
          whileHover={{ scale: 1.03, zIndex: 2 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden cursor-pointer"
          style={{
            gridColumn: 'span 2',
            gridRow: 'span 2',
            borderRadius: 22,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
        >
          <img
            src={heroImg}
            alt="Farata with Rougaille"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>

        {/* Placeholder slots */}
        {placeholders.map((label, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ scale: 1.03, zIndex: 2 }}
            className="overflow-hidden cursor-pointer"
            style={{
              borderRadius: 22,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-2"
              style={{ background: 'white' }}
            >
              <span style={{ fontSize: '2.4rem' }}>📷</span>
              <span
                className="font-bold"
                style={{ fontSize: '0.7rem', color: '#c0a0b0', fontFamily: 'monospace' }}
              >
                {label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
