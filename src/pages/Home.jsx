import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

/**
 * Home page adapté pour SAVE WATER — Kick-off Meeting
 * Images attendues dans public/img/ :
 * - /img/hero-savewater.png
 * - /img/day1-program.png
 * - /img/day2-program.png
 * - /img/partners.png (optionnel : image groupée)
 * - /img/partners/partner-1.png, partner-2.png, ...
 * - /img/map-preview.png (pour la carte / aperçu)
 */

export function Home() {
  // UI state
  const [activeDay, setActiveDay] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  // contact form state
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [formMsg, setFormMsg] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!form.name.trim() || !form.email.trim()) {
      setFormMsg({ type: "error", text: "Veuillez renseigner au minimum le nom et l'e-mail." });
      return;
    }
    // simulate submission (no backend)
    setFormMsg({ type: "success", text: `Merci ${form.name} — inscription reçue (démo).` });
    setForm({ name: "", email: "", org: "", message: "" });
    setTimeout(() => setFormMsg(null), 6000);
  };

  // Partners fallback handling
  const partnerSingle = "/img/partners.png";
  const partnerList = [
    "/img/partners/partner-1.png",
    "/img/partners/partner-2.png",
    "/img/partners/partner-3.png",
    "/img/partners/partner-4.png",
  ];

  return (
    <>
      {/* HERO */}
      <div
        className={`relative flex h-screen content-center items-center justify-center pt-16 pb-32 transition-all ${
          scrolled ? "backdrop-blur-sm" : ""
        }`}
      >
        {/* background image from public/img */}
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/img/hero-savewater.png')" }}
          aria-hidden="true"
        />
        {/* dark overlay */}
        <div className="absolute top-0 h-full w-full bg-black/60" />

        <div className="max-w-7xl container relative mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-4 font-black tracking-tight">
                SAVE WATER
              </Typography>
              <Typography variant="lead" color="white" className="opacity-90">
                EVERY DROP COUNTS — INNOVATIVE PATHS FOR WATER SUSTAINABILITY
                <br />
                <span className="block mt-3 font-semibold">22–23 Septembre 2025 — Tunis Grand Hotel</span>
              </Typography>
             


              <div className="mt-8 flex items-center justify-center gap-3">
                <a href="#programme" className="inline-block">
                  <Button variant="filled" size="lg">
                    Voir le programme
                  </Button>
                </a>
                <a href="#contact" className="inline-block">
                  <Button variant="outlined" size="lg" color="white">
                    S'inscrire
                  </Button>
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                {/* small partner logos (optional) */}
                <img src="/img/partners/partner-1.png" alt="p1" className="w-12 h-12 object-contain rounded bg-white/20 p-1" onError={(e)=>{e.currentTarget.style.display='none'}} />
                <img src="/img/partners/partner-2.png" alt="p2" className="w-12 h-12 object-contain rounded bg-white/20 p-1" onError={(e)=>{e.currentTarget.style.display='none'}} />
                <img src="/img/partners/partner-3.png" alt="p3" className="w-12 h-12 object-contain rounded bg-white/20 p-1" onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES (optionnel) */}
      <section className="-mt-32 bg-white px-4 pb-16 pt-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* garde les FeatureCard existants si tu veux */}
            {featuresData &&
              featuresData.slice(0, 3).map(({ color, title, icon, description }) => (
                <FeatureCard
                  key={title}
                  color={color}
                  title={title}
                  icon={React.createElement(icon, { className: "w-5 h-5 text-white" })}
                  description={description}
                />
              ))}
          </div>

          {/* highlight / mission */}
          <div className="mt-20 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky-700 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white" />
              </div>
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                Objectifs du Kick-off
              </Typography>
              <Typography className="mb-6 font-normal text-blue-gray-500">
                L'objectif principal est de lancer officiellement le projet, coordonner les activités,
                renforcer la collaboration entre partenaires et planifier les premières actions sur le terrain.
              </Typography>
            </div>

            <div className="mx-auto mt-12 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img alt="Card Image" src="/img/day1-program.png" className="h-full w-full object-cover" />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Programme
                  </Typography>
                  <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 font-bold">
                    22–23 Septembre 2025
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Deux jours d'ateliers, sessions plénières et visite de site pilote à Tunis.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="programme" className="px-4 pt-16 pb-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Typography variant="h4" color="blue-gray" className="font-bold">
                Programme
              </Typography>
              <Typography className="text-sm text-slate-500">22–23 Septembre 2025 — Tunis Grand Hotel</Typography>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveDay(1)}
                className={`px-4 py-2 rounded-md ${activeDay === 1 ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-700"}`}
              >
                Day 1 — 22 Sept
              </button>
              <button
                onClick={() => setActiveDay(2)}
                className={`px-4 py-2 rounded-md ${activeDay === 2 ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-700"}`}
              >
                Day 2 — 23 Sept
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 md:p-8">
            {activeDay === 1 ? (
              <div className="grid md:grid-cols-2 gap-6">
                <article className="p-4 border rounded-lg">
                  <div className="text-sky-600 font-semibold">08:00 — 09:00</div>
                  <h3 className="mt-2 font-bold">Accueil & Enregistrement</h3>
                  <p className="text-slate-600">Remise des badges et accueil des participants.</p>
                </article>

                <article className="p-4 border rounded-lg">
                  <div className="text-sky-600 font-semibold">09:00 — 10:30</div>
                  <h3 className="mt-2 font-bold">Session d'ouverture</h3>
                  <p className="text-slate-600">Discours officiels, présentations institutionnelles.</p>
                </article>

                <article className="p-4 border rounded-lg">
                  <div className="text-sky-600 font-semibold">11:00 — 12:30</div>
                  <h3 className="mt-2 font-bold">Présentations partenaires</h3>
                  <p className="text-slate-600">Introduction des partenaires et échanges.</p>
                </article>

                <article className="p-4 border rounded-lg md:col-span-2">
                  <div className="text-sky-600 font-semibold">14:00 — 17:00</div>
                  <h3 className="mt-2 font-bold">Ateliers thématiques</h3>
                  <p className="text-slate-600">Tables rondes, Living labs et ateliers pratiques.</p>
                </article>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <article className="p-4 border rounded-lg">
                  <div className="text-sky-600 font-semibold">09:00 — 12:30</div>
                  <h3 className="mt-2 font-bold">Visite de terrain</h3>
                  <p className="text-slate-600">Visite du site pilote avec démonstrations.</p>
                </article>

                <article className="p-4 border rounded-lg">
                  <div className="text-sky-600 font-semibold">12:30 — 13:30</div>
                  <h3 className="mt-2 font-bold">Pause déjeuner</h3>
                </article>

                <article className="p-4 border rounded-lg md:col-span-2">
                  <div className="text-sky-600 font-semibold">14:00 — 17:00</div>
                  <h3 className="mt-2 font-bold">Session d'après-midi</h3>
                  <p className="text-slate-600">Clôture, synthèse et prochaines étapes.</p>
                </article>
              </div>
            )}

            {/* preview image for the day */}
            <div className="mt-6 flex justify-center">
              <img
                src={activeDay === 1 ? "/img/day1-program.png" : "/img/day2-program.png"}
                alt="Aperçu programme"
                className="w-full max-w-3xl rounded-lg shadow object-cover"
                onError={(e) => {
                  // Hide if not available
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
<section id="partners" className="px-4 pt-12 pb-16 bg-slate-50">
  <div className="container mx-auto">
    <div className="text-center mb-6">
      <Typography variant="h4" color="blue-gray" className="font-bold">
        Partenaires
      </Typography>
      <Typography className="text-sm text-slate-500 mt-2">
        Institutions et partenaires impliqués
      </Typography>
    </div>

    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-center">
        <img
          src="/img/partenaires.png"
          alt="Logos partenaires"
          className="w-full max-w-4xl object-contain rounded-lg shadow"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="px-4 pt-12 pb-20">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white rounded-2xl shadow p-6 md:p-10">
            <div className="md:flex md:gap-8 items-start">
              <div className="md:w-1/2">
                <Typography variant="h4" className="font-bold text-white">
                  Contact & Inscription
                </Typography>
                <Typography className="mt-3 text-white/90">
                  Pour toute information ou pour vous inscrire, remplissez le formulaire ci-dessous (démo - pas de backend).
                </Typography>

                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <Input name="name" value={form.name} onChange={handleInput} size="lg" label="Nom complet" />
                    <Input name="email" value={form.email} onChange={handleInput} size="lg" label="Email" />
                  </div>

                  <Input name="org" value={form.org} onChange={handleInput} size="lg" label="Organisation (optionnel)" />
                  <Textarea name="message" value={form.message} onChange={handleInput} size="lg" label="Message" rows={5} />

                  <div className="flex items-center gap-3">
                    <Checkbox
                      label={
                        <Typography variant="small" color="white" className="flex items-center font-normal">
                          Je confirme que j'accepte les{" "}
                          <a href="#" className="font-medium underline ml-1">
                            conditions
                          </a>
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5" }}
                    />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <Button type="submit" variant="filled" size="lg">
                      Envoyer
                    </Button>
                    <Button
                      variant="outlined"
                      size="lg"
                      onClick={() => setForm({ name: "", email: "", org: "", message: "" })}
                    >
                      Réinitialiser
                    </Button>
                  </div>

                  {formMsg && (
                    <div
                      className={`mt-3 p-3 rounded ${
                        formMsg.type === "success" ? "bg-white/20 text-white" : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {formMsg.text}
                    </div>
                  )}
                </form>
              </div>

              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-white">Lieu</h4>
                  <p className="text-sm mt-2 text-white/90">Tunis Grand Hotel — 22–23 Septembre 2025</p>
                  <div className="mt-4">
                    <img
                      src="/img/map-preview.png"
                      alt="map preview"
                      className="w-full rounded-md object-cover shadow"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="mt-4 text-white/90 text-sm">
                    <div>Email: <a className="underline" href="mailto:info@savewater.org">info@savewater.org</a></div>
                    <div className="mt-2">Contact local: +216 XX XXX XXX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
