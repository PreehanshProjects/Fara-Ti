import { useEffect } from 'react'

const colors = ['#F9A8C9', '#FB7185', '#C4B5FD', '#FDE68A', '#A7F3D0', '#F472B6']

function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const el = document.createElement('div')
    const size = 5 + Math.random() * 8
    const isCircle = Math.random() > 0.5
    const duration = 1.5 + Math.random() * 2.5
    const delay = Math.random() * 0.4
    const color = colors[Math.floor(Math.random() * colors.length)]

    el.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: -20px;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${isCircle ? '50%' : '3px'};
      pointer-events: none;
      z-index: 9999;
      animation: confettiFall ${duration}s ${delay}s linear forwards;
    `
    document.body.appendChild(el)
    el.addEventListener('animationend', () => el.remove())
  }
}

export default function Confetti() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href*="wa.me"]')
    links.forEach((link) => link.addEventListener('click', launchConfetti))
    return () => links.forEach((link) => link.removeEventListener('click', launchConfetti))
  }, [])

  return (
    <style>{`
      @keyframes confettiFall {
        0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
      }
    `}</style>
  )
}
