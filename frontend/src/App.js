import { useEffect } from 'react';
import '@/App.css';
import { Toaster } from 'sonner';

import Nav from '@/components/nuregen/Nav';
import Hero from '@/components/nuregen/Hero';
import WhoWeAre from '@/components/nuregen/WhoWeAre';
import DidYouKnow from '@/components/nuregen/DidYouKnow';
import Problem from '@/components/nuregen/Problem';
import OurSolution from '@/components/nuregen/OurSolution';
import TechExpertise from '@/components/nuregen/TechExpertise';
import OurProcess from '@/components/nuregen/OurProcess';
import ValuePillars from '@/components/nuregen/ValuePillars';
import PartnerLogos from '@/components/nuregen/PartnerLogos';
import Gallery from '@/components/nuregen/Gallery';
import Footer from '@/components/nuregen/Footer';

function usePageReveal() {
    useEffect(() => {
        const nodes = document.querySelectorAll('.reveal:not(.in)');
        if (!('IntersectionObserver' in window)) {
            nodes.forEach((n) => n.classList.add('in'));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        io.unobserve(e.target);
                    }
                });
            },
            { rootMargin: '0px 0px -60px 0px', threshold: 0.08 },
        );
        nodes.forEach((n) => io.observe(n));
        return () => io.disconnect();
    });
}

function Site() {
    usePageReveal();
    return (
        <div className="App nr-page-bg">
            <Nav />
            <Hero />
            <WhoWeAre />
            <DidYouKnow />
            <Problem />
            <OurSolution />
            <TechExpertise />
            <OurProcess />
            <ValuePillars />
            <PartnerLogos />
            <Gallery />
            <Footer />
            <Toaster position="bottom-right" richColors />
        </div>
    );
}

export default function App() {
    return <Site />;
}
