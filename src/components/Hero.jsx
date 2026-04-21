import { motion } from 'framer-motion'

import doodleA from '../assets/doodleA.png'
import doodleB from '../assets/doodleB.png'
import doodleC from '../assets/doodleC.png'
import doodleD from '../assets/doodleD.png'
import heroImg from '../assets/heroImg.jpg'
import feFloat1 from '../assets/feFloat1.png'
import feFloat2 from '../assets/feFloat2.png'
import feQuote1 from '../assets/feQuote1.png'
import feQuote2 from '../assets/feQuote2.png'
import doodleC2 from '../assets/doodleC.png'
import { ArrowRightIcon, HomeIcon, MapPinIcon, SparklesIcon, WhatsAppIcon } from './Icons'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const pills = [
  { img: feQuote1, text: '"Your diet starts tomorrow. Today? Farata."' },
  { img: feQuote2, text: '"One bite and you\'re hooked. Don\'t say we didn\'t warn you."' },
  { img: doodleC2, text: '"So good it should be illegal. (We checked, it\'s not.)"' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden hero-section"
      style={{
        minHeight: '100vh',
        padding: '40px 40px 60px',
        background: 'linear-gradient(135deg, #FFF0F8 0%, #FDF6FF 40%, #FFF8F0 100%)',
      }}
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(#FDE8F2, transparent)',
          filter: 'blur(80px)', opacity: 0.55,
          top: -100, left: -150,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          background: 'radial-gradient(#F5F3FF, transparent)',
          filter: 'blur(80px)', opacity: 0.55,
          bottom: 0, right: -80,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300, height: 300,
          background: 'radial-gradient(#FFFBEB, transparent)',
          filter: 'blur(80px)', opacity: 0.55,
          bottom: 100, left: '30%',
        }}
      />

      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute hidden md:block"
        style={{ top: '15%', left: '4%', opacity: 0.55 }}
      >
        <img src={doodleA} alt="" style={{ width: 56, height: 56, objectFit: 'contain' }} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute hidden md:block"
        style={{ top: '30%', right: '4%', opacity: 0.45 }}
      >
        <img src={doodleB} alt="" style={{ width: 36, height: 36, objectFit: 'contain' }} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute hidden md:block"
        style={{ bottom: '20%', left: '6%', opacity: 0.45 }}
      >
        <img src={doodleC} alt="" style={{ width: 36, height: 36, objectFit: 'contain' }} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute hidden md:block"
        style={{ bottom: '25%', right: '3%', opacity: 0.5 }}
      >
        <img src={doodleD} alt="" style={{ width: 56, height: 56, objectFit: 'contain' }} />
      </motion.div>

      <div className="hero-grid">
        <div className="flex flex-col gap-5">
          <motion.div {...fadeUp(0.1)}>
            <span
              className="inline-flex items-center gap-2 font-extrabold rounded-full px-4 py-1.5 shadow-sm"
              style={{
                background: 'white',
                border: '1.5px solid #F9A8C9',
                fontSize: '0.8rem',
                color: '#6B3A52',
                letterSpacing: '0.5px',
                boxShadow: '0 2px 12px rgba(249,168,201,0.2)',
              }}
            >
              <HomeIcon size={14} />
              Homemade
              <span style={{ width: 4, height: 4, borderRadius: 9999, background: '#F9A8C9' }} />
              <MapPinIcon size={14} />
              Vacoas-Phoenix, Mauritius
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="leading-none"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              lineHeight: 1.08,
              letterSpacing: '-1px',
              color: '#1C1017',
            }}
          >
            The flakiest<br />
            <em style={{ fontStyle: 'italic', color: '#F472B6' }}>farata</em><br />
            you'll ever eat.
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="font-semibold leading-relaxed"
            style={{ fontSize: '1.05rem', color: '#A06080' }}
          >
            Hot off the tawa, made with real love by Keerti.
            Simple food. Huge happiness.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="flex flex-col gap-2.5">
            {pills.map((pill, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                className="flex items-center gap-2.5 rounded-2xl px-4 py-2.5 font-bold cursor-default transition-all duration-200"
                style={{
                  background: 'white',
                  fontSize: '0.85rem',
                  color: '#1C1017',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  border: '1.5px solid transparent',
                  maxWidth: '100%',
                }}
                onHoverStart={(e) => {
                  e.target.style && (e.target.style.borderColor = '#F9A8C9')
                }}
              >
                <img src={pill.img} alt="" style={{ width: 22, height: 22, objectFit: 'contain', flexShrink: 0 }} />
                <span>{pill.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.58)} className="flex items-center gap-4 flex-wrap">
            <motion.a
              href="https://wa.me/23000000000?text=Hello%20Keerti!%20I%20want%20farata%20please"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(244,114,182,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 font-extrabold no-underline rounded-full px-7 py-3.5 transition-all duration-200"
              style={{
                background: '#F472B6',
                color: 'white',
                fontSize: '1rem',
                boxShadow: '0 6px 24px rgba(244,114,182,0.35)',
              }}
            >
              <WhatsAppIcon size={20} />
              Order on WhatsApp
            </motion.a>
            <a
              href="#menu"
              className="font-extrabold no-underline flex items-center gap-1.5 transition-all duration-200"
              style={{ fontSize: '0.9rem', color: '#6B3A52' }}
              onMouseEnter={(e) => (e.target.style.color = '#F472B6')}
              onMouseLeave={(e) => (e.target.style.color = '#6B3A52')}
            >
              See the menu <ArrowRightIcon size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div
            className="relative overflow-hidden"
            style={{
              width: '100%',
              maxWidth: 460,
              aspectRatio: '460 / 500',
              borderRadius: '280px 280px 200px 200px',
              border: '3px solid rgba(249,168,201,0.4)',
              boxShadow: '0 30px 80px rgba(244,114,182,0.2), 0 8px 24px rgba(0,0,0,0.08)',
            }}
          >
            <img src={heroImg} alt="Keerti's Famous Farata" className="w-full h-full object-cover" />
          </div>

          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute hidden md:flex items-center gap-2.5 rounded-2xl px-4 py-3 font-extrabold"
            style={{
              top: 40, right: -20,
              background: 'white',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              border: '1.5px solid rgba(249,168,201,0.3)',
            }}
          >
            <img src={feFloat1} alt="" style={{ width: 36, height: 36, objectFit: 'contain' }} />
            <div>
              <div className="inline-flex items-center gap-1" style={{ fontSize: '0.75rem', color: '#A06080' }}>
                <SparklesIcon size={13} />
                Made fresh
              </div>
              <div style={{ color: '#1C1017', fontSize: '0.85rem' }}>Every. Single. Time.</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute hidden md:flex items-center gap-2.5 rounded-2xl px-4 py-3 font-extrabold"
            style={{
              bottom: 60, left: -30,
              background: 'white',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              border: '1.5px solid rgba(249,168,201,0.3)',
            }}
          >
            <img src={feFloat2} alt="" style={{ width: 36, height: 36, objectFit: 'contain' }} />
            <div>
              <div className="inline-flex items-center gap-1" style={{ fontSize: '0.75rem', color: '#A06080' }}>
                <MapPinIcon size={13} />
                Find us at
              </div>
              <div style={{ color: '#1C1017', fontSize: '0.85rem' }}>Vacoas-Phoenix</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
