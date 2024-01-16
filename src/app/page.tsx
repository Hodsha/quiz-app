import img from "./../../public/quiz.jpg";

export default function Home() {
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-right md:bg-right lg:bg-left xl:bg-center"
        style={{
          backgroundImage: 'url("/quiz.jpg")',
          height: '100%',
          width: '100%',
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundPositionY: '-50px', // Beispiel: Bild um 50 Pixel nach oben verschieben
        }}
      >
        <h1></h1>
        </div>
      <div className="sm:hidden">
   
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/quiz-small.jpg")',
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundPositionY: '-50px',
          }}
        >
          <h1>was geht ab</h1>
        </div>
      </div>
      <div className="hidden sm:block md:hidden">
        {/* Dieser Abschnitt wird bei Bildschirmen größer als `sm` und kleiner als `md` angezeigt */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/quiz-medium.jpg")',
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundPositionY: '-50px',
          }}
        />
      </div>
    </div>
  )
}
