import { motion } from 'framer-motion'
import feFlatbread from '../assets/feFlatbread.png'
import { MapPinIcon, WhatsAppIcon } from './Icons'

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-center section-pad"
      style={{
        padding: '100px 40px',
        background: 'linear-gradient(135deg, #FCE4EC, #F8F0FF, #FFF3E0)',
      }}
    >
      <div className="relative mx-auto" style={{ maxWidth: 680 }}>
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-4 inline-block"
        >
          <img src={feFlatbread} alt="" style={{ width: 110, height: 110, objectFit: 'contain' }} />
        </motion.div>

        <p
          className="font-extrabold uppercase tracking-widest mb-4"
          style={{ fontSize: '0.8rem', color: '#A06080' }}
        >
          Ready to order?
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            color: '#1C1017',
            letterSpacing: '-1px',
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Hungry yet? <em style={{ fontStyle: 'italic', color: '#F472B6' }}>Of course</em> you are.
        </motion.h2>

        <p
          className="font-semibold leading-relaxed mb-9"
          style={{ fontSize: '1.05rem', color: '#A06080' }}
        >
          Stop scrolling and order already!<br />
          "Your future self is already eating farata. Catch up."
        </p>

        <motion.a
          href="https://wa.me/23000000000?text=Hello%20Keerti!%20I%20want%20to%20order%20farata%20please"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(37,211,102,0.4)' }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 font-extrabold no-underline rounded-full text-white"
          style={{
            background: '#25D366',
            fontSize: '1rem',
            padding: '16px 28px',
            boxShadow: '0 8px 30px rgba(37,211,102,0.35)',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#128C7E')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#25D366')}
        >
          <WhatsAppIcon size={22} />
          Chat with Keerti on WhatsApp
        </motion.a>

        <p
          className="font-bold mt-4"
          style={{ fontSize: '0.85rem', color: '#A06080' }}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon size={15} />
            Grannum Road, Vacoas-Phoenix, Mauritius
          </span>
        </p>
      </div>
    </section>
  )
}
