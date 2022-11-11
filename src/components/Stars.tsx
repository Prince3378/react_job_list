import star from './../images/star.svg';

export const Stars = () => {
  return (
    <div className="flex items-center">
      <img src={star} alt="star" className="inline lg:h-[10px]"/>
      <img src={star} alt="star" className="inline lg:h-[10px]"/>
      <img src={star} alt="star" className="inline lg:h-[10px]"/>
      <img src={star} alt="star" className="inline lg:h-[10px]"/>
      <img src={star} alt="star" className="inline lg:h-[10px]"/>
    </div>
  );
};
