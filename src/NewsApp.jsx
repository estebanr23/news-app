import { HorizontalCard, VerticalCard, NavBar, Footer, Carousel } from './components';

export const NewsApp = () => {
  return (
    <>
        <NavBar />

        <main className="mt-4 px-6">
            <Carousel />
        </main>

        <section className="mt-4 px-6">
            <h1 className="mb-2 font-bold text-2xl text-center">Tecnologia</h1>
            <div className="grid grid-cols-3 gap-4">
                <VerticalCard />
                <VerticalCard />
                <VerticalCard />
            </div>
        </section>

        <section className="mt-4 px-6">
            <h2 className="mb-2 font-bold text-2xl text-center">Deportes</h2>
            <div className='grid grid-flow-col gap-4'>
                <HorizontalCard />
                <HorizontalCard />
            </div>
        </section>

        <Footer />
    </>
  )
}
