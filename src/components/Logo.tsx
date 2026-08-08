import logo from '../assets/logo-horizontal-transparente.png'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <a className={`brand ${className}`} href="#inicio" aria-label="Camilly Oliveira Advocacia — início">
      <img src={logo} alt="Camilly Oliveira Advogada" />
    </a>
  )
}
