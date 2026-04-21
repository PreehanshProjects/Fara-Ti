import { motion } from 'framer-motion'
import { HeartIcon, HomeIcon, SparklesIcon, UtensilsIcon } from './Icons'

const stats = [
  { icon: HomeIcon, num: '100%', label: 'Homemade' },
  { icon: SparklesIcon, num: '0', label: 'Leftovers. Ever.' },
  { icon: HeartIcon, num: '8', label: 'Love & Flavour' },
  { icon: UtensilsIcon, num: '1', label: 'Bite to get hooked' },
]

export default function StatsBar() {
  return (
    <div
      className="py-7 px-5 md:px-10"
      style={{
        background: 'white',
        borderTop: '1px solid rgba(249,168,201,0.2)',
        borderBottom: '1px solid rgba(249,168,201,0.2)',
      }}
    >
      <div
        className="mx-auto flex justify-around items-center gap-5 flex-wrap"
        style={{ maxWidth: 1000 }}
      >
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <div
                className="hidden sm:block"
                style={{ width: 1, height: 50, background: '#FDE8F2' }}
              />
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="mx-auto mb-2 flex items-center justify-center rounded-2xl"
                style={{
                  width: 42,
                  height: 42,
                  background: 'linear-gradient(135deg, rgba(244,114,182,0.12), rgba(251,191,36,0.1))',
                  color: '#F472B6',
                }}
              >
                <s.icon size={20} />
              </div>
              <div
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '2.2rem',
                  color: '#F472B6',
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                className="font-bold mt-1 uppercase tracking-wider"
                style={{ fontSize: '0.8rem', color: '#A06080' }}
              >
                {s.label}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
