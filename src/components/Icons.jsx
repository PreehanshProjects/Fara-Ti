import {
  ArrowRight,
  ChefHat,
  Clock3,
  Crown,
  Flame,
  Heart,
  House,
  MapPin,
  MessageCircle,
  PhoneCall,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react'

function withDefaults(Icon) {
  return function AppIcon({
    size = 20,
    strokeWidth = 2.25,
    color = 'currentColor',
    ...props
  }) {
    return (
      <Icon
        size={size}
        strokeWidth={strokeWidth}
        color={color}
        aria-hidden="true"
        {...props}
      />
    )
  }
}

export const HomeIcon = withDefaults(House)
export const WhatsAppIcon = withDefaults(MessageCircle)
export const ArrowRightIcon = withDefaults(ArrowRight)
export const FlameIcon = withDefaults(Flame)
export const PhoneIcon = withDefaults(PhoneCall)
export const ClockIcon = withDefaults(Clock3)
export const UtensilsIcon = withDefaults(UtensilsCrossed)
export const CrownIcon = withDefaults(Crown)
export const ChefHatIcon = withDefaults(ChefHat)
export const MapPinIcon = withDefaults(MapPin)
export const SparklesIcon = withDefaults(Sparkles)
export const HeartIcon = withDefaults(Heart)
