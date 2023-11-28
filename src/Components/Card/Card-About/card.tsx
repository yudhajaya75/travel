
function Card() {
    let about = require('../../../assets/about.webp');

    return (
        <div className="w-full lg:w-[1300px] mt-[100px] lg:mx-[100px] sm320:mx-2">
            <div
                className="lg:flex md:flex sm:flex-row">
                <img
                    src={about}
                    alt="about"
                    className="w-auto lg:w-auto md:w-[500px] sm:w-[400px] sm320:w-[200px] "
                />
                <div className="p-10">
                    <h1 className="text-[#7fa0fe] sm:text-sm md:text-2xl">
                        About Us
                    </h1>
                    <h2 className="py-5 sm320:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#00095e]">
                        Get ready for real time adventure
                    </h2>
                    <p className="py-5 sm:text-sm md:text-2xl">
                        Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                    </p>
                    <button className="bg-[#ffc81b] rounded-lg text-white font-bold py-5 px-5">
                        Book your Destination
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card