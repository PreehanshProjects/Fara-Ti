import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['menu', 'gallery', 'how-to-order']

function NavLink({ id, onClick }) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className="font-bold no-underline px-4 py-1.5 rounded-full transition-all duration-200 block"
      style={{ color: '#6B3A52', fontSize: '0.88rem' }}
      onMouseEnter={(e) => {
        e.target.style.background = '#FDE8F2'
        e.target.style.color = '#F472B6'
      }}
      onMouseLeave={(e) => {
        e.target.style.background = ''
        e.target.style.color = '#6B3A52'
      }}
    >
      {id === 'how-to-order' ? 'How to Order' : id.charAt(0).toUpperCase() + id.slice(1)}
    </a>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 h-[68px]"
        style={{
          background: 'rgba(253,250,248,0.92)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(249,168,201,0.25)',
        }}
      >
        <a
          href="#home"
          className="flex items-center gap-2 no-underline"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.6rem',
            fontWeight: 900,
            color: '#1C1017',
            letterSpacing: '-0.5px',
          }}
        >
          Fara-<span style={{ color: '#F472B6' }}>Ti</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-1.5 list-none">
          {navLinks.map((id) => (
            <li key={id}>
              <NavLink id={id} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="no-underline font-extrabold text-white px-4 md:px-6 py-2 rounded-full transition-all duration-200"
            style={{ background: '#F472B6', fontSize: '0.88rem' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FB7185'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(244,114,182,0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F472B6'
              e.currentTarget.style.boxShadow = ''
            }}
          >
            Order Now
          </motion.a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg gap-[5px]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ background: menuOpen ? '#FDE8F2' : 'transparent', flexShrink: 0 }}
          >
            <span
              style={{
                display: 'block', width: 20, height: 2, background: '#6B3A52', borderRadius: 2,
                transition: 'transform 0.25s',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block', width: 20, height: 2, background: '#6B3A52', borderRadius: 2,
                transition: 'opacity 0.25s',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block', width: 20, height: 2, background: '#6B3A52', borderRadius: 2,
                transition: 'transform 0.25s',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[68px] left-0 right-0 z-40 md:hidden"
            style={{
              background: 'rgba(253,250,248,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(249,168,201,0.3)',
              padding: '12px 16px 16px',
            }}
          >
            <ul className="flex flex-col list-none gap-1">
              {navLinks.map((id) => (
                <li key={id}>
                  <NavLink id={id} onClick={() => setMenuOpen(false)} />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
