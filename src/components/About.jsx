import { motion } from 'framer-motion'
import keertiImg from '../assets/keertiImg.jpg'
import { ChefHatIcon, CrownIcon, FlameIcon, MapPinIcon } from './Icons'

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{
        padding: '100px 40px',
        background: 'linear-gradient(160deg, #FDE8F2 0%, #F5F3FF 100%)',
      }}
    >
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <motion.img
            src={keertiImg}
            alt="Keerti - The Farata Queen"
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ duration: 0.4 }}
            style={{
              width: '100%',
              maxWidth: 340,
              aspectRatio: '340 / 420',
              objectFit: 'cover',
              objectPosition: 'top center',
              borderRadius: '200px 200px 120px 120px',
              boxShadow: '0 24px 60px rgba(244,114,182,0.25), 0 4px 16px rgba(0,0,0,0.07)',
              border: '3px solid rgba(255,255,255,0.8)',
            }}
          />
          <div
            className="absolute flex items-center gap-2 font-extrabold text-white rounded-full px-6 py-2.5 whitespace-nowrap"
            style={{
              bottom: 0, left: '50%', transform: 'translateX(-50%)',
              background: '#F472B6',
              fontSize: '0.85rem',
              boxShadow: '0 6px 20px rgba(244,114,182,0.4)',
            }}
          >
            <CrownIcon size={18} />
            The Farata Queen
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          <div
            className="flex items-center gap-2 font-extrabold uppercase tracking-widest"
            style={{ fontSize: '0.8rem', color: '#F472B6' }}
          >
            <span style={{ display: 'block', width: 28, height: 2, background: '#F472B6', borderRadius: 2 }} />
            <ChefHatIcon size={14} />
            Meet the chef
          </div>

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#1C1017',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
            }}
          >
            Hi, I'm Keerti,<br />
            and I make the best<br />
            <em style={{ fontStyle: 'italic', color: '#F472B6' }}>farata in Vacoas.</em>
          </h2>

          <p className="font-semibold leading-relaxed" style={{ fontSize: '1rem', color: '#A06080' }}>
            Born and raised in Mauritius, I grew up with the smell of fresh farata filling the kitchen every morning. Now I'm sharing that magic with you: hot, flaky, perfectly golden, made the old-school way. No shortcuts. No frozen dough. Just flour, love, and serious wrist action.
          </p>

          <div
            className="rounded-2xl font-bold italic leading-relaxed"
            style={{
              background: 'white',
              padding: '18px 22px',
              borderLeft: '4px solid #F472B6',
              fontSize: '0.95rem',
              color: '#1C1017',
              boxShadow: '0 4px 20px rgba(244,114,182,0.1)',
            }}
          >
            "Once you try Keerti's farata, everything else tastes like cardboard." - basically everyone who's tried it
          </div>

          <p className="font-semibold leading-relaxed" style={{ fontSize: '1rem', color: '#A06080' }}>
            Based in{' '}
            <strong style={{ color: '#1C1017' }}>
              <span className="inline-flex items-center gap-1">
                <MapPinIcon size={15} />
                Grannum Road, Vacoas-Phoenix
              </span>
            </strong>
            . Just WhatsApp me your order and I'll get cooking!{' '}
            <span className="inline-flex align-middle" style={{ color: '#F472B6' }}>
              <FlameIcon size={16} />
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
