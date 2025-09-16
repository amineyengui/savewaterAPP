import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import {
  UsersIcon,
  SparklesIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/widgets/layout";

/**
 * TeamPartners (Enhanced) — SAVE WATER Kick-off
 * Version interactive, moderne et prête à l'emploi.
 * - Modales pour détails partenaires / intervenants
 * - Animations légères avec framer-motion
 * - Design responsive (Tailwind + Material Tailwind)
 *
 * Instructions : coller ce fichier dans src/pages/TeamPartners.jsx
 * et ajouter une route /team ou /partners dans ton router.
 */

export default function TeamPartners() {
  // ----- Données (à personnaliser si besoin) -----
  const organizers = [
    {
      id: "prima",
      name: "PRIMA",
      role: "Coordinateur — PRIMA in the Mediterranean Area",
      logo: "/img/partners/partner-prima.png",
      description: "Coordination régionale & mise en réseau des acteurs agricoles et environnementaux.",
    },
    {
      id: "save",
      name: "SAVE",
      role: "SAVE Water Project",
      logo: "/img/partners/partner-save.png",
      description: "Portail de sensibilisation et coordination technique du projet SAVE Water.",
    },
    {
      id: "inrgref",
      name: "INRGREF",
      role: "Institut national de recherche en génie rural",
      logo: "/img/partners/partner-inrgref.png",
      description: "Recherche appliquée en gestion des ressources naturelles et hydrologie.",
    },
    {
      id: "fst",
      name: "Faculté des Sciences de Tunis",
      role: "Hôte académique",
      logo: "/img/partners/partner-fst.png",
      description: "Accueil des activités sur site, logistique et ressources académiques.",
    },
  ];

  const speakers = [
    {
      id: "s1",
      name: "SAVE Water Project Coordinator",
      role: "Opening remarks (5 min)",
      photo: "/img/speakers/speaker-1.png",
      bio: "Coordinateur du projet — en charge de la vision scientifique et opérationnelle du projet SAVE Water.",
      email: "coord@savewater.org",
    },
    {
      id: "s2",
      name: "Ministry Representative",
      role: "Institutional speech (5 min)",
      photo: "/img/speakers/speaker-2.png",
      bio: "Représentant institutionnel — rôle de politique publique et alignement national.",
      email: "min@agri.tn",
    },
    {
      id: "s3",
      name: "President — Université Tunis El Manar",
      role: "Institutional speech (5 min)",
      photo: "/img/speakers/speaker-3.png",
      bio: "Présidence universitaire — soutien académique et coopération.",
      email: "president@utm.tn",
    },
    {
      id: "s4",
      name: "Dean — Faculté des Sciences de Tunis",
      role: "Institutional speech (5 min)",
      photo: "/img/speakers/speaker-4.png",
      bio: "Pilotage local des activités académiques liées au projet.",
      email: "dean@fst.tn",
    },
  ];

  const partners = [
    { id: "p1", name: "MSE", logo: "/img/partners/partner-mse.png", desc: "Appui ministériel et expertise thématique." },
    { id: "p2", name: "Université Abdelhamid Ibn Badis", logo: "/img/partners/partner-univ.png", desc: "Partenaire académique" },
    { id: "p3", name: "INAT", logo: "/img/partners/partner-inat.png", desc: "Institut national agronomie" },
    { id: "p4", name: "CIRAD", logo: "/img/partners/partner-cirad.png", desc: "Recherche & coopération internationale" },
    { id: "p5", name: "Université Gustave Eiffel", logo: "/img/partners/partner-gustave.png", desc: "Partenaire européen" },
    { id: "p6", name: "CFI", logo: "/img/partners/partner-cfi.png", desc: "Support communication & financement" },
    { id: "p7", name: "USC", logo: "/img/partners/partner-usc.png", desc: "Collaboration scientifique" },
    { id: "p8", name: "TU Berlin", logo: "/img/partners/partner-tub.png", desc: "Partenaire technique (Allemagne)" },
  ];

  const values = [
    { id: 1, title: "Innovation", text: "Approches modernes : SIG, satellites & IA." , icon: SparklesIcon},
    { id: 2, title: "Durabilité", text: "Solutions respectueuses des ressources hydriques.", icon: GlobeAltIcon},
    { id: 3, title: "Collaboration", text: "Travailler ensemble : institutions, universités et société civile.", icon: UsersIcon},
    { id: 4, title: "Formation", text: "Transfert de compétences via ateliers et Living Labs.", icon: AcademicCapIcon},
  ];

  // ----- UI state -----
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState(null);

  // ----- handlers -----
  const openPartner = (p) => setSelectedPartner(p);
  const openSpeaker = (s) => setSelectedSpeaker(s);
  const closeModal = () => {
    setSelectedPartner(null);
    setSelectedSpeaker(null);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setNotice({ type: "error", text: "Merci de remplir au moins le nom et l'email." });
      return;
    }
    setNotice({ type: "success", text: `Merci ${form.name} — message reçu (démo).` });
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setNotice(null), 5000);
  };

  // ----- small helpers -----
  const IconWrap = ({ children }) => (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">{children}</div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <header className="relative bg-[url('/img/hero-team-2.jpg')] bg-cover bg-center py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="container mx-auto relative z-10 px-4 text-white">
          <Typography variant="h2" className="font-extrabold text-3xl md:text-4xl">Équipe & Partenaires</Typography>
          <Typography className="mt-3 text-lg max-w-2xl">Rencontrez les organisateurs, intervenants et institutions partenaires du Kick-off SAVE Water.</Typography>
          <div className="mt-6 flex gap-3">
            <Button variant="filled" size="md" onClick={() => document.getElementById('organizers')?.scrollIntoView({behavior:'smooth'})}>Voir les organisateurs</Button>
            <Button variant="outlined" className="text-white border-white" onClick={() => document.getElementById('partners')?.scrollIntoView({behavior:'smooth'})}>Voir les partenaires</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 -mt-20 pb-16">
        {/* ORGANIZERS */}
        <section id="organizers" className="bg-white rounded-2xl shadow p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Typography variant="h4" className="font-bold">Organisateurs principaux</Typography>
              <Typography className="text-sm text-slate-600">Institutions ayant un rôle clé dans le projet</Typography>
            </div>
            <div className="text-sm text-slate-500">Pilotage & support</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizers.map((o) => (
              <Card key={o.id} className="p-4 hover:shadow-lg transition">
                <CardBody className="flex items-start gap-4">
                  <Avatar src={o.logo} alt={o.name} size="lg" variant="circular" className="ring-2 ring-white" onError={(e)=>{e.currentTarget.style.display='none'}} />
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <Typography className="font-semibold">{o.name}</Typography>
                        <Typography className="text-sm text-slate-600">{o.role}</Typography>
                      </div>
                      <Button size="sm" variant="outlined" onClick={() => openPartner(o)}>Détails</Button>
                    </div>
                    <Typography className="text-sm text-slate-500 mt-3 line-clamp-3">{o.description}</Typography>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* SPEAKERS */}
        <section id="speakers" className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Typography variant="h4" className="font-bold">Intervenants & Conférenciers</Typography>
              <Typography className="text-sm text-slate-600">Speakers annoncés pour le Jour 1 (brèves bios incl.)</Typography>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {speakers.map((s) => (
              <div key={s.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <Avatar src={s.photo} alt={s.name} size="lg" variant="circular" onError={(e)=>{e.currentTarget.style.display='none'}} />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Typography className="font-semibold">{s.name}</Typography>
                        <Typography className="text-sm text-slate-600">{s.role}</Typography>
                      </div>
                      <div className="text-right">
                        <Button size="sm" variant="text" onClick={() => openSpeaker(s)}>En savoir plus</Button>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-slate-500 line-clamp-3">{s.bio}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="mt-8 bg-white rounded-2xl shadow p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Typography variant="h4" className="font-bold">Partenaires institutionnels</Typography>
              <Typography className="text-sm text-slate-600">Organisations impliquées dans le projet</Typography>
            </div>
            <div className="text-sm text-slate-500">Logos fournis par les partenaires</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
            {partners.map((p) => (
              <div key={p.id} className="group relative w-full flex items-center justify-center">
                <button
                  className="flex flex-col items-center gap-2"
                  onClick={() => openPartner(p)}
                  aria-label={`Détails ${p.name}`}
                >
                  <img src={p.logo} alt={p.name} className="max-h-20 object-contain" onError={(e)=>{e.currentTarget.style.display='none'}} />
                  <Typography className="text-xs text-slate-600 mt-1">{p.name}</Typography>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section className="mt-8">
          <Typography variant="h4" className="font-bold mb-4">Valeurs & Missions</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <Card key={v.id} className="p-4 hover:shadow-lg transition">
                <CardBody>
                  <div className="flex items-start gap-4">
                    <IconWrap>
                      <v.icon className="h-5 w-5" />
                    </IconWrap>
                    <div>
                      <Typography className="font-semibold">{v.title}</Typography>
                      <Typography className="text-sm text-slate-600">{v.text}</Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA / Contact */}
        <section className="mt-8 bg-white rounded-2xl shadow p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Typography variant="h4" className="font-bold">Contact rapide</Typography>
              <Typography className="text-sm text-slate-600 mb-4">Pour questions sur les intervenants, partenariats ou presse.</Typography>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input name="name" label="Nom complet" value={form.name} onChange={handleInput} />
                <Input name="email" label="Email" value={form.email} onChange={handleInput} />
                <Textarea name="message" label="Message" value={form.message} onChange={handleInput} rows={4} />
                <div className="flex gap-3 mt-2">
                  <Button type="submit">Envoyer</Button>
                  <Button variant="outlined" onClick={() => setForm({ name: "", email: "", message: "" })}>Réinitialiser</Button>
                </div>
                {notice && (
                  <div className={`mt-2 p-2 rounded ${notice.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-yellow-50 text-yellow-700'}`}>
                    {notice.text}
                  </div>
                )}
              </form>
            </div>

            <aside className="p-4 border rounded-lg bg-slate-50">
              <div className="flex items-center gap-3 mb-3">
                <EnvelopeIcon className="h-5 w-5 text-sky-600" />
                <div>
                  <div className="font-medium">Contact organisation</div>
                  <div className="text-sm text-slate-600">Email: <a href="mailto:info@savewater.org" className="underline">info@savewater.org</a></div>
                  <div className="text-sm text-slate-600">Contact local: Madame Salwa Saidi — +216 24 257 293</div>
                </div>
              </div>

              <div className="mt-4">
                <Button fullWidth variant="outlined" onClick={() => window.location.href = 'mailto:info@savewater.org'}>Envoyer un email</Button>
              </div>
            </aside>
          </div>
        </section>

        <div className="mt-10">
          <Footer />
        </div>
      </main>

      {/* ----- Modales ----- */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.98 }}
              className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <img src={selectedPartner.logo} alt={selectedPartner.name} className="h-12 w-12 object-contain" onError={(e)=>{e.currentTarget.style.display='none'}} />
                  <div>
                    <div className="font-semibold text-lg">{selectedPartner.name}</div>
                    <div className="text-sm text-slate-600">{selectedPartner.desc || selectedPartner.role}</div>
                  </div>
                </div>
                <button className="p-2 rounded hover:bg-slate-100" onClick={closeModal}><XMarkIcon className="h-5 w-5" /></button>
              </div>
              <div className="p-6">
                <Typography className="mb-3">Description</Typography>
                <Typography className="text-sm text-slate-600">{selectedPartner.description || selectedPartner.desc || 'Description non fournie.'}</Typography>
                <div className="mt-4 flex gap-3">
                  <Button onClick={() => window.location.href = 'mailto:info@savewater.org'}>Contacter</Button>
                  <Button variant="outlined" onClick={closeModal}>Fermer</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.98 }}
              className="max-w-xl w-full bg-white rounded-xl shadow-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar src={selectedSpeaker.photo} alt={selectedSpeaker.name} size="md" variant="circular" onError={(e)=>{e.currentTarget.style.display='none'}} />
                  <div>
                    <div className="font-semibold text-lg">{selectedSpeaker.name}</div>
                    <div className="text-sm text-slate-600">{selectedSpeaker.role}</div>
                  </div>
                </div>
                <button className="p-2 rounded hover:bg-slate-100" onClick={closeModal}><XMarkIcon className="h-5 w-5" /></button>
              </div>
              <div className="p-6">
                <Typography className="mb-2">Bio</Typography>
                <Typography className="text-sm text-slate-600">{selectedSpeaker.bio}</Typography>
                <div className="mt-4">
                  <Button onClick={() => window.location.href = `mailto:${selectedSpeaker.email}`}>Envoyer un email</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
