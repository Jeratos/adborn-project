interface Tool {
  image: string;
}

export default function Tools() {
  const img: Tool[] = [
    { image: "/images/tool1.png" },
    { image: "/images/tool2png.png" },
    { image: "/images/tool3.png" },
    { image: "/images/tool4.png" },
    { image: "/images/tool5.png" },
  ];
  return (
    <>
      <section className="flex justify-between items-center mt-10 mx-20">
        <div className=" leading-15">
          <p className="text-2">Build Beautiful Website</p>
          <h2 className="text-[4vw] font-semibold">All the tools</h2>
          <h2 className="text-[4vw] font-semibold">you need.</h2>
        </div>
        <div>
          <img src="/images/thumb1.png" alt="" />
        </div>
      </section>
      <section className="mt-20">
        <div className="grid grid-cols-3 gap-5 w-[1257.8px] mx-auto">
          {img.map((image, index) => (
            <div
              key={index}
              className="w-[391.56px] h-[437.29px] rounded-[42.87px] overflow-hidden "
            >
              <img
                src={image.image}
                alt=""
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
