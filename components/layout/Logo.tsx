import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-0">
      <Image src="/logo.png" alt="Circulr" width={40} height={40} />
      <span className="text-2xl font-bold hidden md:block">Circulr</span>
    </Link>
  );
}

export default Logo;
