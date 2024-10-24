"use client"

import clsx from "clsx"
import {
  /* ArrowTrendingUpIcon,
  ArrowUpOnSquareIcon, */
  ArrowsPointingInIcon,
  /*  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon, */
  CommandLineIcon,
  /* DocumentTextIcon,
  QueueListIcon, */
} from "@heroicons/react/24/outline"

import { SectionWrapper, SectionBadge, SectionHeadingHighlighted } from "./Section"
import { ScrollReveal } from "./ScrollReveal"
import Image from "next/image"

export function ExtraFeatures() {
  const features = [
    {
      title: "E-MAQUIS",
      description:
        "E-maquis est une application SaaS qui structure et facilite la gestion des établissements (Maquis, Bars,...) ",
      image: "/images/emaquis.png",
      icon: CommandLineIcon,
    },
    {
      title: "E-MAQUIS JOB",
      description:
        "E-Maquis-Job est une application Saas qui facilite la mise en relation entre un employeur et un candidat",
      image: "/images/emaquisjob.png",
      icon: ArrowsPointingInIcon,
    },
    /*  {
      title: "Real-time chat",
      description: "Interact directly and personally with your document",
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      title: "Dynamic suggestions",
      description: "Get insightful suggestions based on content",
      icon: QueueListIcon,
    },
    {
      title: "Metric identification",
      description: "Extract and calculate vital statistics instantly",
      icon: ChartBarIcon,
    },
    {
      title: "Smooth integration",
      description: "Simply drag and drop your PDFs to start chatting",
      icon: ArrowUpOnSquareIcon,
    },
    {
      title: "Contract decipher",
      description: "Simplify legal jargon in contracts and official documents",
      icon: DocumentTextIcon,
    },
    {
      title: "Detailed analysys",
      description: "Dive deep into documents for comprehensive insights.",
      icon: ArrowTrendingUpIcon,
    }, */
  ]

  return (
    <div id="features" className="scroll-mt-8 py-8 lg:py-16">
      <ScrollReveal once={true} trigger="middle" className="[--duration:500ms]">
        {(isActive) => (
          <SectionWrapper>
            <SectionHeadingHighlighted>
              <SectionBadge>Nos services</SectionBadge>

              {/* <SectionTitleSmall>
                Dive into AI-powered features. Chat, learn, and get the most out of your documents in no time
              </SectionTitleSmall> */}
            </SectionHeadingHighlighted>

            <div className="mt-8  lg:mt-16">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    style={{ "--delay": `${index * 150}ms` }}
                    className={clsx(
                      "transition-all delay-[--delay] duration-[--duration]",
                      !isActive ? "translate-y-8 opacity-0" : "",
                      "flex flex-col items-center justify-center gap-4",
                    )}>
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="rounded border border-white/5 bg-white/5 p-1">
                        {/* <feature.icon className="h-5 w-5 fill-white/10 text-white" /> */}
                      </div>

                      <div className="ml-4 text-lg">{feature.title}</div>
                      <div className="">
                        {feature.image && <Image alt={feature.title} src={feature.image} width="100" height="100" />}
                      </div>
                    </div>

                    <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        )}
      </ScrollReveal>
    </div>
  )
}
