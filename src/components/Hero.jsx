import Image from "next/image"

import { SectionWrapper } from "@/components/Section"

import appImage from "@/images/app.png"

export function Hero() {
  return (
    <div className="relative pt-32">
      <div className="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"></div>

      <SectionWrapper className="py-8 lg:py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-light leading-tight text-center group font-display lg:text-5xl">
            <span>Chez HNM, nous pensons</span>
            <br />
            <span>que réinventer le monde </span>
            <span className="text-transparent bg-gradient-to-br from-white/90 to-white/30 bg-clip-text">
              de la nuit représente notre plus grande opportunité d améliorer et de faciliter le quotidient de la
              population
            </span>
          </h1>

          <h2 className="max-w-xl mt-8 text-lg text-center text-white/60 lg:text-xl">
            Recharger is not like all those chat-with-pdf apps. It certainly has a slightly different UI, so it worths
            your money.
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 mt-8 lg:flex-row">
            <a
              href="#"
              className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300">
              
            </a>

            <span className="text-sm">No credit card required</span>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mt-8 lg:mt-16">
            <div className="absolute -top-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/25 blur-3xl lg:-top-8 lg:h-[32rem] lg:w-[32rem] lg:blur-[128px]"></div>

            <div className="relative w-full p-2 shadow-2xl rounded-2xl bg-gradient-to-b from-white/5 to-white/10 shadow-white/10 ring-1 ring-white/10 backdrop-blur-sm lg:rounded-3xl">
              <Image
                className="w-full h-auto border shadow-md rounded-xl border-white/10 shadow-zinc-950/50 lg:rounded-2xl"
                alt="App screenshot"
                unoptimized
                src={appImage}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
