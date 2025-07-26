import Image from "next/image";
import Link from "next/link";

const Greatest = () => {
  return (
    <section className="pt-10">
      <div className="container relative">
        <div className="relative h-96 min-w-[300px]">
          <Image
            src="https://www.gosee.news/prev/616x616/images/content3/twxe97cy.jpg"
            fill
            alt="Greatest-Img"
            className="object-cover object-bottom drop-shadow-2xl rounded-2xl -z-10"
          />
        </div>
        <div className="absolute top-32 left-12">
          <h3 className="text-4xl mb-3 w-64">The Greatest Outdoors</h3>
          <p>wishlists curated by airbub</p>
          <Link
            href="/"
            className="text-sm px-4 py-2 rounded-lg mt-5 text-white bg-gray-900 block w-fit"
          >
            Get Inspired
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Greatest;
