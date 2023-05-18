import Image from "next/image";

export default function Home() {
  return (
    <main className="py-10 px-5 flex flex-col h-[80vh] max-w-2xl mx-auto">
      <div className="flex-1">
        <section>
          <div className="flex space-x-2">
            <figure className="w-14 h-14 rounded-full overflow-hidden bg-zinc-400">
              <img
                src="https://m.media-amazon.com/images/I/31iH1SJizUL._AC_UF1000,1000_QL80_.jpg "
                className="w-full h-full object-cover"
                alt="girl&kitten"
              />
            </figure>
            <div className="bg-zinc-200 rounded-lg px-3 py-2 max-w-[75%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
              tempora?
            </div>
          </div>
        </section>
      </div>
      <div className="flex space-x-2 border border-zinc-600">
        <input className=" flex-1  py-3 px-7 focus:outline-none" type="text" />
        <button className="bg-zinc-800 px-3 text-white">Send</button>
      </div>
    </main>
  );
}
