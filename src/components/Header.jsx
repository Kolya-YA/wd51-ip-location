import emjPic from "../assets/emj.jpg"

const Header = () => {
	return (
        <header className="mb-8 py-8 bg-gradient-to-br from-fuchsia-800 to-teal-800 text-white">
            <div className="container mx-auto px-4 text-center text-3xl font-semibold text-gray-100 tracking-wider">
                <img src={emjPic} alt="emj" className="inline-block w-20 h-20 rounded-full" />
                <h1>{"Yo! I'm watching you!"}</h1> 
            </div>
        </header>
    );
}

export default Header