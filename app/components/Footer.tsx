import Link from "next/link";
const Footer = () => {
  const links = [
    {
      title: "About",
      links: [
        "How Airbub Worls",
        "Newsroom",
        "Investors",
        "Airbub Plus",
        "Airbun Luxe",
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        "Accessbility",
        "This is not a real site",
        "it's a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
    {
      title: "Host",
      links: [
        "Papa React",
        "Presents",
        "Zero to full Stack Here",
        "Hundreds of Students",
        "Join Now",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "HELP Center",
        "Trust & Safety",
        "Say Hi Youtube",
        "Easer Eggs",
        "For the Win",
      ],
    },
  ];
  return (
    <footer className="pt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        {links.map((link, idx) => (
          <div key={idx} className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold text-xl">{link.title}</h5>
            {link.links.map((item, idx) => (
              <Link key={idx} href={item} className="block">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
