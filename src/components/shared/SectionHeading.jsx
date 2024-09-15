// eslint-disable-next-line react/prop-types
export default function SectionHeading({subHeading, heading}) {
    
  return (
    <div className="text-center space-y-4 mb-10">
      <p className="text-[#D99904] text-xl">{subHeading}</p>
      <div className='py-5 border-b-4 border-t-4 max-w-lg mx-auto'>
        <h1 className="text-4xl uppercase">{heading}</h1>
      </div>
    </div>
  );
}
