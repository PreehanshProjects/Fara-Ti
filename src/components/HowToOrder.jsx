import { motion } from 'framer-motion'
import { ClockIcon, PhoneIcon, SparklesIcon, UtensilsIcon } from './Icons'

const steps = [
  { n: '1', icon: SparklesIcon, name: 'Get Hungry', desc: "Look at the photos. Scroll up. We'll wait.", joke: "(shouldn't take long)" },
  { n: '2', icon: PhoneIcon, name: 'WhatsApp Keerti', desc: "Send your order + quantity. She won't judge.", joke: 'Promise!' },
  { n: '3', icon: ClockIcon, name: 'Wait (hard part)', desc: 'Keerti cooks your fresh-made farata to order.', joke: 'Longest 20 mins of your life' },
  { n: '4', icon: UtensilsIcon, name: 'Eat & Regret Nothing', desc: 'Pick up and devour immediately. No leftovers.', joke: 'Diet? What diet?' },
]

function StepCard({ s, i }) {
  const StepIcon = s.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(244,114,182,0.22)' }}
      className="relative flex flex-col items-center gap-3.5 text-center rounded-3xl z-10"
      style={{
        padding: '32px 16px 24px',
        background: 'white',
        boxShadow: '0 4px 24px rgba(244,114,182,0.10)',
      }}
    >
      <div
        className="flex items-center justify-center rounded-full text-white mb-1"
        style={{
          width: 48, height: 48,
          background: 'linear-gradient(135deg, #F472B6, #FB7185)',
          fontFamily: '"Playfair Display", serif',
          fontSize: '1.4rem',
          fontWeight: 700,
          boxShadow: '0 4px 16px rgba(244,114,182,0.4)',
        }}
      >
        {s.n}
      </div>

      <div
        className="flex items-center justify-center rounded-2xl"
        style={{
          width: 64,
          height: 64,
          background: 'linear-gradient(135deg, rgba(244,114,182,0.12), rgba(251,191,36,0.12))',
          color: '#F472B6',
        }}
      >
        <StepIcon size={28} />
      </div>

      <div
        className="font-bold"
        style={{ fontFamily: '"Playfair Display", serif', fontSize: '1rem', color: '#1C1017' }}
      >
        {s.name}
      </div>
      <div className="font-semibold leading-relaxed" style={{ fontSize: '0.82rem', color: '#A06080' }}>
        {s.desc}
      </div>
      <span
        className="font-extrabold italic rounded-xl px-3 py-1"
        style={{ fontSize: '0.75rem', color: '#F472B6', background: '#FDE8F2' }}
      >
        {s.joke}
      </span>
    </motion.div>
  )
}

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="section-pad" style={{ padding: '100px 40px', background: '#FDFAF8' }}>
      <div className="text-center mb-14">
        <div
          className="flex items-center justify-center gap-2 font-extrabold uppercase tracking-widest mb-3"
          style={{ fontSize: '0.8rem', color: '#F472B6' }}
        >
          <span style={{ display: 'block', width: 28, height: 2, background: '#F472B6', borderRadius: 2 }} />
          How it works
          <span style={{ display: 'block', width: 28, height: 2, background: '#F472B6', borderRadius: 2 }} />
        </div>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            color: '#1C1017',
          }}
        >
          Getting your farata <em style={{ fontStyle: 'italic', color: '#F472B6' }}>is easy</em>
        </h2>
        <p className="font-semibold mt-2.5" style={{ fontSize: '1rem', color: '#A06080' }}>
          (Embarrassingly easy. No more excuses.)
        </p>
      </div>

      <div className="hto-grid">
        <div
          className="absolute hidden md:block"
          style={{
            top: 52, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(90deg, #FDE8F2, #F472B6, #FDE8F2)',
            borderRadius: 2,
            zIndex: 0,
          }}
        />

        {steps.map((s, i) => (
          <StepCard key={i} s={s} i={i} />
        ))}
      </div>
    </section>
  )
}
