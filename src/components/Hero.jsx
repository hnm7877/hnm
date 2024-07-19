/* import Image from "next/image" */

import { SectionWrapper } from "@/components/Section"

/* import appImage from "../../public/images/app.png" */
import { MacbookScrollDemo } from "../components/macbookDemo.tsx"

export function Hero() {
  return (
    <div className="relative pt-32">
      <div className="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"></div>

      <SectionWrapper className="py-8 lg:py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="group text-center font-display text-3xl font-light leading-tight lg:text-5xl">
            <span>Chez HNM, nous pensons</span>
            <br />
            <span>que réinventer le monde </span>
            <span className="bg-gradient-to-br from-white/90 to-white/30 bg-clip-text text-transparent">
              de la nuit représente notre plus grande opportunité d améliorer et de faciliter le quotidient de la
              population
            </span>
          </h1>

          <h2 className="mt-8 max-w-xl text-center text-lg text-white/60 lg:text-xl"></h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
            <a
              href="#"
              className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300"></a>

            <span className="text-sm"></span>
          </div>

          <div className="relative mx-auto mt-8 w-full max-w-5xl lg:mt-16">
            <div className="absolute -top-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/25 blur-3xl lg:-top-8 lg:h-[32rem] lg:w-[32rem] lg:blur-[128px]"></div>

            <div className="relative w-full rounded-2xl bg-gradient-to-b from-white/5 to-white/10 p-2 shadow-2xl shadow-white/10 ring-1 ring-white/10 backdrop-blur-sm lg:rounded-3xl">
              <MacbookScrollDemo />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
