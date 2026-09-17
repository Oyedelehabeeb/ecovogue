import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const groups = [
  { title: "Shop", links: [["Women", "/women"], ["Men", "/men"], ["Little ones", "/babies"], ["New arrivals", "/new-arrivals"]] },
  { title: "Help", links: [["Delivery & returns", "#"], ["Size guide", "#"], ["Track an order", "#"], ["Contact", "#"]] },
  { title: "Ecovogue", links: [["Our story", "/about"], ["Materials", "/about"], ["Responsibility", "/about"], ["Careers", "#"]] },
];

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="footer-top">
        <div className="footer-brand"><Link href="/" className="brand-mark brand-mark-light">ECO<span>VOGUE</span></Link><p>Considered fashion for a more thoughtful everyday.</p></div>
        {groups.map((group) => <div key={group.title} className="footer-group"><h3>{group.title}</h3>{group.links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>)}
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Ecovogue</span><span>Lagos · Nigeria</span><div className="footer-socials"><Instagram size={17} /><Facebook size={17} /><Linkedin size={17} /></div></div>
    </div>
  );
}
