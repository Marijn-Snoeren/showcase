export default function Block2({ imageUrl, title, number }) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 relative">
        <img
          src={imageUrl}
          alt="Full Height Image"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between px-6 py-4 z-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Small Centered Image"
            className="w-1/3 aspect-9/14 object-cover" 
            />
        </div>

        <div className="flex justify-between text-2xl font-semibold uppercase">
          <span>{number}</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}