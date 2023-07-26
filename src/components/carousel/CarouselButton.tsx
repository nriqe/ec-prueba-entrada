type CarouselButtonProps = {
    classButton: string,
    handleFuction: () => void,
    icon: string
}

const CarouselButton = ({ classButton, handleFuction, icon }: CarouselButtonProps) => {
  return (
    <button className={classButton} type="button" onClick={handleFuction}>
        {icon}
    </button>
  )
}

export default CarouselButton