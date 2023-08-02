const GetSocial = (props) => {
  return (
    <section
      className="relative flex flex-col items-center"
    >
      <div 
        style={{backgroundImage: `url('https://www.hilton.com/im/en/NoHotel/2201396/all-ecomm-image-family-playing-beach.jpeg?impolicy=crop&cw=5000&ch=3203&gravity=NorthWest&xposition=0&yposition=20&rw=1280&rh=820')`}}
        className="w-full aspect-video bg-cover bg-center"
      />
      <div
        className="bg-white/80 absolute bottom-[-150px] w-[90%] p-12 flex flex-col items-center gap-4"
      >
        <p className="font-Arvo text-lg text-[#104C97]">Get Social</p>
        <p className="text-sm">Join the conversation or just daydream about your next vacation with @doubletree.</p>
        <div>
          <button className="bg-[#CF4802] px-4 py-2 rounded-md text-white text-sm">Visit our Instagram</button>
        </div>
      </div>
    </section>
  );
}
export default GetSocial;