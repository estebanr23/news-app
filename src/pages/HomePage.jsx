import { HorizontalCard, VerticalCard, NavBar, Footer, Carousel } from '../components';

export const HomePage = () => {
  return (
    <>
        <NavBar />

        <main className="mt-4 md:px-48">
            <Carousel />
        </main>

        <section className="mt-4 px-48">
            <VerticalCard />
        </section>

        <section className="mt-4 px-48">
            <HorizontalCard />
        </section>

        <Footer />
    </>
  )
}
