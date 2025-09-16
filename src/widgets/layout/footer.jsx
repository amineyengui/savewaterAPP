import { Typography } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto text-center">
        <Typography variant="small" className="opacity-80">
          © {year} Mon Application SIG — Tous droits réservés.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
