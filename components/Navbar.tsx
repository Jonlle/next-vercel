import Link from "next/link";
// import useAxios from "use-axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const NavBar = () => {
  const { asPath } = useRouter();

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto" defaultActiveKey="/" activeKey={asPath}>
          {menuItems.map(({ text, href }) => (
            <Nav.Link key={href} as={Link} href={href}>
              {text}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
