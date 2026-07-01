import { useState } from 'react'
import ProjectRequest from './ProjectRequest'
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <ProjectRequest />
      <Contact />
      <Footer />
      <BackToTopButton />
    </main>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3">
       <a href="#home" className="flex items-center">
  <img
    src="/images/logo-full-transparent.png"
    alt="Sidhu Pacific Homes"
    className="h-12 w-auto max-w-[220px] object-contain md:h-16 md:max-w-none"
  />
</a>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
          <a href="#about" className="hover:text-amber-700">About</a>
          <a href="#services" className="hover:text-amber-700">Services</a>
          <a href="#projects" className="hover:text-amber-700">Projects</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </div>

        <div className="hidden md:block">
         
         <a
  href="#project-request"
  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-neutral-800"
>
  Get a Quote
</a>

        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="md:hidden bg-stone-900 text-white px-3 py-2 rounded-lg text-sm font-semibold shrink-0"
          aria-label="Open menu"
        >
          Menu
        </button>
      </nav>

      {/* Dark overlay */}
      {isOpen && (
        <button
          type="button"
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          aria-label="Close menu overlay"
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85%] bg-white z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <p className="font-bold text-lg">Sidhu Pacific Homes</p>

          <button
            type="button"
            onClick={closeMenu}
            className="text-stone-500 text-2xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5 text-lg font-medium">
          <a href="#about" onClick={closeMenu} className="hover:text-amber-700">
            About
          </a>

          <a href="#services" onClick={closeMenu} className="hover:text-amber-700">
            Services
          </a>

          <a href="#projects" onClick={closeMenu} className="hover:text-amber-700">
            Projects
          </a>

          <a href="#contact" onClick={closeMenu} className="hover:text-amber-700">
            Contact
          </a>
        </div>

        <div className="px-6 mt-4 flex flex-col gap-3">
          <a
            href="tel:6048623472"
            className="bg-amber-700 text-white px-5 py-3 rounded-lg font-semibold text-center"
          >
            Call Now
          </a>

          <a
            href="mailto:sidhupacifichomes@gmail.com"
            className="border border-stone-300 px-5 py-3 rounded-lg font-semibold text-center"
          >
            Send Email
          </a>
        </div>
      </aside>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-amber-700 font-semibold mb-4">
            Electrical Contractor • General Contractor • Custom Homes
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Custom Homes, Renovations, and Electrical Contracting Done Right
          </h1>

          <p className="mt-6 text-lg text-stone-600 max-w-xl">
            Sidhu Pacific Homes provides electrical contracting, general
            contracting, new custom home construction, renovations, and project
            management with quality workmanship and clear communication.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-amber-800"
            >
              Start Your Project
            </a>

            <a
              href="#projects"
              className="border border-stone-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-white"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="rounded-3xl h-[420px] overflow-hidden shadow-sm bg-stone-200">
          <img
            src="/images/fleetwood-project.jpeg"
            alt="Sidhu Pacific Homes Fleetwood project"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-amber-700 font-semibold mb-3">About Us</p>

          <h2 className="text-3xl md:text-4xl font-bold">
            A local contracting company focused on quality, reliability, and trust.
          </h2>
        </div>

        <div className="text-stone-600 leading-8">
          <p>
            Sidhu Pacific Homes is an electrical and general contracting company
            serving homeowners, builders, and project teams in the Lower
            Mainland for over 30 years. We support projects ranging from electrical work and
            renovations to new custom homes and full project coordination.
          </p>

          <p className="mt-5">
            Our goal is to make every project feel organized, professional, and
            dependable from the first conversation to the final walkthrough.
          </p>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      title: 'Electrical Contracting',
      text: 'Residential and commercial electrical services for new builds, renovations, upgrades, and project requirements.',
    },
    {
      title: 'General Contracting',
      text: 'Coordination and execution of construction projects from planning to completion.',
    },
    {
      title: 'New Custom Homes',
      text: 'Custom home construction built around your layout, lifestyle, budget, and long-term goals.',
    },
    {
      title: 'Renovations',
      text: 'Interior and exterior improvements that upgrade comfort, function, and property value.',
    },
    {
      title: 'Project Management',
      text: 'Clear coordination between trades, timelines, materials, inspections, and construction stages.',
    },
    {
      title: 'Home Improvements',
      text: 'Reliable support for additions, repairs, finishing work, and residential upgrade projects.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-amber-700 font-semibold mb-3">Services</p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Electrical and general contracting services for residential and commercial projects.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-7 rounded-2xl shadow-sm border border-stone-200"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-7">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Fleetwood Project',
      image: '/images/fleetwood-project.jpeg',
      description:
        'Residential construction project completed with quality workmanship and organized coordination.',
    },
    {
      title: 'Retail Lighting',
      image: '/images/retail-lighting.png',
      description:
        'Lighting installation work completed with a clean layout, strong finish, and attention to detail.',
    },
    {
      title: 'Surrey Custom Build',
      image: '/images/project-2.jpeg',
      description:
        'Custom residential project work completed with reliable planning and detailed execution.',
    },
    {
      title: 'Oakridge Mall',
      image: '/images/oakridge-mall.png',
      description:
        'Electrical and contracting support completed in a larger commerical environment.',
    },
    {
      title: 'Subdivision',
      image: '/images/subdivison.png',
      description:
        'Residential subdivision work with a focus on dependable construction and project execution.',
    },
    {
      title: 'Gibsons, Vancouver Island',
      image: '/images/gibsons-vancouver-island.png',
      description:
        'Residential project work completed with organized site coordination and reliable workmanship.',
    },
    {
      title: 'Lougheed Mall',
      image: '/images/lougheed-mall.png',
      description:
        'Commercial lighting and electrical work completed in a mall project environment.',
    },
    {
      title: 'Cloverdale Project',
      image: '/images/cloverdale-project.png',
      description:
        'General contracting and construction support for a residential project.',
    },
    {
      title: 'Gibsons Project',
      image: '/images/gibsons-project.png',
      description:
        'Residential construction support completed with dependable project coordination.',
    },
    {
      title: 'South Surrey New Build',
      image: '/images/south-surrey.JPG',
      description:
        'Early-stage custom home construction in South Surrey, including foundation preparation, formwork, and site coordination.',
    },
  ]

  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedProject =
    selectedIndex !== null ? projects[selectedIndex] : null

  const openSlideshow = (index) => {
    setSelectedIndex(index)
  }

  const closeSlideshow = () => {
    setSelectedIndex(null)
  }

  const showPrevious = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    )
  }

  const showNext = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <section id="projects" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <p className="text-amber-700 font-semibold mb-3">Projects</p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Recent work and featured projects.
        </h2>

        <p className="text-stone-600 mb-10 max-w-2xl">
          A look at electrical, general contracting, custom home, renovation,
          commercial lighting, and project management work completed by Sidhu
          Pacific Homes.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-white"
            >
              <button
                type="button"
                onClick={() => openSlideshow(index)}
                className="h-56 sm:h-64 w-full overflow-hidden bg-stone-200 block cursor-pointer"
                aria-label={`Open ${project.title} slideshow`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </button>

              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-stone-600 mt-2 leading-7">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4">
          <button
            type="button"
            onClick={closeSlideshow}
            className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-amber-500"
            aria-label="Close slideshow"
          >
            ×
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-4 md:left-8 text-white text-5xl font-bold hover:text-amber-500"
            aria-label="Previous project"
          >
            ‹
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />

            <div className="text-center mt-5 text-white">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>

              <p className="text-stone-300 mt-2 max-w-2xl mx-auto">
                {selectedProject.description}
              </p>

              <p className="text-stone-400 mt-3 text-sm">
                {selectedIndex + 1} / {projects.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 md:right-8 text-white text-5xl font-bold hover:text-amber-500"
            aria-label="Next project"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

function WhyChooseUs() {
  const reasons = [
    {
      number: '01',
      title: 'Electrical & Construction Experience',
      text: 'Hands-on experience across electrical work, residential builds, renovations, and project coordination.',
    },
    {
      number: '02',
      title: 'Clear Communication',
      text: 'Straightforward updates and organized planning so clients know what is happening at each stage.',
    },
    {
      number: '03',
      title: 'Quality Workmanship',
      text: 'Focused on clean finishes, reliable installation, and construction work built to last.',
    },
    {
      number: '04',
      title: 'Reliable Project Coordination',
      text: 'Coordinating trades, timelines, materials, and site progress to keep projects moving smoothly.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="max-w-3xl">
          <p className="text-amber-500 font-semibold mb-3">Why Choose Us</p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Built with care, managed with attention, and finished with quality.
          </h2>

          <p className="mt-5 text-stone-300 leading-7">
            From early planning to final walkthrough, Sidhu Pacific Homes focuses
            on dependable work, clear communication, and organized project execution.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mt-12">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/10 border border-white/10 p-6 rounded-2xl hover:bg-white/15 transition"
            >
              <p className="text-amber-500 font-bold mb-5">{reason.number}</p>

              <h3 className="text-lg font-bold mb-3">
                {reason.title}
              </h3>

              <p className="text-stone-300 leading-7 text-sm">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-stone-200 p-8 md:p-12">
          <p className="text-amber-700 font-semibold mb-3">Contact</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your next project?
          </h2>

          <p className="text-stone-600 mb-8">
            Reach out for electrical contracting, general contracting, new custom
            homes, renovations, or project management across the Lower Mainland.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <ContactItem label="Phone" value="604-862-3472" />
            <ContactItem label="Email" value="sidhupacifichomes@gmail.com" />
            <ContactItem label="Service Area" value="Lower Mainland, BC" />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:6048623472"
              className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-amber-800"
            >
              Call Now
            </a>

            <a
              href="mailto:sidhupacifichomes@gmail.com"
              className="border border-stone-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-stone-50"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ label, value }) {
  return (
    <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
      <p className="text-sm text-stone-500 mb-1">{label}</p>
      <p className="font-semibold text-sm sm:text-base break-words">
        {value}
      </p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-stone-500">
        <p>© 2026 Sidhu Pacific Homes. All rights reserved.</p>
        <p>• Electrical Contracting • General Contracting </p>
      </div>
    </footer>
  )
}

function BackToTopButton() {
  return (
    <a
      href="#home"
      className="fixed bottom-5 right-5 z-50 bg-stone-900 text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-700 transition text-xl font-bold"
      aria-label="Back to top"
    >
      ↑
    </a>
  )
}

export default App