import React from "react"
import { MacbookScroll } from "../components/ui/macbook-scroll"
import Link from "next/link"
import Image from "next/image"

export function MacbookScrollDemo() {
  return (
    <div className=" overflow-hidden bg-[#0B0B0F] dark:bg-[#0B0B0F]">
      <MacbookScroll
        /* title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        } */
        badge={
          <Link href="https://e-maquis.com/">
            <Badge className="h-10 w-10 -rotate-12 transform" />
          </Link>
        }
        src={`/images/two.png`}
        showGradient={false}
      />
    </div>
  )
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return <Image src="/images/emaquisLogo2.png" alt="badge" width={24} height={24} className={className} />
}
