import { useState } from 'react'

function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Contact />
      <Footer />
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
      <nav className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
       <a href="#home" className="flex items-center">
  <img
    src="/images/logo-full.png"
    alt="Sidhu Pacific Homes"
    className="h-20 w-auto"
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
            href="#contact"
            className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-700"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="md:hidden bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-semibold"
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
      image: '/images/project-2.jpg',
      description:
        'Custom residential project work completed with reliable planning and detailed execution.',
    },
    {
      title: 'Oakridge Mall',
      image: '/images/oakridge-mall.png',
      description:
        'Electrical and contracting support completed in a larger project environment.',
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
      title: 'Gibsons, Vancouver Island',
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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-white"
            >
              <div className="h-64 overflow-hidden bg-stone-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

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

          <div className="grid md:grid-cols-3 gap-6">
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
      <p className="font-semibold break-words">{value}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-stone-500">
        <p>© 2026 Sidhu Pacific Homes. All rights reserved.</p>
        <p>Electrical • General Contracting • Custom Homes</p>
      </div>
    </footer>
  )
}

export default App