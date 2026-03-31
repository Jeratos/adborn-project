
export default function About() {
  return (
    <>
    <main>
        <section className="flex justify-center mt-10 items-center flex-col ">
         <div className="text-[6vw] font-bold w-[1026px]">
            <h1 className="text-center">
                Core Features all your 
            </h1>
             <h1 className="text-center">website need</h1>
         </div>
        </section>
        {/* imges */}

        <section className="flex flex-row gap-2 justify-center items-center">
            <div className="flex flex-col gap-5">
                <div className="w-[247px] h-[267px] rounded-[15px] overflow-hidden">
                    <img className="h-full w-full" src="/images/about1.png" alt="" />
                </div>
                <div className="w-[247px] h-[267px] overflow-hidden rounded-[15px]">
                    <img className="h-full w-full" src="/images/about2.png" alt="" />

                </div>
            </div>
            <div >
<img className="h-full w-full" src="/images/about3.png" alt="" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="w-[247px] h-[267px] rounded-[15px] overflow-hidden">
                    <img className="h-full w-full" src="/images/about4.png" alt="" />
                </div>
                <div className="w-[247px] h-[267px] rounded-[15px] overflow-hidden">
                    <img className="h-full w-full" src="/images/about5.png" alt="" />

                </div>
            </div>
        </section>
    </main>
    </>
  )
}
