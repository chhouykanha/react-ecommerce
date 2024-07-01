
const CategoryCard = ({data}) => {
  return (
    <div className="relative h-fit lg:h-[350px] group overflow-hidden">
        <img className="bg-cover w-full h-full top-0 group-hover:scale-105 transition-all duration-500" src={data.url} alt="" />
        <div className="absolute bottom-10 left-1/2 bg-white px-8 py-2 rounded-lg text-primary font-semibold -translate-x-1/2">{data.name}({data.qty})</div>
    </div>
  )
}

export default CategoryCard