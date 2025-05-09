const Gallery = () => {
    return (
      <section id="gallery" className="bg-[#111827] py-16 px-6 md:px-12 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Work</h2>
          <p className="text-gray-400 mb-12">A glimpse of what we do — live from Instagram.</p>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Reel 1 */}
            <div className="aspect-w-9 aspect-h-16 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.instagram.com/reel/REEL_ID_1/embed"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
  
            {/* Reel 2 */}
            <div className="aspect-w-9 aspect-h-16 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.instagram.com/reel/REEL_ID_2/embed"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
  
            {/* Reel 3 */}
            <div className="aspect-w-9 aspect-h-16 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.instagram.com/reel/REEL_ID_3/embed"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;
  