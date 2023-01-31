const Shimmer = () => {
    return (
        <div className="flex flex-wrap pl-16">
            {Array(10).fill(" ").map((e,index)=>
            <div  key={index} className="w-52 h-52 bg-slate-300 shadow-xl m-2 p-2"></div>)}
        </div>
    )
}

export default Shimmer;