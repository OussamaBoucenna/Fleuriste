export default function IconCircle({ imageSrc, text }) {
  return (
    <div className="flex flex-col items-center space-y-3">
      {/* Cercle avec image */}
      <div className="w-16  h-16 md:w-28 md:h-28 rounded-full bg-pink-100 flex items-center justify-center">
        <img src={imageSrc} alt={text} className="w-8 h-8 md:w-12 md:h-12" />
      </div>

      {/* Texte */}
      <p className="text-sm   md:text-lg text-nowrap font-medium text-myGrey">{text}</p>
    </div>
  );
}
