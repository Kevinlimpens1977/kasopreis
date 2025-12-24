import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const SponsorInfoPage: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: "Kan ik meerdere accounts maken?",
            answer: "Ja, dit is toegestaan. Let wel op: je tickets worden dan verspreid over meerdere accounts, waardoor het lastiger wordt om de prijs voor \"meeste tickets\" te winnen. Het kan strategisch slimmer zijn om al je tickets op één account te verzamelen."
        },
        {
            question: "Wat gebeurt er met mijn tickets als ik stop met spelen?",
            answer: "Je tickets blijven bewaard tot 30 april 2026 en doen automatisch mee aan de eindtrekking."
        },
        {
            question: "Hoe weet ik hoeveel tickets ik heb?",
            answer: "Je totale aantal tickets en de unieke ticket-ID's zijn zichtbaar op je dashboard."
        },
        {
            question: "Wanneer krijg ik mijn winst uitbetaald?",
            answer: "Na 30 april 2026 worden alle winnaars gecontacteerd voor uitbetaling."
        }
    ];

    return (
        <div className="relative z-10 min-h-screen overflow-y-auto scrollbar-hide pb-32">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
                <div className="animate-float">
                    <span className="text-8xl mb-4 block">🐉</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-red-500 mb-4 font-display">
                    DRAGON TETRIS
                </h1>
                <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-2xl">
                    Sponsor Uitleg
                </p>
                <div className="glass-panel rounded-2xl p-6 max-w-3xl mb-8">
                    <p className="text-lg text-gray-200 leading-relaxed">
                        Dragon Tetris is een uniek online arcade-spel dat de klassieke Tetris-gameplay combineert
                        met een spannend beloningssysteem. Verzamel tickets en maak kans op de <span className="text-amber-400 font-bold">Gouden Drakenkist Munten</span>!
                    </p>
                </div>
                <div className="animate-bounce text-amber-400 text-4xl">↓</div>
            </section>

            {/* How It Works - Credits */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-amber-400 mb-4 flex items-center justify-center gap-3">
                        <span>🎮</span> Hoe werkt het spel?
                    </h2>

                    <div className="glass-panel rounded-2xl p-8 mb-8">
                        <h3 className="text-2xl font-bold text-red-400 mb-4">Credits Kopen</h3>
                        <p className="text-gray-300 mb-6">
                            Om Dragon Tetris te spelen, heb je <span className="text-amber-400 font-bold">credits</span> nodig.
                            Elke credit geeft je recht op <span className="text-amber-400 font-bold">1 game</span>.
                            Credits kunnen worden gekocht via onze beveiligde betaalomgeving (iDEAL).
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-center">
                                <thead>
                                    <tr className="border-b border-amber-500/30">
                                        <th className="py-3 text-amber-400 font-bold">Credits</th>
                                        <th className="py-3 text-amber-400 font-bold">Prijs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                        <td className="py-4 text-xl">1 Credit</td>
                                        <td className="py-4 text-xl text-green-400 font-bold">€5,00</td>
                                    </tr>
                                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                        <td className="py-4 text-xl">3 Credits</td>
                                        <td className="py-4 text-xl text-green-400 font-bold">€12,00</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="py-4 text-xl">5 Credits</td>
                                        <td className="py-4 text-xl text-green-400 font-bold">€15,00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="glass-panel rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-red-400 mb-4">Het Spel Spelen</h3>
                        <ul className="space-y-3 text-gray-200">
                            <li className="flex items-start gap-3">
                                <span className="text-amber-400">▸</span>
                                Start een game met 1 credit
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-400">▸</span>
                                Speel Tetris op de klassieke manier: lijn blokken uit en maak rijen compleet
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-400">▸</span>
                                Hoe meer rijen je in één keer wegwerkt, hoe meer punten je verdient
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-400">▸</span>
                                Het spel wordt steeds sneller naarmate je meer levels bereikt (tot level 10)
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tickets Section */}
            <section className="py-16 px-6 bg-gradient-to-b from-transparent via-red-900/10 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-amber-400 mb-4 flex items-center justify-center gap-3">
                        <span>🎯</span> Het Doel: Punten & Tickets Verzamelen
                    </h2>
                    <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
                        Het ultieme doel is om <span className="text-amber-400 font-bold">zoveel mogelijk punten</span> te scoren.
                        Hoe hoger je score, hoe meer <span className="text-amber-400 font-bold">tickets</span> je verdient!
                    </p>

                    <div className="glass-panel rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">Ticket Drempels</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { score: '5.000+', tickets: 1 },
                                { score: '10.000+', tickets: 2 },
                                { score: '15.000+', tickets: 3 },
                                { score: '20.000+', tickets: 4 },
                                { score: '25.000+', tickets: 5 },
                                { score: '30.000+', tickets: 6 },
                                { score: '40.000+', tickets: 8 },
                                { score: '50.000+', tickets: 10 },
                                { score: '80.000+', tickets: 15, special: true },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`p-4 rounded-xl text-center transition-transform hover:scale-105 ${item.special
                                            ? 'bg-gradient-to-br from-amber-500/30 to-red-500/30 border-2 border-amber-400'
                                            : 'bg-white/5 border border-white/10'
                                        }`}
                                >
                                    <div className="text-2xl font-bold text-white mb-2">{item.score}</div>
                                    <div className="text-amber-400 text-lg">
                                        {'🎟️'.repeat(Math.min(item.tickets, 5))} {item.tickets > 5 && `+${item.tickets - 5}`}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">{item.tickets} ticket{item.tickets > 1 ? 's' : ''}</div>
                                    {item.special && <div className="text-amber-400 mt-2">🏆</div>}
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
                            <p className="text-amber-200 text-center font-medium">
                                <span className="text-amber-400">⚡</span> Belangrijk: Elk ticket is uniek en vergroot je kans op de eindprijzen!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bonus Credits Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-amber-400 mb-4 flex items-center justify-center gap-3">
                        <span>🎁</span> Gratis Credits Verdienen
                    </h2>
                    <p className="text-center text-gray-300 mb-8">
                        Naast het kopen van credits, kun je ook <span className="text-green-400 font-bold">gratis credits</span> verdienen:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="glass-panel rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                            <div className="text-5xl mb-4">🎯</div>
                            <h3 className="text-xl font-bold text-amber-400 mb-2">Bonus Credit</h3>
                            <p className="text-gray-300 mb-4">20.000 punten</p>
                            <div className="bg-green-500/20 rounded-lg py-2 px-4 inline-block">
                                <span className="text-green-400 font-bold">+1 gratis credit</span>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">Tijdens het spel!</p>
                        </div>

                        <div className="glass-panel rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                            <div className="text-5xl mb-4">👑</div>
                            <h3 className="text-xl font-bold text-amber-400 mb-2">Highscore Record</h3>
                            <p className="text-gray-300 mb-4">Verbreek de hoogste score</p>
                            <div className="bg-green-500/20 rounded-lg py-2 px-4 inline-block">
                                <span className="text-green-400 font-bold">+3 gratis credits</span>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">Overall hoogste score!</p>
                        </div>

                        <div className="glass-panel rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                            <div className="text-5xl mb-4">🎟️</div>
                            <h3 className="text-xl font-bold text-amber-400 mb-2">Ticket Leider</h3>
                            <p className="text-gray-300 mb-4">Word #1 ticket houder</p>
                            <div className="bg-green-500/20 rounded-lg py-2 px-4 inline-block">
                                <span className="text-green-400 font-bold">+1 gratis credit</span>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">Bij inhalen andere speler!</p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-amber-500/10 rounded-xl border border-amber-500/30 max-w-2xl mx-auto">
                        <p className="text-amber-200 text-center text-sm">
                            <span className="text-amber-400">⚠️</span> De Ticket Leider Bonus wordt alleen uitgekeerd wanneer je een <strong>andere speler</strong> inhaalt,
                            niet wanneer je zelf al #1 bent en meer tickets toevoegt.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grand Finale Section */}
            <section className="py-16 px-6 bg-gradient-to-b from-transparent via-amber-900/10 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-amber-400 mb-4 flex items-center justify-center gap-3">
                        <span>🏆</span> De Grote Finale
                    </h2>

                    <div className="glass-panel rounded-2xl p-8 mb-8 text-center">
                        <div className="text-6xl mb-4">📅</div>
                        <h3 className="text-3xl font-bold text-red-400 mb-2">30 April 2026</h3>
                        <p className="text-gray-300">
                            Op deze dag stopt het spel en wordt de <span className="text-amber-400 font-bold">Gouden Drakenkist</span> geopend!
                        </p>
                    </div>

                    <div className="glass-panel rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-red-400 mb-6 text-center flex items-center justify-center gap-2">
                            <span>💰</span> Verdeling van de Opbrengst
                        </h3>
                        <p className="text-center text-gray-300 mb-6">
                            Van de <span className="text-amber-400 font-bold">totale opbrengst</span> van alle verkochte credits wordt <span className="text-green-400 font-bold text-2xl">25%</span> uitgekeerd aan de spelers:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl p-6 text-center border border-amber-500/30">
                                <div className="text-4xl mb-2">🏆</div>
                                <div className="text-3xl font-bold text-amber-400 mb-2">5%</div>
                                <h4 className="font-bold text-white mb-2">Hoogste Score</h4>
                                <p className="text-sm text-gray-400">De speler met de hoogste score ooit behaald</p>
                            </div>

                            <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl p-6 text-center border border-red-500/30">
                                <div className="text-4xl mb-2">🎟️</div>
                                <div className="text-3xl font-bold text-red-400 mb-2">5%</div>
                                <h4 className="font-bold text-white mb-2">Meeste Tickets</h4>
                                <p className="text-sm text-gray-400">De speler met het hoogste aantal verzamelde tickets</p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl p-6 text-center border border-purple-500/30">
                                <div className="text-4xl mb-2">🎡</div>
                                <div className="text-3xl font-bold text-purple-400 mb-2">15%</div>
                                <h4 className="font-bold text-white mb-2">Rad van Fortuin</h4>
                                <p className="text-sm text-gray-400">Willekeurig verdeeld over alle spelers met tickets</p>
                            </div>
                        </div>

                        <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/30">
                            <h4 className="text-xl font-bold text-purple-400 mb-4 text-center">🎡 Het Rad van Fortuin</h4>
                            <p className="text-gray-300 text-center mb-4">
                                <span className="text-amber-400 font-bold">Elk uniek ticket = 1 kans op het rad!</span>
                            </p>
                            <ul className="space-y-2 text-gray-300 max-w-md mx-auto">
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">✓</span>
                                    Hoe meer unieke tickets, hoe groter je kans op uitbetaling
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">✓</span>
                                    Meerdere tickets kunnen meerdere keren winnen
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">✓</span>
                                    Iedereen met minstens 1 ticket maakt kans!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategy Tips */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-amber-400 mb-8 flex items-center justify-center gap-3">
                        <span>💡</span> Strategie Tips
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { num: 1, tip: "Speel regelmatig", desc: "Elk spel is een kans op meer tickets" },
                            { num: 2, tip: "Ga voor hoge scores", desc: "Meer punten = meer tickets per game" },
                            { num: 3, tip: "Jaag op bonus credits", desc: "Gratis credits = gratis kansen" },
                            { num: 4, tip: "Word ticket leider", desc: "Haal anderen in voor extra credits" },
                            { num: 5, tip: "Verzamel unieke tickets", desc: "Elk ticket is een extra kans op het rad!" },
                        ].map((item) => (
                            <div key={item.num} className="glass-panel rounded-xl p-4 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center font-bold text-black shrink-0">
                                    {item.num}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">{item.tip}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leaderboards Info */}
            <section className="py-16 px-6 bg-gradient-to-b from-transparent via-red-900/10 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-amber-400 mb-8 flex items-center justify-center gap-3">
                        <span>📊</span> Leaderboards
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-panel rounded-2xl p-6 text-center">
                            <div className="text-5xl mb-4">🏆</div>
                            <h3 className="text-xl font-bold text-amber-400 mb-2">Hoogste Score</h3>
                            <p className="text-gray-300 mb-4">Top 5 spelers met de hoogste scores</p>
                            <div className="bg-amber-500/20 rounded-lg py-2 px-4 inline-block">
                                <span className="text-amber-400 font-bold">#1 wint 5% van de pot</span>
                            </div>
                        </div>

                        <div className="glass-panel rounded-2xl p-6 text-center">
                            <div className="text-5xl mb-4">🎟️</div>
                            <h3 className="text-xl font-bold text-red-400 mb-2">Meeste Tickets</h3>
                            <p className="text-gray-300 mb-4">Top 5 spelers met de meeste tickets</p>
                            <div className="bg-red-500/20 rounded-lg py-2 px-4 inline-block">
                                <span className="text-red-400 font-bold">#1 wint 5% van de pot</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-amber-400 mb-8 flex items-center justify-center gap-3">
                        <span>❓</span> Veelgestelde Vragen
                    </h2>

                    <div className="space-y-4">
                        {faqItems.map((item, idx) => (
                            <div key={idx} className="glass-panel rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                    className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-white">Q: {item.question}</span>
                                    <span className="text-amber-400 text-2xl">{openFAQ === idx ? '−' : '+'}</span>
                                </button>
                                {openFAQ === idx && (
                                    <div className="p-4 pt-0 text-gray-300 border-t border-white/10">
                                        <span className="text-amber-400 font-bold">A:</span> {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-4xl font-bold text-amber-400 mb-4 flex items-center justify-center gap-3">
                    <span>📧</span> Contact
                </h2>
                <p className="text-gray-300 mb-4">Heb je vragen? Neem contact met ons op via</p>
                <a
                    href="mailto:info@chinatetris.nl"
                    className="text-2xl text-amber-400 hover:text-amber-300 transition-colors font-bold"
                >
                    info@chinatetris.nl
                </a>
            </section>

            {/* Footer */}
            <section className="py-8 text-center border-t border-white/10">
                <p className="text-gray-400 italic">
                    Dragon Tetris - Verzamel tickets, maak kans op de Gouden Drakenkist! 🐉✨
                </p>
            </section>

            {/* Fixed CTA Button */}
            <a
                href="https://chinatetris.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
          bg-gradient-to-r from-red-600 via-red-500 to-amber-500 
          hover:from-red-500 hover:via-amber-500 hover:to-red-500
          text-white font-bold text-xl md:text-2xl
          py-4 px-8 md:px-12 rounded-full
          shadow-lg shadow-red-500/50 hover:shadow-amber-500/50
          transition-all duration-300 hover:scale-110
          flex items-center gap-3
          animate-pulse-slow"
            >
                <span>🐉</span>
                SPEEL NU!
                <span>🎮</span>
            </a>
        </div>
    );
};

export default SponsorInfoPage;
