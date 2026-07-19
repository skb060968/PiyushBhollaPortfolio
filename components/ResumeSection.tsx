'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Briefcase, GraduationCap, Award, Mail } from "lucide-react"
import { siteData } from "@/lib/data"

export default function ResumeSection() {
  const { designer } = siteData
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Fade effects temporarily disabled
    return () => {}
  }, [])

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className="section-padding relative min-h-screen flex items-center"
      style={{
        backgroundColor: '#1f1f1f',
      }}
    >
      <div className="container-custom relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Content wrapper */}
        <div id="about-content" className="transition-opacity duration-300" style={{ opacity: 1 }}>
          
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 gap-8 lg:gap-12">
              
              {/* Top Section - Name and Image */}
              <div id="name-block" className="space-y-6 transition-opacity duration-500 max-w-md mx-auto w-full" style={{ opacity: 1 }}>
                {/* Name and Title */}
                <div className="mb-6 text-center">
                  <h1 className="font-display text-4xl sm:text-5xl font-bold drop-shadow-lg mb-1" style={{ color: '#D4AF37' }}>
                    {designer.name.split(' ')[0]}
                  </h1>
                  <h1 className="font-display text-4xl sm:text-5xl font-light italic drop-shadow-lg mb-3" style={{ color: '#D4AF37' }}>
                    {designer.name.split(' ')[1]}
                  </h1>
                  <p className="font-sans text-sm uppercase tracking-widest drop-shadow" style={{ color: '#D4AF37' }}>
                    FASHION DESIGNER
                  </p>
                </div>

                {/* Profile Image - Full width of column with elegant frame */}
                <div className="relative w-full aspect-[3/4]">
                  {/* Outer decorative border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 via-white/50 to-amber-100/40 p-2 rounded-sm shadow-2xl">
                    {/* Middle frame layer */}
                    <div className="w-full h-full bg-gradient-to-tl from-stone-800/80 via-stone-700/70 to-stone-600/80 p-1">
                      {/* Inner white mat border */}
                      <div className="w-full h-full bg-white/95 p-4 shadow-inner">
                        {/* Image container */}
                        <div className="relative w-full h-full overflow-hidden shadow-lg">
                          <Image
                            src="/images/piyush.webp"
                            alt={designer.name}
                            fill
                            className="object-cover"
                          />
                          
                          {/* Subtle vignette overlay */}
                          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)] pointer-events-none"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner embellishments */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-amber-300/60"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-amber-300/60"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-amber-300/60"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-amber-300/60"></div>
                </div>
              </div>

              {/* Intro Paragraph - Below image on mobile, separate section on desktop */}
              <div id="intro-block" className="space-y-4 transition-opacity duration-500 max-w-3xl mx-auto w-full" style={{ opacity: 1 }}>
                <p className="font-sans text-base leading-relaxed text-center lg:text-left drop-shadow" style={{ color: '#D4AF37' }}>
                  Hi, I'm Piyush. A designer who believes that fashion is not just about clothing, but about telling stories, embracing personal evolution, and crafting art that speaks to the soul. With a strong creative vision and technical expertise, my work showcases my ability to design unique, trend-forward pieces that reflect a deep understanding of both aesthetics and function. Driven by an innate curiosity, I continuously expand my knowledge and refine my skills to ensure that each creation is both innovative and precise. I am committed to pushing the boundaries of design while maintaining a focus on craftsmanship and quality in every piece I create.
                </p>
              </div>

              {/* Bottom Section - Education, Experience, Skills, Accomplishments (Single Column) */}
              <div className="grid grid-cols-1 gap-8 lg:gap-10 max-w-3xl mx-auto w-full">
                
                {/* Education */}
                <div id="education-block" className="space-y-4 transition-opacity duration-500" style={{ opacity: 1 }}>
                  <h3 className="font-display text-2xl font-light italic drop-shadow-lg pb-2 border-b" style={{ color: '#D4AF37', borderColor: '#D4AF37' }}>
                    EDUCATION
                  </h3>
                  <div className="space-y-5">
                    {designer.education.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
                            <GraduationCap size={24} style={{ color: '#D4AF37' }} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-sans font-bold text-sm uppercase tracking-wide drop-shadow mb-1" style={{ color: '#D4AF37' }}>
                              {item.institution}
                            </h4>
                            <p className="font-sans text-sm drop-shadow mb-1" style={{ color: '#D4AF37' }}>
                              {item.degree}
                            </p>
                            <p className="font-sans text-xs drop-shadow" style={{ color: '#D4AF37' }}>
                              {item.details || item.year}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div id="skills-block" className="space-y-4 transition-opacity duration-500" style={{ opacity: 1 }}>
                  <h3 className="font-display text-2xl font-light italic drop-shadow-lg pb-2 border-b" style={{ color: '#D4AF37', borderColor: '#D4AF37' }}>
                    SKILLS
                  </h3>
                  <ul className="space-y-2">
                    {designer.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="font-sans text-sm drop-shadow flex items-center gap-2"
                        style={{ color: '#D4AF37' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }}></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Work Experience */}
                <div id="experience-block" className="space-y-4 transition-opacity duration-500" style={{ opacity: 1 }}>
                  <h3 className="font-display text-2xl font-light italic drop-shadow-lg pb-2 border-b" style={{ color: '#D4AF37', borderColor: '#D4AF37' }}>
                    WORK EXPERIENCE
                  </h3>
                  <div className="space-y-5">
                    {designer.experience.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div>
                          <h4 className="font-sans font-bold text-base drop-shadow uppercase" style={{ color: '#D4AF37' }}>
                            {item.company}
                          </h4>
                          <p className="font-sans text-sm uppercase tracking-wide drop-shadow" style={{ color: '#D4AF37' }}>
                            {item.role}
                          </p>
                          <p className="font-sans text-xs drop-shadow mb-2" style={{ color: '#D4AF37' }}>
                            {item.year}
                          </p>
                        </div>
                        {Array.isArray(item.description) ? (
                          <ul className="space-y-1.5 ml-4">
                            {item.description.map((point, idx) => (
                              <li key={idx} className="font-sans text-sm leading-relaxed drop-shadow flex items-start gap-2" style={{ color: '#D4AF37' }}>
                                <span className="mt-1.5" style={{ color: '#D4AF37' }}>•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="font-sans text-sm leading-relaxed drop-shadow" style={{ color: '#D4AF37' }}>
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accomplishments */}
                {designer.accomplishments && designer.accomplishments.length > 0 && (
                  <div id="accomplishments-block" className="space-y-4 transition-opacity duration-500" style={{ opacity: 1 }}>
                    <h3 className="font-display text-2xl font-light italic drop-shadow-lg pb-2 border-b" style={{ color: '#D4AF37', borderColor: '#D4AF37' }}>
                      ACCOMPLISHMENTS
                    </h3>
                    <ul className="space-y-2">
                      {designer.accomplishments.map((accomplishment, index) => (
                        <li
                          key={index}
                          className="font-sans text-sm drop-shadow flex items-start gap-2"
                          style={{ color: '#D4AF37' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#D4AF37' }}></span>
                          <span>{accomplishment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
