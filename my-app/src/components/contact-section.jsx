"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const contactFormRef = useRef(null);
  const [sending, setSending] = useState(false);

  const [toast, setToast] = useState(null);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        formRef.current,
        { opacity: 0, y: 50, scale: 0.95, rotateX: -10 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
        }
      ).fromTo(
        infoRef.current,
        { opacity: 0, y: 50, scale: 0.95, rotateX: -10 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactFormRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars missing. Check .env values.");
      setToast({
        type: "error",
        text: "Email setup incomplete. Please try again later.",
      });
      return;
    }

    try {
      setSending(true);
      // sendForm automatically serializes inputs by their `name` attributes:
      await emailjs.sendForm(
        serviceId,
        templateId,
        contactFormRef.current,
        publicKey
      );
      // optional: minimal UX—no design change
      // eslint-disable-next-line no-alert
      setToast({ type: "success", text: "Message sent successfully!" });
      e.target.reset();
    } catch (err) {
      console.error(err);
      // eslint-disable-next-line no-alert
      setToast({
        type: "error",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-card/50 opacity-20 z-0"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary drop-shadow-md">
          Let's Connect
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div
            ref={formRef}
            className="w-full md:w-2/3 bg-card p-8 rounded-xl shadow-xl border border-border"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send Me a Message
            </h3>
            <form
              ref={contactFormRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-foreground/90 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="bg-background border-border text-foreground focus:border-primary focus:ring-primary focus:ring-2 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground/90 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder="your@example.com"
                  className="bg-background border-border text-foreground focus:border-primary focus:ring-primary focus:ring-2 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-foreground/90 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  className="bg-background border-border text-foreground focus:border-primary focus:ring-primary focus:ring-2 transition-all duration-300"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                aria-busy={sending}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              >
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div
            ref={infoRef}
            className="w-full md:w-1/3 bg-card p-8 rounded-xl shadow-xl border border-border"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Contact Information
            </h3>
            <div className="space-y-6 text-foreground/90">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-secondary" />
                <span>jadoonafzal027@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-secondary" />
                <span>+92 3149961015</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-secondary" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/afzaljadoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors transform hover:scale-110"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mir-afzal-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors transform hover:scale-110"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://www.instagram.com/afzal_khan_jadoon?gsh=MXdyOXB1eHV1Y2Jsag=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors transform hover:scale-110"
                >
                  <Twitter className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast && (
        <div className="fixed bottom-6 right-6 z-[100]">
          <div
            role="alert"
            className={`rounded-lg border px-4 py-3 text-sm shadow-xl ${
              toast.type === "success"
                ? "bg-green-600 text-white border-green-400"
                : "bg-red-600 text-white border-red-400"
            }`}
          >
            {toast.text}
          </div>
        </div>
      )}
    </section>
  );
}
