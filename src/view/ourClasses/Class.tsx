type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[235px] w-[310px] md:h-[340px] md:w-[450px]
  flex-col items-center justify-center whitespace-normal bg-primary-500
  text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[235px] w-[310px] md:h-[340px] md:w-[450px]">
      <div className={overlayStyles}>
        <p className="text-xl md:text-2xl">{name}</p>
        <p className="mt-1 md:mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default Class;
