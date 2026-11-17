import Image from "next/image";
export default function Logo({ inverse = false, className = "" }: { inverse?: boolean; className?: string }) {
  return <a href="#top" aria-label="FairPlay Africa home" className={`brand-lockup ${inverse ? "brand-inverse" : ""} ${className}`}>
    <Image src="/logo-colour.svg" alt="FairPlay Africa" width={190} height={38} priority className="logo-colour" />
    <Image src="/logo-white.svg" alt="FairPlay Africa" width={190} height={38} priority className="logo-white" />
  </a>;
}
