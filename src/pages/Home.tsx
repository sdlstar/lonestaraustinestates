import Menu from "../components/Menu";
import CarouselComponent from "../components/CarouselComponent";
import FooterComponent from "../components/FooterComponent";

function Home() {
  return (
    <>
      <Menu />
      <CarouselComponent />

      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Welcome home</h1>
          <p className="mb-4">
            It warms our hearts to have you join us. We're beyond thrilled to be your hosts in
            this wonderful city, where hospitality isn't just a duty—it's our passion.
          </p>
          <p className="mb-4">
            Our goal is simple: to provide you with a place to unwind, recharge, and create
            beautiful memories. So, settle in, let go of the outside world, and bask in the joy of
            togetherness.
          </p>
          <p className="mb-4">
            Whether you're here to explore the local treasures or simply revel in relaxation,
            know that our home is yours to enjoy. So, kick back, make yourself at home, and
            let the spirit of Magnolia B&B embrace you.
          </p>
          <p>
            Here's to laughter, relaxation, and the magic of shared moments. Welcome home.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Room"
            className="rounded-lg shadow-sm"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
            alt="Room"
            className="rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">🌟 Highlights 🌟</h2>
          <ul className="list-disc list-inside">
            <li>🌼 Charming house with boho style</li>
            <li>🛏️ 3 bedrooms and bathrooms</li>
            <li>🏞️ Breathtaking mountain view</li>
            <li>🍳 Fully equipped kitchen</li>
            <li>☕ Complimentary breakfast included</li>
            <li>🚭 No-smoking policy for freshness</li>
            <li>⛷️ Ski slopes for winter adventures</li>
            <li>🥾 Hikes with stunning waterfall views</li>
            <li>🧴 Bathroom essentials provided</li>
            <li>🛏️ Bed linen and towels available</li>
          </ul>
        </div>
      </div>
    </div>
  
    <FooterComponent />
  </>
  );
}

export default Home;
