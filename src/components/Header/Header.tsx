export function Header() {
  const isMobile = Number(screen.width) <= 1000;
  const containerClass = isMobile
    ? "bg-black"
    : "bg-[#1a1a1a] border-b border-white";
  const titleClass = isMobile ? "text-2xl" : "text-6xl";

  return (
    <div
      className={`${containerClass} w-full h-24 font-bold text-white flex items-center p-6 mb-10 justify-center`}
    >
      <h1 className={`${titleClass} select-none`}>Tabela Periódica</h1>
    </div>
  );
}
