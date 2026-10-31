
"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "254741453872";

const services = [
  {
    icon: "",
    title: "Interior Painting",
    description:
      "Refresh bedrooms, living rooms, kitchens and hallways with colours that make your space feel like home.",
  },
  {
    icon: "",
    title: "Exterior Painting",
    description:
      "Give your home's exterior a fresh appearance with suitable paints and careful surface preparation.",
  },
  {
    icon: "",
    title: "Repainting",
    description:
      "Revive faded or tired walls with a fresh coat and a cleaner, brighter finish.",
  },
  {
    icon: "",
    title: "New House Painting",
    description:
      "Give your new home a beautiful finish with painting planned around your property and preferences.",
  },
  {
    icon: "",
    title: "Decorative Finishes",
    description:
      "Explore feature walls, decorative effects and special finishes to add character to your space.",
  },
  {
    icon: "",
    title: "Commercial Painting",
    description:
      "Refresh offices, shops, rental properties and other commercial spaces.",
  },
];

const projects = [
  {
    title: "Exterior transformations",
    category: "Exterior painting",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Bright living spaces",
    category: "Interior painting",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Modern home finishes",
    category: "New house painting",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  const [status, setStatus] = useState("");

  function handleQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const location = String(data.get("location") || "").trim();
    const service = String(data.get("service") || "");
    const property = String(data.get("property") || "");
    const details = String(data.get("details") || "").trim();

    const message = [
      "Hello Wainaina Paints! I would like a painting quotation.",
      "",
      `Name: ${name}`,
      `My phone number: ${phone}`,
      `Project location: ${location}`,
      `Service needed: ${service}`,
      `Property type: ${property}`,
      `Project details: ${details || "Not provided yet"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setStatus(
      "WhatsApp has been opened with your quotation details. Send the message there to complete your inquiry."
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Top information bar */}
      <div className="bg-[#102b49] px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
        Professional Painting Services · Meru and Nearby Areas
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-yellow-400 text-2xl text-[#102b49]">
              
            </span>
            <span>
              <span className="block text-lg font-black tracking-tight text-[#102b49] sm:text-xl">
                Wainaina Paints
              </span>
              <span className="block text-[9px] font-bold tracking-[0.2em] text-sky-600">
                PAINTING & FINISHES
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a href="#services" className="hover:text-sky-600">Services</a>
            <a href="#projects" className="hover:text-sky-600">Our Work</a>
            <a href="#about" className="hover:text-sky-600">About Us</a>
            <a href="#quote" className="hover:text-sky-600">Contact</a>
          </div>

          <a
            href="#quote"
            className="rounded-lg bg-yellow-400 px-4 py-3 text-xs font-extrabold text-[#102b49] transition hover:bg-yellow-300 sm:text-sm"
          >
            Get a Quote 
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-sky-50">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-bold text-sky-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              YOUR LOCAL PAINTING PARTNER
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#102b49] sm:text-6xl lg:text-7xl">
              A Fresh Coat.
              <br />
              A Whole New
              <span className="block text-sky-600">Feeling.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Give your home or business a fresh new look. Wainaina Paints offers
              interior painting, exterior painting and beautiful finishing
              services in Meru and nearby areas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="rounded-xl bg-yellow-400 px-6 py-4 font-extrabold text-[#102b49] shadow-lg shadow-yellow-200 transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Request a Quote 
              </a>

              <a
                href="#services"
                className="rounded-xl border border-sky-200 bg-white px-6 py-4 font-bold text-[#102b49] transition hover:border-sky-500"
              >
                Explore Services 
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
              <span>Residential painting</span>
              <span> Commercial painting</span>
              <span> Meru and nearby areas</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-yellow-300" />
            <img
              src={projects[0].image}
              alt="Example of a modern residential property"
              className="relative h-[330px] w-full rounded-[1.5rem] object-cover shadow-xl sm:h-[460px]"
            />
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-xl sm:left-8 sm:p-5">
              <p className="font-extrabold text-[#102b49]">
                Your space, refreshed.
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Painting services in Meru
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#102b49] sm:text-5xl">
            The Right Finish for Every Space
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Whether you are building, renovating or simply ready for a change,
            let us discuss your painting project.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
            >
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${
                  index % 2 === 0 ? "bg-yellow-100" : "bg-sky-100"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#102b49]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <a
                href="#quote"
                className="mt-5 inline-block text-sm font-extrabold text-sky-700 hover:text-sky-900"
              >
                Ask for a quotation 
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Project gallery */}
      <section id="projects" className="bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
                Our Work
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#102b49] sm:text-5xl">
                Inspiration for Your Space
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              These are illustrative reference images, not verified Wainaina Paints
              projects. We will replace them with the client&apos;s real work
              photographs before launch.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.category + " reference image"}
                  className="h-64 w-full object-cover"
                />
                <div className="p-5">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-[#102b49]">
                    Reference image
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-[#102b49]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {project.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#102b49] p-8 text-white sm:p-12">
            <div className="text-5xl"></div>
            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
              Good preparation.
              <span className="block text-yellow-400">Beautiful finishes.</span>
            </h2>
            <p className="mt-5 leading-8 text-sky-100">
              Every project starts with understanding your space, the condition
              of your surfaces and the result you want to achieve.
            </p>
            <a
              href="#quote"
              className="mt-8 inline-flex rounded-xl bg-yellow-400 px-5 py-4 font-extrabold text-[#102b49] hover:bg-yellow-300"
            >
              Discuss Your Project ↗
            </a>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
              Why Wainaina Paints
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#102b49] sm:text-4xl">
              Painting made simpler.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              We aim to make planning your painting project straightforward,
              from the first discussion to reviewing the finished work.
            </p>

            {[
              ["", "Careful preparation", "Discuss surface preparation and paint requirements before work begins."],
              ["", "Clear quotations", "Understand the proposed work and costs before committing."],
              ["", "Respect for your space", "Plan the work with attention to neatness and an orderly handover."],
              ["", "Local service", "Contact us about projects in Meru and nearby areas."],
            ].map(([icon, title, description]) => (
              <div key={title} className="mt-6 flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-100 font-black text-sky-700">
                  {icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-[#102b49]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="bg-sky-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="lg:py-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
              Let&apos;s Get Started
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#102b49] sm:text-5xl">
              Ready to refresh your space?
            </h2>
            <p className="mt-5 max-w-lg leading-8 text-slate-600">
              Tell us a little about your painting project. Submit the form to
              open WhatsApp with your details ready to send.
            </p>

            <div className="mt-8 rounded-2xl border border-sky-100 bg-white p-5">
              <p className="font-extrabold text-[#102b49]">
                Serving Meru and nearby areas
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                For questions or quotations, contact Wainaina Paints directly
                through WhatsApp.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-xl bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-700"
              >
                Chat on WhatsApp 
              </a>
            </div>
          </div>

          <form
            onSubmit={handleQuote}
            className="rounded-3xl bg-white p-6 shadow-xl shadow-sky-100 sm:p-9"
          >
            <h3 className="text-2xl font-black text-[#102b49]">
              Request a Painting Quote
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fields marked * are required.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold">
                  Your name 
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-bold">
                  Phone number 
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="07xx xxx xxx"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="location" className="mb-2 block text-sm font-bold">
                  Project location 
                </label>
                <input
                  id="location"
                  name="location"
                  required
                  placeholder="Town, estate or area"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label htmlFor="property" className="mb-2 block text-sm font-bold">
                  Property type
                </label>
                <select
                  id="property"
                  name="property"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky-500"
                >
                  <option>Residential house</option>
                  <option>Apartment</option>
                  <option>Rental property</option>
                  <option>Office or commercial space</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-bold">
                  Service needed 
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky-500"
                >
                  <option value="" disabled>Select service</option>
                  {services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="details" className="mb-2 block text-sm font-bold">
                  Project details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Number of rooms, house size, preferred colours or other details..."
                  className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-yellow-400 px-5 py-4 font-black text-[#102b49] transition hover:bg-yellow-300"
            >
              Continue to WhatsApp 
            </button>

            {status && (
              <p role="status" className="mt-4 rounded-lg bg-green-50 p-3 text-sm leading-6 text-green-800">
                {status}
              </p>
            )}

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Your message is not sent automatically. Review and send it in
              WhatsApp.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102b49] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <a href="#home" className="text-xl font-black tracking-tight">
              Wainaina Paints<span className="text-yellow-400">.</span>
            </a>
            <p className="mt-2 text-sm text-sky-100">
              Painting & finishing services in Meru, Kenya.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-sky-100">
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#projects" className="hover:text-yellow-400">Our Work</a>
            <a href="#quote" className="hover:text-yellow-400">Get a Quote</a>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-yellow-400 hover:text-yellow-300"
          >
            WhatsApp Wainaina Paints ↗
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-sky-200">
         © 2026 Wainaina Paints. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Wainaina Paints on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-5 py-4 font-extrabold text-white shadow-xl transition hover:scale-105 hover:bg-green-700"
      >
        WhatsApp ↗
      </a>
    </main>
  );
}
