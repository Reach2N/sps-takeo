import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export function Logo({
  className,
  width = 40,
  height = 40,
  showText = true,
}: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className || ""}`}>
      <Image
        src="/logo-sm.png"
        alt="Sovannaphumi School Logo"
        width={width}
        height={height}
        className="shrink-0"
        priority
      />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-tight text-brand-blue dark:text-brand-blue-300">
            Sovannaphumi School
          </span>
          <span className="font-khmer text-xs text-brand-red dark:text-brand-red-300">
            សាលាសុវណ្ណភូមិ តាកែវ
          </span>
        </div>
      )}
    </Link>
  );
}
