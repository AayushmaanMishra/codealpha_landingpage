import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-purple-500'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Dive into a gaming adventure that revolutionizes your experience with unbeatable deals. From top-notch selections to incredible savings, we provide unparalleled value that sets us apart.

        </p>
        <p className='mt-6 info-text'>
        Explore a world of possibilities crafted to satisfy your gaming desires, exceeding even the loftiest expectations. Your gaming journey with us is nothing less than extraordinary.

        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
