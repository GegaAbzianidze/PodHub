
const EpisodeSkeleton = () => {
  return (
    <div className='animate-pulse'>
         <div className="flex gap-2 p-3 border w-full rounded-3xl">
      <div
       
        alt="cover"
        className="h-20 rounded-lg w-20 bg-slate-400"
      />
      <div className="flex flex-col justify-center gap-1">
        <p className='h-2 w-1/3 bg-slate-300'></p>
        <h1
          className="lg:text-xl w-36 h-4 bg-slate-300 text-ellipsis whitespace-nowrap overflow-hidden"
        >
        </h1>
      </div>
    </div>
    </div>
  )
}

export default EpisodeSkeleton