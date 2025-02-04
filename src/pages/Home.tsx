import heroBg from '../assets/hero-bg.png'
import categoryDining from '../assets/category-dining.png'
import categoryLivingRoom from '../assets/category-living-room.png'
import categoryBathroom from '../assets/category-bathroom.png'

const Home = () => {
  return (
    <>
      <section id="hero" style={{ backgroundImage: `url(${heroBg})` }} className='bg-no-repeat bg-cover bg-center h-[712px] flex items-center justify-end pr-[18px]'>
        <div className='w-[643px] h-[443px] bg-color-primary-light pt-16 pl-10 pr-11 pb-9 rounded-lg'>
          <h3 className='text-base font-semibold text-dark-grey tracking-widest '>New Arrival</h3>
          <h1 className='text-[52px] text-color-primary font-bold leading-tight mb-6'>Discover Our <br /> New Collection</h1>
          <p className='text-lg font-medium text-dark-grey leading-tight mb-11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='w-[222px] h-[74px] bg-color-primary uppercase font-bold text-white'>Buy now</button>
        </div>
      </section>

      <section id='categories' className='mt-14 pl-[131px] pr-32 '>
        <header className='mb-16'>
          <h1 className='text-[34px] text-dark-grey font-bold text-center'>Browse The Range</h1>
          <p className='text-xl text-semi-dark-grey font-normal text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </header>

        <div className='flex gap-5'>
          <div>
            <img src={categoryDining} alt="Dining table" className='mb-[30px] rounded'/>
            <h3 className='text-dark-grey text-2xl font-semibold text-center'>Dining</h3>
          </div>
          <div>
            <img src={categoryLivingRoom} alt="Living room" className='mb-[30px] rounded' />
            <h3 className='text-dark-grey text-2xl font-semibold text-center'>Living</h3>
          </div>
          <div>
            <img src={categoryBathroom} alt="Bathroom" className='mb-[30px] rounded' />
            <h3 className='text-dark-grey text-2xl font-semibold text-center'>Bedroom</h3>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home;