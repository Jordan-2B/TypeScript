import  { useEffect } from "react";


export default function Scroll() {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll Y:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div style={{ height: "200vh" }}>Scroll aquí</div>;
}