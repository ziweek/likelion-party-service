import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="sticky top-0 z-20">
        <Header></Header>
      </div>
      <div className="bg-black">{children}</div>
      <Footer></Footer>
    </>
  );
}
