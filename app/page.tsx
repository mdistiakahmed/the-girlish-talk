export default function Home() {
  return (
    <div className="bg-pink-100 min-h-screen flex flex-col">
      <header className="bg-pink-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">The Girlish Talk</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-10">
        <section className="text-center">
          <h2 className="text-4xl font-semibold text-pink-700 mb-4">
            Welcome to The Girlish Talk!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Your go-to platform for everything empowering, fashionable, and fun.
            Join our community of strong, inspiring women who uplift and support
            one another.
          </p>
          <button className="bg-pink-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-pink-700 transition duration-300">
            Get Started
          </button>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-pink-700 mb-6">
            Latest Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-bold mb-2">How to Be Confident</h4>
              <p className="text-gray-600">
                Discover tips and strategies to boost your self-esteem and walk
                with confidence.
              </p>
              <button className="mt-4 text-pink-600 font-semibold hover:underline">
                Read More
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-bold mb-2">Fashion Tips for 2024</h4>
              <p className="text-gray-600">
                Stay up-to-date with the latest fashion trends and tips to keep
                your wardrobe stylish.
              </p>
              <button className="mt-4 text-pink-600 font-semibold hover:underline">
                Read More
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-bold mb-2">Self-Care 101</h4>
              <p className="text-gray-600">
                Learn how to prioritize your well-being with practical self-care
                tips.
              </p>
              <button className="mt-4 text-pink-600 font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} The Girlish Talk. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
