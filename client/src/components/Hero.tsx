export default function Hero() {
  return (
    <main className="flex justify-center items-center flex-col">
      
      <section className="flex justify-center items-center">
        <h1 className="text-[7vw] text-center w-[1121px] h-[270px] font-bold font-sans mt-20">
          Launch your agency with-UiUx Design
        </h1>
      </section>

      {/* Auto Scroll Section */}
      <section className="mt-20 rounded-2xl p-2 bg-gray-600 h-[700px] w-[1258px] overflow-hidden">
        
        <div className="animate-scroll-up">
          <img
            src="/images/hero-img.png"
            alt="autoScroll"
            className="w-full"
          />
        </div>

      </section>

    </main>
  );
}