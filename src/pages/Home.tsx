import heroBg from '../assets/hero-bg.png'

const Home = () => {
  return (
    <>
      <section id="hero" style={{ backgroundImage: `url(${heroBg})` }} className='bg-no-repeat bg-cover bg-center h-[712px] flex items-center justify-end pr-[18px]'>
        <div className='w-[643px] h-[443px] bg-color-primary-light pt-16 pl-10 pr-11 pb-9 rounded-lg'>
          <h2 className='text-base font-semibold text-[#333333] tracking-widest '>New Arrival</h2>
          <h1 className='text-[52px] text-color-primary font-bold leading-tight mb-6'>Discover Our <br /> New Collection</h1>
          <p className='text-lg font-medium text-[#333333] leading-tight mb-11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='w-[222px] h-[74px] bg-color-primary uppercase font-bold text-white'>Buy now</button>
        </div>
      </section>
    </>
  )
}

export default Home;