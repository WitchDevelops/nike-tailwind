import { Nav } from "./components";
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from "./sections";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-gray-100">
        <CustomerReviews />
      </section>
      <section className="padding padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-gray-800 padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App