import Tools from "./Tools"
import Feature from "./Feature"
import Contact from "./Contact"
import Footer from "../common/Footer"
interface Project {
   
    image: string;
}

export default function Projects() {

    const images: Project[] = [
        {image: "/images/project1.png"},
        {image: "/images/project2.png"},
        {image: "/images/project3.png"},
        {image: "/images/project4.png"},
        {image: "/images/project5.png"},
        {image: "/images/project6.png"},
    ]
  return (
    <>
    <main className='mt-20 h-[180px]'>

     <section className='text-[5vw] font-semibold text-center'>
        
        <h1>Start building with Company With</h1>
        <h1>fully functional websites</h1>
        </section>   
{/* images */}
        <section className="mt-15">
       <div className="grid grid-cols-3 gap-5 w-[1257.8px] mx-auto">
  {images.map((image, index) => (
    <div
      key={index}
      className="w-[409.27px] p-2 h-[254.86px] rounded-[20px] bg-gray-100 overflow-y-auto scrollbar-hide"
    >
      <img
        src={image.image}
        alt=""
        className="w-full object-cover rounded-[20px]"
      />
    </div>
  ))}
</div>
        </section>
        <Tools/>
        <Feature/>
        <Contact/>
        <Footer/>
    </main>
     </>
  )
}
