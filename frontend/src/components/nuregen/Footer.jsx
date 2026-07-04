import { useState } from 'react';
import axios from 'axios';
import { SECTIONS, CONTACT } from '@/constants/testIds';
import { LOGO_LOCKUP } from '@/lib/assets';
import { toast } from 'sonner';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const EMAIL = 'info@nuregen.earth';

const COLUMNS = [
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#about' },
            { label: 'Our Solution', href: '#solution' },
            { label: 'Technology Expertise', href: '#tech' },
            { label: 'Our Process', href: '#process' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Carbon Clock', href: '#clock' },
            { label: 'Our Process', href: '#process' },
            { label: 'Value Pillars', href: '#pillars' },
        ],
    },
    {
        title: 'Connect',
        links: [
            { label: 'Partner With Us', href: '#footer' },
            { label: 'Contact', href: `mailto:${EMAIL}` },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nuregen/', external: true },
        ],
    },
];

export default function Footer() {
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [ok, setOk] = useState(false);

    const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        try {
            await axios.post(`${API}/contact`, form);
            setOk(true);
            setForm({ name: '', email: '', company: '', message: '' });
            toast.success('Message received. We’ll be in touch.');
        } catch (err) {
            const detail = err?.response?.data?.detail || 'Something went wrong.';
            toast.error(typeof detail === 'string' ? detail : 'Please check your inputs.');
        } finally {
            setSubmitting(false);
        }
    };

    const goToLink = (href, external) => (e) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const el = document.getElementById(href.slice(1));
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (external) {
            // let browser handle
        }
    };

    return (
        <footer id="footer" data-testid={SECTIONS.footer} className="nr-footer">
            <div className="nr-container relative z-10 px-4 sm:px-6" style={{ paddingTop: 110, paddingBottom: 40 }}>
                <div className="grid lg:grid-cols-[1fr_1fr] gap-16">
                    {/* Left — brand + tagline */}
                    <div className="reveal">
                        <div className="flex items-center gap-4">
                            <img
                                src={LOGO_LOCKUP}
                                alt="NuRegen"
                                style={{
                                    height: 76,
                                    width: 'auto',
                                    mixBlendMode: 'screen',
                                    filter: 'brightness(1.05)',
                                }}
                            />
                        </div>
                        <p
                            className="font-serif-display mt-6"
                            style={{
                                color: 'var(--nr-paper)',
                                fontSize: 'clamp(22px, 2.4vw, 32px)',
                                fontWeight: 400,
                                lineHeight: 1.25,
                                maxWidth: 480,
                            }}
                        >
                            Regenerating Nature.{' '}
                            <em style={{ fontStyle: 'italic', color: '#B8D8A0' }}>
                                Delivering Climate Impact.
                            </em>
                        </p>

                        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                            {COLUMNS.map((col) => (
                                <div key={col.title}>
                                    <div
                                        className="font-mono-label text-[10.5px] tracking-[0.26em] uppercase"
                                        style={{ color: 'rgba(252,251,247,0.55)' }}
                                    >
                                        {col.title}
                                    </div>
                                    <ul className="mt-4 space-y-3">
                                        {col.links.map((l) => (
                                            <li key={l.label}>
                                                <a
                                                    href={l.href}
                                                    target={l.external ? '_blank' : undefined}
                                                    rel={l.external ? 'noopener noreferrer' : undefined}
                                                    onClick={goToLink(l.href, l.external)}
                                                    style={{
                                                        color: 'rgba(252,251,247,0.85)',
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: 14,
                                                    }}
                                                    className="hover:text-white transition"
                                                >
                                                    {l.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — contact form */}
                    <div className="reveal delay-2">
                        <div
                            className="font-mono-label text-[11px] tracking-[0.28em] uppercase"
                            style={{ color: 'rgba(252,251,247,0.6)' }}
                        >
                            Partner With Us
                        </div>
                        <h3
                            className="font-serif-display mt-3"
                            style={{ color: 'var(--nr-paper)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.15 }}
                        >
                            Let’s build the next{' '}
                            <em style={{ fontStyle: 'italic', color: '#B8D8A0' }}>
                                high-integrity carbon project
                            </em>{' '}
                            together.
                        </h3>
                        <p className="mt-4" style={{ color: 'rgba(252,251,247,0.75)', fontSize: 14.5, lineHeight: 1.65 }}>
                            Reach us directly at{' '}
                            <a href={`mailto:${EMAIL}`} style={{ color: '#B8D8A0' }} className="underline underline-offset-4">
                                {EMAIL}
                            </a>{' '}
                            — or send us a note below.
                        </p>

                        <form onSubmit={submit} data-testid={CONTACT.form} className="mt-8 grid gap-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    required
                                    data-testid={CONTACT.name}
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={onChange('name')}
                                    className="nr-input"
                                />
                                <input
                                    required
                                    type="email"
                                    data-testid={CONTACT.email}
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={onChange('email')}
                                    className="nr-input"
                                />
                            </div>
                            <input
                                data-testid={CONTACT.company}
                                placeholder="Company (optional)"
                                value={form.company}
                                onChange={onChange('company')}
                                className="nr-input"
                            />
                            <textarea
                                required
                                data-testid={CONTACT.message}
                                placeholder="Tell us about your project or interest…"
                                value={form.message}
                                onChange={onChange('message')}
                                rows={4}
                                className="nr-input"
                                style={{ resize: 'vertical' }}
                            />
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                {ok ? (
                                    <span
                                        data-testid={CONTACT.success}
                                        className="font-mono-label text-[11px] tracking-[0.22em] uppercase"
                                        style={{ color: '#B8D8A0' }}
                                    >
                                        Received — we’ll be in touch shortly.
                                    </span>
                                ) : (
                                    <span className="font-mono-label text-[10.5px] tracking-[0.2em] uppercase" style={{ color: 'rgba(252,251,247,0.5)' }}>
                                        Submissions go to {EMAIL}
                                    </span>
                                )}
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    data-testid={CONTACT.submit}
                                    className="nr-btn-rust"
                                >
                                    {submitting ? 'Sending…' : 'Send Message'}
                                    <span aria-hidden>→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div
                    className="mt-20 pt-8 flex items-center justify-between gap-6 flex-wrap"
                    style={{ borderTop: '1px solid rgba(252,251,247,0.12)' }}
                >
                    <div
                        className="font-mono-label text-[10.5px] tracking-[0.24em] uppercase"
                        style={{ color: 'rgba(252,251,247,0.5)' }}
                    >
                        © {new Date().getFullYear()} NuRegen · Bhubaneswar, India
                    </div>
                    <div
                        className="font-mono-label text-[10.5px] tracking-[0.24em] uppercase"
                        style={{ color: 'rgba(252,251,247,0.5)' }}
                    >
                        Regenerating Nature. Delivering Climate Impact.
                    </div>
                </div>
            </div>

            {/* local input styles */}
            <style>{`
                .nr-input {
                    background: rgba(252,251,247,0.10);
                    border: 1px solid rgba(252,251,247,0.28);
                    color: var(--nr-paper);
                    padding: 14px 16px;
                    border-radius: 12px;
                    font-family: 'Inter', sans-serif;
                    font-size: 14px;
                    transition: border-color 200ms ease, background-color 200ms ease;
                    width: 100%;
                    outline: none;
                }
                .nr-input::placeholder { color: rgba(252,251,247,0.6); }
                .nr-input:focus {
                    border-color: rgba(184, 216, 160, 0.85);
                    background: rgba(252,251,247,0.14);
                }
            `}</style>
        </footer>
    );
}
