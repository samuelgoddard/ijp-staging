import { NextSeo } from 'next-seo';
import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from "framer-motion"
import Div100vh from 'react-div-100vh'

export const reveal = {
	initial: { y: '0%' },
  enter: { 
    y: '-110%',
    transition: { duration: 2, ease: [0.985, 0.010, 0.315, 0.830] }
  },
	exit: {
    y: '0',
		transition: { duration: 2, ease: [0.985, 0.010, 0.315, 0.830] }
	}
}

export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 1, delay: 0.5, ease: [0.985, 0.010, 0.315, 0.830] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 1, ease: [0.985, 0.010, 0.315, 0.830] }
	}
}

export const revealDownDelay = {
	initial: { y: '-110%' },
  enter: { 
    y: 0,
    transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830] }
  },
	exit: {
    y: '-110%',
		transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830] }
	}
}

export const revealUpDelay = {
	initial: { y: '110%' },
  enter: { 
    y: 0,
    transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830] }
  },
	exit: {
    y: '110%',
		transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830] }
	}
}

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title="IJP — Independent Designer"
        description="Living in Nottingham but working worldwide, I’ve spent the last five years collaborating with brands, agencies and some extremely talented individuals to create a variety of interactive websites and visual identities."
        openGraph={{
          url: 'https://ijpowell.co.uk/',
          title: 'IJP — Independent Designer',
          description: 'Living in Nottingham but working worldwide, I’ve spent the last five years collaborating with brands, agencies and some extremely talented individuals to create a variety of interactive websites and visual identities.',
          images: [
            {
              url: 'https://ijpowell.co.uk/static/social.jpg',
              width: 1200,
              height: 630,
              alt: 'Isaac Powell Logo',
            },
          ],
          site_name: 'IJP - Independent Designer',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="w-full h-full"
        >
          <Div100vh className="flex flex-wrap p-4 md:p-5 text-[23px] leading-[27px] md:text-[24px] md:leading-[28px] xl:text-[31px] xl:leading-[35px] selection:bg-black selection:text-white">
            <header className="w-full flex flex-wrap items-start relative z-30">

              <div className="overflow-hidden w-full max-w-[280px] text-[18px] leading-[24px] md:text-[18px] md:leading-[24px] xl:text-[18px] xl:leading-[24px] tracking-tight order-2 md:order-1 hyphens">
                <m.div variants={fade}>
                  <p className="mb-6">Living in Nottingham but working worldwide, I’ve spent the last five years collaborating with brands, agencies and some extremely talented individuals to create a variety of interactive websites and visual identities.</p>

                  <p className="mb-6">I’m particularly influenced by experimental typography, editorial print and minimalist architecture. I also run <a className="underline transition-colors ease-in-out duration-300 hover:text-[#DB4623] focus:text-[#DB4623]" target="_blank" rel="noreferrer noopener" href="https://shiftwalk.studio">ShiftWalk</a>, a purposefully small design &amp; build studio with <a className="underline transition-colors ease-in-out duration-300 hover:text-[#DB4623] focus:text-[#DB4623]" target="_blank" rel="noreferrer noopener" href="https://samgoddard.co.uk">Sam Goddard</a>.</p>

                  <p className="mb-0">To collaborate with me on a project, please feel free to shoot an email or reach out on any of the platforms below.</p>
                </m.div>
              </div>

              <div className="overflow-hidden ml-auto text-right tracking-tight order-1 md:order-2 w-full md:w-auto">
                <div className="overflow-hidden">
                  <m.div variants={revealDownDelay}>
                    <span className="pointer-events-none block">Independent</span>
                  </m.div>
                </div>
                <div className="overflow-hidden">
                  <m.div variants={revealDownDelay}>
                    <span className="pointer-events-none block">Interaction, Brand, Art Direction</span>
                  </m.div>
                </div>
                <div className="overflow-hidden">
                  <m.div variants={revealDownDelay}>
                    <span className="pointer-events-none block">Full Site — Feb, 2022</span>
                  </m.div>
                </div>
              </div>
            </header>
            
          
            <section className="mt-auto self-end flex items-end w-full relative z-30 text-[18px] leading-[24px] md:text-[24px] md:leading-[27px] xl:text-[28px] xl:leading-[31px] tracking-tight">
              <div className="overflow-hidden relative">
                <m.div variants={revealUpDelay}>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ijpowell" className="overflow-hidden relative text-left focus:border-none focus:outline-none group block">
                    <div className="md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px] transition-transform ease-in-out duration-500 w-full will-change">
                      <span className="hidden md:block absolute top-0 right-0 mt-[-32px] underline">Instagram</span>
                      <span className="block underline">Instagram</span>
                    </div>
                  </a>
                </m.div>
              </div>
              <div className="overflow-hidden ml-auto relative">
                <m.div variants={revealUpDelay}>
                  <a href="mailto:isaac@40000ft.co.uk" className="overflow-hidden relative ml-auto text-left focus:border-none focus:outline-none group block pl-[22px] mb-[-2px]">
                    <div className="w-[13px] md:w-[16px] h-[13px] md:h-[16px] rounded-full bg-[#DB4623] absolute left-0 bottom-0 top-0 mt-[5px] md:mt-[7px]"></div>
                    <div className="md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px] transition-transform ease-in-out duration-500 w-full will-change">
                      <span className="hidden md:block absolute top-0 right-0 mt-[-32px]">Email</span>
                      <span className="block">Email</span>
                    </div>
                  </a>
                </m.div>
              </div>
            </section>
          </Div100vh>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}