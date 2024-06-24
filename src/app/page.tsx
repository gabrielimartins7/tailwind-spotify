import { Home as Homeicon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-600 rounded-full" />
        </div>
        <nav className="space-y-5 mt-10">
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Homeicon />
            Home
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Search />
            Search
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Library />
            Your Library
          </a>
        </nav>
        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Rock</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Mix de Yago Oproprio</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Indie</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Trapperz Brasil</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Creme</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Anitta</a>
        </nav>
      </aside>
      <main className="flex-1 p-2 pl-5">
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight />
          </button>
        </div>
        <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <Image src="/anitta.png" width={104} height={104} alt="Capa do álbum Funk Generation da cantora Anitta" />
            <strong>Funk Generation</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <Image src="/matue.jpg" width={104} height={104} alt="Playlist do cantor Matuê" />
            <strong>This is Matuê</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <Image src="/gloria.jpg" width={104} height={104} alt="Playlist da cantora Gloria Groove" />
            <strong>This is Gloria Groove</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <Image src="/creme.jpeg" width={104} height={104} alt="Playlist de cria" />
            <strong>Creme</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <Image src="/trap.jpeg" width={104} height={104} alt="Playlist de trapperz" />
            <strong>Trapperz Brasil</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </a>
          <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <Image src="/rap.jpeg" width={104} height={104} alt="Playlist de rap" />
            <strong>Hip Hop, Rap e Trap Brasil</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play />
            </button>
          </a>
        </div>

        <h2 className="font-semibold text-2xl mt-10">Made for Gabrieli Martins</h2>

        <div className="grid grid-cols-8 gap-4 mt-4">
          <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/daily1.jpeg" className="w-full rounded-md" width={104} height={104} alt="Playlist do dia" />
            <strong className="text-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Rihanna</span>
          </a>
          <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/daily6.jpeg" className="w-full rounded-md" width={104} height={104} alt="Playlist do dia" />
            <strong className="text-semibold">Daily Mix 2</strong>
            <span className="text-sm text-zinc-500">Drake</span>
          </a>
          <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/daily3.jpeg" className="w-full rounded-md" width={104} height={104} alt="Playlist do dia" />
            <strong className="text-semibold">Daily Mix 3</strong>
            <span className="text-sm text-zinc-500">Eminem</span>
          </a>
          <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/daily7.jpeg" className="w-full rounded-md" width={104} height={104} alt="Playlist do dia" />
            <strong className="text-semibold">Daily Mix 4</strong>
            <span className="text-sm text-zinc-500">Rap</span>
          </a>
          <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/daily5.jpeg" className="w-full rounded-md" width={104} height={104} alt="Playlist do dia" />
            <strong className="text-semibold">Daily Mix 5</strong>
            <span className="text-sm text-zinc-500">Billie Eilish</span>
          </a>
          <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/daily8.jpg" className="w-full rounded-md" width={104} height={104} alt="Playlist do dia" />
            <strong className="text-semibold">Daily Mix 6</strong>
            <span className="text-sm text-zinc-500">Anderson .Paak</span>
          </a>
          <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/daily2.jpeg" className="w-full rounded-md" width={104} height={104} alt="Playlist do dia" />
            <strong className="text-semibold">Daily Mix 7</strong>
            <span className="text-sm text-zinc-500">The Weeknd</span>
          </a>
          <a href="" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/daily4.jpeg" className="w-full rounded-md" width={104} height={104} alt="Playlist do dia" />
            <strong className="text-semibold">Daily Mix 8</strong>
            <span className="text-sm text-zinc-500">Post Malone</span>
          </a>
        </div>
      </main>
    </div>
    <footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/ru.jpeg" width={56} height={56} alt="Playlist do dia" />
        <div className="flex flex-col">
          <strong className="font-normal">R U Mine?</strong>
          <span className="text-xs text-zinc-500">Arctic Monkeys</span>
        </div>
      </div>
      <div></div>
      <div></div>
    </footer>
   </div>
  );
}
