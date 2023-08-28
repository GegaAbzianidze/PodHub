
const PodcastSkeleton = () => {
  return (
    <div className='animate-pulse'>
    <div className="w-full flex flex-col">
      <div className="h-96 bg-slate-400 rounded-t-3xl">
       
      </div>
      <div className="flex flex-col justify-center px-6 py-10 gap-14 bg-gray-100 rounded-b-3xl">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-md  h-4 w-56 bg-slate-300">
              <p></p>
            </p>
            <h1 className="text-lg font-bold h-4 w-full bg-slate-300"></h1>
          </div>
          <p className="text-ellipsis whitespace-nowrap overflow-hidden">
           
          </p>
        </div>
        <div className="flex justify-between">
          <button>Listen Now</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PodcastSkeleton