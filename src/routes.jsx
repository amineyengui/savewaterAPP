import { Home, Profile, SignIn, TeamPartners } from "@/pages";

export const routes = [
  {
    name: "acceuil",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Informations utiles",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  //{
  //name: "Team & Partners",
  //path: "/team-partners",
  //element: <TeamPartners />,
  //},
  // Si tu n’as pas encore de page SignUp, on la supprime ou on la remplace par SignIn
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  //{
    //name: "Docs",
    //href: "https://www.material-tailwind.com/docs/react/installation",
    //target: "_blank",
    //element: "",
  //},
];

export default routes;
