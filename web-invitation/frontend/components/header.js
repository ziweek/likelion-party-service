import Link from "next/link";
import Image from "next/image";
import imgLogo from "../public/images/next-likelion.png";

export default function Header() {
  return (
    <>
      <header className="scroll bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-space justify-between">
          <div className="flex">
            <Link href="/home">
              <button>
                <Image src={imgLogo} alt="title" height={30} />
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
