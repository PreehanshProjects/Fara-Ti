import { useState } from 'react'
import { motion } from 'framer-motion'

import feFlatbread from '../assets/feFlatbread.png'
import feTomato from '../assets/feTomato.png'
import feCheese from '../assets/feCheese.png'
import feBeans from '../assets/feBeans.png'
import feCurry from '../assets/feCurry.png'
import { FlameIcon } from './Icons'

const cardBgs = [
  'white',
  'linear-gradient(160deg, #FFF8F0, white)',
  'linear-gradient(160deg, #F5F3FF, white)',
  'linear-gradient(160deg, #ECFDF5, white)',
  'linear-gradient(160deg, #FFFBEB, white)',
]

const menuItems = [
  { img: feFlatbread, name: 'Plain Farata', desc: 'Classic, flaky, golden perfection. The OG. No embellishments needed.', chip: 'The Original', hot: false },
  { img: feTomato, name: '+ Rougaille', desc: "Spicy tomato sauce that'll make you cry actual happy tears.", chip: 'Fan favourite', hot: true },
  { img: feCheese, name: '+ Du Beurre Fromage', desc: 'Butter & cheese. Comfort food at its finest. No notes.', chip: 'Comfort level: max', hot: false },
  { img: feBeans, name: '+ Gros Poids', desc: 'Hearty bean curry, the real Mauritian breakfast.', chip: 'Fill you right up!', hot: false },
  { img: feCurry, name: '+ Curry', desc: 'Golden curry meets golden farata. Honestly poetic.', chip: "Chef's pick", hot: true },
]

function MenuCard({ item, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10, boxShadow: '0 12px 40px rgba(244,114,182,0.22)', borderColor: '#F9A8C9' }}
      className="relative rounded-3xl text-center cursor-pointer overflow-hidden"
      style={{
        padding: '32px 22px',
        background: cardBgs[i],
        boxShadow: '0 4px 24px rgba(244,114,182,0.10)',
        border: '2px solid transparent',
        transition: 'border-color 0.3s',
      }}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #FDE8F2, transparent)',
          opacity: hovered ? 1 : 0,
          pointerEvents: 'none',
        }}
      />

      {item.hot && (
        <div
          className="absolute top-3.5 right-3.5 flex items-center gap-1 text-white font-extrabold rounded-xl px-2.5 py-1"
          style={{ background: '#FB7185', fontSize: '0.65rem', letterSpacing: '0.3px' }}
        >
          <FlameIcon size={12} />
          HOT
        </div>
      )}

      <motion.img
        src={item.img}
        alt={item.name}
        animate={{ scale: hovered ? 1.25 : 1, rotate: hovered ? 8 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ width: 64, height: 64, objectFit: 'contain', margin: '0 auto 14px', display: 'block' }}
      />

      <div
        className="font-bold mb-2"
        style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', color: '#1C1017' }}
      >
        {item.name}
      </div>
      <div className="font-semibold leading-relaxed" style={{ fontSize: '0.82rem', color: '#A06080' }}>
        {item.desc}
      </div>
      <span
        className="inline-block mt-3.5 font-extrabold rounded-full px-3 py-1"
        style={{
          background: '#FDE8F2',
          color: '#F472B6',
          fontSize: '0.72rem',
          letterSpacing: '0.3px',
        }}
      >
        {item.chip}
      </span>
    </motion.div>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="section-pad" style={{ padding: '100px 40px', background: '#FDFAF8' }}>
      <div className="text-center mb-14">
        <div
          className="flex items-center justify-center gap-2 font-extrabold uppercase tracking-widest mb-3"
          style={{ fontSize: '0.8rem', color: '#F472B6' }}
        >
          <span style={{ display: 'block', width: 28, height: 2, background: '#F472B6', borderRadius: 2 }} />
          The Menu
          <span style={{ display: 'block', width: 28, height: 2, background: '#F472B6', borderRadius: 2 }} />
        </div>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            color: '#1C1017',
          }}
        >
          What we're making <em style={{ fontStyle: 'italic', color: '#F472B6' }}>for you</em>
        </h2>
        <p className="font-semibold mt-2.5" style={{ fontSize: '1rem', color: '#A06080' }}>
          (Your stomach already knows what it wants. Just saying.)
        </p>
      </div>

      <div
        className="mx-auto grid gap-5"
        style={{
          maxWidth: 1100,
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        }}
      >
        {menuItems.map((item, i) => (
          <MenuCard key={i} item={item} i={i} />
        ))}
      </div>
    </section>
  )
}
