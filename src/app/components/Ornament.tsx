export default function Ornament() {
  return (
    <div className="flex items-center justify-center gap-5 mb-10">
      <div className="w-[60px] h-px bg-rule" />
      <div className="relative w-3.5 h-5 flex-shrink-0">
        <span className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-crimson opacity-50" />
        <span className="absolute left-0 top-[35%] w-full h-px bg-crimson opacity-50" />
      </div>
      <div className="w-[60px] h-px bg-rule" />
    </div>
  );
}
