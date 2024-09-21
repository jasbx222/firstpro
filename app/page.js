import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Cards } from "./components/Cards";
import { About } from "./components/About";
import Customers from "./components/Customers";
import { Fqa } from "./components/Fqa";
import { Ctas } from "./components/Ctas";

export default function Home() {
  return (
<div>

<Hero/>
<Cards/>
<About/>
<Customers/>
<Fqa/>
<Ctas/>
</div>
  );
}
