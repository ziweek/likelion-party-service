import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="sticky top-0 z-40">
        <Header></Header>
      </div>
      <div className="bg-black min-h-screen">{children}</div>
      <Footer></Footer>
    </>
  );
}
