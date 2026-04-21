const items = [
  'Hot & Fresh Farata',
  'Your diet starts tomorrow',
  'Made with love in Vacoas',
  'So good it should be illegal',
  'One bite & you\'re hooked',
  'Real farata, real flavour',
  'No leftovers. Ever.',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      className="mt-[68px] overflow-hidden py-2.5"
      style={{
        background: '#FDE8F2',
        borderBottom: '1px solid rgba(249,168,201,0.4)',
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marqueeScroll 24s linear infinite' }}
      >
        {doubled.map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 px-7 font-extrabold"
            style={{ fontSize: '0.85rem', color: '#6B3A52', letterSpacing: '0.3px' }}
          >
            <span
              className="inline-block rounded-full"
              style={{ width: 5, height: 5, background: '#F472B6' }}
            />
            {text}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
