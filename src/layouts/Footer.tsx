import { Github, Instagram, Linkedin } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "react-router-dom";

const socials = [
  { icon: <Instagram />, link: "https://www.instagram.com/" },
  { icon: <Linkedin />, link: "https://www.facebook.com/" },
  { icon: <Github />, link: "" },
];
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <MaxWidthWrapper className="py-5 text-sm flex flex-col gap-3">
        <div className="flex justify-center gap-5 ">
          {socials.map((social, index) => (
            <Link
              key={index}
              to={social.link}
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-1 hover:text-primary transition-all duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <p className="text-center text-muted-foreground">
          &copy; {currentYear} All rights reserved.
        </p>
        <p className="text-center font-semibold">Built by Steblack Yaroslava</p>
      </MaxWidthWrapper>
    </footer>
  );
}
