import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'outline-navy' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variants = {
  primary: 'bg-electric text-white hover:bg-electric-dark shadow-lg hover:shadow-electric/30',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-navy',
  'outline-navy': 'border-2 border-electric text-electric hover:bg-electric hover:text-white',
  ghost: 'text-electric hover:bg-electric/10',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  )
}
