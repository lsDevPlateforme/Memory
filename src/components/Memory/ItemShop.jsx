export const ItemShop = ({ img, imgAlt, isActive, onChangeItems }) => {
  const classe = isActive
    ? "w-12 border border-black bg-primary"
    : "w-12 border border-black bg-primary/50 hover:bg-primary";
  return (
    <div className={classe} onClick={() => onChangeItems(imgAlt)}>
      <img className="w-full" src={img} alt={imgAlt} />
    </div>
  );
};
