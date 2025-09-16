import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingLibraryIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

// Page "Infos pratiques & logistique" pour SAVE WATER Kick-off
export default function PracticalInfo() {
  const mapSrc = "https://www.google.com/maps?q=hotel+grand+tunis&output=embed"; // embed Google Maps for Hotel Grand Tunis

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setMsg({ type: "error", text: "Merci de renseigner au minimum le nom et l'email." });
      return;
    }
    setMsg({ type: "success", text: `Merci ${form.name} — votre message a bien été noté (démo).` });
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setMsg(null), 6000);
  };

  const scheduleDay1 = [
    { time: "08:00 - 09:00", title: "Registration", desc: "Remise des badges et enregistrement des participants" },
    { time: "09:00 - 10:30", title: "Opening Session", desc: "Discours officiels, présentations institutionnelles" },
    { time: "10:15 - 11:00", title: "Coffee Break & Photo", desc: "Pause-café et photo de groupe" },
    { time: "11:00 - 12:30", title: "Associated Partners", desc: "Présentation des partenaires socio-économiques" },
    { time: "12:30 - 13:30", title: "Lunch Break", desc: "Pause déjeuner" },
    { time: "14:00 - 17:00", title: "Afternoon (Partners only)", desc: "Round table, Living Labs presentations and workshops" },
  ];

  const scheduleDay2 = [
    { time: "09:00 - 12:30", title: "Field Visit", desc: "Visite du site pilote lié au projet" },
    { time: "12:30 - 13:30", title: "Lunch Break", desc: "Pause déjeuner" },
    { time: "Afternoon", title: "Free Time", desc: "Temps libre pour visiter la ville de Tunis" },
  ];

  const hotels = [
    { name: "Tunis Grand Hotel", note: "Lieu de l'événement — très pratique", distance: "sur place / 0 km" },
    { name: "Laico Tunis Hotel", note: "Hôtel 5* recommandé", distance: "1.2 km" },
    { name: "Hotel Africa", note: "Bon rapport qualité/prix", distance: "0.9 km" },
    { name: "Mövenpick Hotel du Lac", note: "Confort et services", distance: "3.1 km" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <header className="relative bg-gradient-to-r from-sky-600 to-cyan-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <Typography variant="h2" className="text-white font-extrabold">
            Infos pratiques — SAVE Water Kick-off
          </Typography>
          <Typography className="mt-3 text-white/90">
            22–23 Septembre 2025 — Tunis Grand Hotel
          </Typography>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" variant="filled" onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}>
              Voir la carte & accès
            </Button>
            <Button size="lg" variant="outlined" className="text-white border-white" onClick={() => window.scrollTo({ top: 1200, behavior: 'smooth' })}>
              Hébergements recommandés
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 -mt-20 pb-16">
        <div className="bg-white rounded-2xl shadow p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column: map & address */}
            <div className="md:col-span-2">
              <Typography className="font-semibold text-lg mb-3">Lieu & Carte</Typography>
              <div className="rounded-lg overflow-hidden shadow">
                <iframe
                  title="Hotel Grand Tunis - Map"
                  src={mapSrc}
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="h-5 w-5 text-rose-600 mt-1" />
                    <div>
                      <Typography className="font-medium">Adresse</Typography>
                      <Typography className="text-sm text-slate-600">Tunis Grand Hotel, Tunis, Tunisia</Typography>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <Typography className="font-medium">Contact local</Typography>
                      <Typography className="text-sm text-slate-600">Madame Salwa Saidi — +216 24 257 293</Typography>
                      <Typography className="text-sm text-slate-600">Email: <a href="mailto:salwa.saidi@fst.utm.tn" className="underline">salwa.saidi@fst.utm.tn</a></Typography>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Typography className="font-semibold text-lg mb-2">Conseils d'accès</Typography>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>Transport public :</strong> Plusieurs lignes de bus et taxis desservent le centre-ville. Prévoir ~20–35 minutes depuis l'aéroport Tunis-Carthage selon la circulation.</li>
                  <li><strong>Taxis :</strong> Privilégiez les taxis officiels ou applications de VTC. Demandez au conducteur d'utiliser le compteur ou convenez du tarif avant le départ.</li>
                  <li><strong>Parking :</strong> Tunis Grand Hotel propose un parking pour les participants (se renseigner à la réception). Des parkings publics sont disponibles à proximité.</li>
                  <li><strong>Accessibilité :</strong> L'hôtel dispose d'ascenseurs et d'espaces adaptés — signalez vos besoins en amont au contact local.</li>
                </ul>
              </div>
            </div>

            {/* Right column: quick info card */}
            <aside className="p-4 border rounded-lg bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <SparklesIcon className="h-6 w-6 text-amber-500" />
                <Typography className="font-semibold">Informations rapides</Typography>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <div className="font-medium">Dates</div>
                  <div>22–23 Septembre 2025</div>
                </div>

                <div>
                  <div className="font-medium">Lieu</div>
                  <div>Tunis Grand Hotel</div>
                </div>

                <div>
                  <div className="font-medium">Point de contact</div>
                  <div>Madame Salwa Saidi — +216 24 257 293</div>
                </div>

                <div>
                  <div className="font-medium">Email général</div>
                  <div><a href="mailto:info@savewater.org" className="underline">info@savewater.org</a></div>
                </div>
              </div>

              <div className="mt-6">
                <Button fullWidth onClick={() => window.location.href = 'mailto:info@savewater.org'}>Contacter l'organisation</Button>
              </div>
            </aside>
          </div>

          {/* SCHEDULE */}
          <div className="mt-8">
            <Typography variant="h5" className="font-semibold mb-4">Horaires & Programme résumé</Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <CardBody>
                  <Typography className="font-medium mb-2">Jour 1 — Lundi 22 Septembre 2025</Typography>
                  <div className="space-y-3 text-sm">
                    {scheduleDay1.map((s) => (
                      <div key={s.time} className="flex gap-3">
                        <div className="w-28 text-sky-600 font-semibold">{s.time}</div>
                        <div>
                          <div className="font-medium">{s.title}</div>
                          <div className="text-slate-600">{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>

              <Card className="p-4">
                <CardBody>
                  <Typography className="font-medium mb-2">Jour 2 — Mardi 23 Septembre 2025</Typography>
                  <div className="space-y-3 text-sm">
                    {scheduleDay2.map((s) => (
                      <div key={s.title} className="flex gap-3">
                        <div className="w-28 text-sky-600 font-semibold">{s.time}</div>
                        <div>
                          <div className="font-medium">{s.title}</div>
                          <div className="text-slate-600">{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>

            <Typography className="text-sm text-slate-500 mt-3">Highlights: Coffee breaks, group photo, and the field visit on Day 2.</Typography>
          </div>

          {/* HOTELS */}
          <div className="mt-8">
            <Typography variant="h5" className="font-semibold mb-4">Hébergement & Recommandations</Typography>
            <Typography className="text-sm text-slate-600 mb-4">Hôtels proches du lieu de l'événement — pensez à réserver tôt.</Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {hotels.map((h) => (
                <div key={h.name} className="p-4 border rounded-lg bg-white">
                  <div className="font-medium">{h.name}</div>
                  <div className="text-sm text-slate-600">{h.note}</div>
                  <div className="mt-2 text-xs text-slate-500">Distance: {h.distance}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ / Contact Form */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Typography variant="h5" className="font-semibold mb-4">FAQ — Questions pratiques</Typography>
              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <div className="font-medium">Q: Où dois-je me présenter le jour de l'événement ?</div>
                  <div>R: Accueil & enregistrement à l'entrée principale du Tunis Grand Hotel (voir panneau SAVE WATER).</div>
                </div>
                <div>
                  <div className="font-medium">Q: Faut-il un badge ?</div>
                  <div>R: Oui, le badge est requis pour accéder aux sessions et aux ateliers.</div>
                </div>
                <div>
                  <div className="font-medium">Q: Où puis-je garer ma voiture ?</div>
                  <div>R: Parking de l'hôtel (payant) + parkings publics à proximité.</div>
                </div>
                <div>
                  <div className="font-medium">Q: A qui puis-je écrire pour une question urgente ?</div>
                  <div>R: Contactez Madame Salwa Saidi — <a href="mailto:salwa.saidi@fst.utm.tn" className="underline">salwa.saidi@fst.utm.tn</a> — +216 24 257 293.</div>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <Typography variant="h6" className="font-semibold mb-3">Contact / Inscription</Typography>
              <Typography className="text-sm text-slate-600 mb-3">Posez une question rapide ou inscrivez-vous (démo).</Typography>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input name="name" label="Nom complet" value={form.name} onChange={handleInput} size="md" />
                <Input name="email" label="Email" value={form.email} onChange={handleInput} size="md" />
                <Textarea name="message" label="Message (optionnel)" value={form.message} onChange={handleInput} rows={4} />

                <div className="flex items-center gap-2">
                  <Checkbox id="agree" />
                  <label htmlFor="agree" className="text-sm text-slate-600">J'accepte d'être contacté(e) concernant l'événement.</label>
                </div>

                <div className="flex gap-2">
                  <Button type="submit">Envoyer</Button>
                  <Button variant="outlined" onClick={() => setForm({ name: "", email: "", message: "" })}>Réinitialiser</Button>
                </div>

                {msg && (
                  <div className={`mt-2 p-2 rounded ${msg.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-yellow-50 text-yellow-700'}`}>
                    {msg.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}
