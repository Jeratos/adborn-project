interface Feature {
    image: string;
    title: string;
}

export default function Feature() {
 
    const feature:Feature[] = [
        {image: "/images/feature-logo1.png", title: "Responsive Layout"},
        {image: "/images/feature-logo2.png", title: "Header & Footer"},
        {image: "/images/feature-logo3.png", title: "Pre Built Offcanvas"},
        {image: "/images/feature-logo4.png", title: "Creative sliders"},
        {image: "/images/feature-logo5.png", title: "Animation Builder"},
        {image: "/images/feature-logo6.png", title: "CSS with superpowers"},
        {image: "/images/feature-logo7.png", title: "Unique Mega Menu"},
        {image: "/images/feature-logo8.png", title: "Unique blog styles"},
        {image: "/images/feature-logo9.png", title: "Unique Archive Page"},
        {image: "/images/feature-logo10.png", title: "Marketing popup"},
        {image: "/images/feature-logo11.png", title: "Dark and Light Version"},
        {image: "/images/feature-logo12.png", title: "Smooth Scrolling"},
        {image: "/images/feature-logo13.png", title: "Advanced Typography"},
        {image: "/images/feature-logo14.png", title: "Browser Friendly Code"},
        {image: "/images/feature-logo15.png", title: "Animated particles"}
    ]

  return (<>
    <main>
        <section className="mt-20">
            <div className="flex flex-col items-center leading-20">
                <p className="text-xl">Features Included</p>
                <h1 className="text-[5vw] font-semibold">Top-Notch</h1>
                <h1 className="text-[5vw] font-semibold">Features Included</h1>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-5 w-[1100px] mx-auto">
                {feature.map((feature, index) => (
                    <div
                        key={index}
                        className="w-[195.82px] h-[179px] rounded-[18.02px] border-[2.4px] border-[#16BCFF] my-2 flex flex-col justify-center items-center"
                    >
                        <img
                            src={feature.image}
                            alt=""
                            className="w-25 h-25   rounded-[20px]"
                        />
                        <p className="text-center text-[#16BCFF] font-semibold text-2xl">{feature.title}</p>
                    </div> 
                ))}
            </div>
        </section>
    </main>
    </>
  )
}
