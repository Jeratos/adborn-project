export default function Footer() {
  return (
    <footer className="bg-black text-white flex justify-center items-center py-10">
      
      <div className="w-[1200px] p-10 flex justify-between">
        
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <img 
            src="/images/footerlogo.png" 
            alt="Adborn Logo" 
            className="w-[160px]"
          />
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>Marketing Subscription</li>
            <li>Social Media</li>
            <li>Paid social</li>
            <li>Paid Media</li>
            <li>SEO</li>
            <li>Influencer Marketing</li>
            <li>PR & Outreach</li>
            <li>Video Production</li>
            <li>Video Marketing</li>
          </ul>
        </div>

        {/* Second Services Column */}
        <div className="mt-8">
          <ul className="text-sm space-y-1 text-gray-300">
            <li>Branding</li>
            <li>Community Management</li>
            <li>Website development</li>
            <li>Mobile App Design</li>
            <li>Web Design</li>
            <li>Mobile App Design</li>
            <li>Blockchain Development</li>
            <li>Lead Generation</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>About us</li>
            <li>Success Stories</li>
            <li>Our people</li>
            <li>Pricing</li>
            <li>Affiliate Program</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Portfolio</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact us</h2>
          <p className="text-sm text-gray-300">manaspatni07@gmail.com</p>
          <p className="text-sm text-gray-300 mt-1">+91-9405957126</p>
        </div>

      </div>

    </footer>
  );
}