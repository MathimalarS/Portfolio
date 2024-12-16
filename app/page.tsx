import Link from "next/link";

export default function Home() {
  return (
   <main className="w-screen h-screen relative">
    <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage:"url(main-bg.png)"}
    }>
      <div className="pl-20 md:pl-40 pb-56 md:pb-20 mt-40 flex flex-col gap-5 z-[10] max-w-[750px]">
        <h1 className="text-[50px] text-white font-semibold">
          Hi, I am Mathimalar<br></br> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">Full Stack Developer</span>
        </h1>
        <p className="text-gray-200 hidden md:block">A Full Stack Developer and UI/UX Designer creating seamless apps and intuitive designs. Let’s build something amazing together!</p>
        <div className="flex-col md:flex-row hidden md:flex gap-5">
          <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          My Skills</Link>

          <Link href="/my-projects" className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]">
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20"></div>
          My Projects</Link>

          <Link href="/contact-me" className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]">
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"></div>
          Contact me</Link>
        </div>
      </div>
    </div>

    <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
  <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px">
    Learn More
  </Link>

  <Link href="/my-projects" className="rounded-[20px] group bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]">
    My Projects
  </Link>

  <Link href="/contact-me" className="rounded-[20px] group bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]">
    Contact me
  </Link>
</div>



        

   </main>
  );
}
