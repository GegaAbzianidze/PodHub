
const BottomComponents = () => {
  return (
    <div className="h-[800px] lg:h-auto">
      <div className="w-full px-2 lg:px-36 flex flex-col lg:flex-row gap-6 h-96 my-14 items-center">
        <div className="md:w-1/2 bg-gray-300 rounded-3xl p-6 h-full">
            <div className="flex py-3 flex-col justify-between h-full">
              <div>
                <h1 className="text-4xl md:text-6xl text-black w-44">
                  Subscribe to our newsletter
                </h1>
                <p className="text-md">
                  Dive deeper into Radiolab&apos;s world. Every Wednesday, you will
                  receive little essays, book reviews, staff recommendations, and
                  more. Sign up here
                </p>
              </div>
              <div className="flex gap-3 flex-col md:flex-row mt-3">
                <input
                  type="text"
                  placeholder="Your email"
                  className="w-full rounded-3xl px-3 py-2"
                />
                <button className="bg-black rounded-3xl px-3 py-2 text-white">
                  Subscribe
                </button>
              </div>
            </div>
        </div>
        <div className="md:w-1/2 rounded-3xl bg-yellow-500 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="cover"
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomComponents;
