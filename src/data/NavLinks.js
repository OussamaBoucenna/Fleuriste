export const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "A propos de nous", path: "/about" },
  {
    name: "Nos produits",
    children: [
      { name: "Bouquets", path: "/products/bouquets" },
      { name: "Plantes", path: "/products/plantes" },
    ],
  },
  {
    name: "Evènements",
    children: [
      { name: "Mariages", path: "/events/mariages" },
      { name: "Anniversaires", path: "/events/anniversaires" },
    ],
  },
  { name: "Contacts", path: "/contact" },
];