import { FaCartPlus } from 'react-icons/fa';
const Header = () => {
  return (
    <header>
        <nav className='container mx-auto flex justify-between items-center'>
            <h1 className="font-bold text-4xl">ReduxShop</h1>

    {/* Cart Icon with Counter Bubble */}
    <div className="cartContainer">
    <FaCartPlus className='text-white' />
    <div className="counterBubble">
        {/* You can use your Redux state for the cart count here */}
        <span>3</span>
    </div>
    </div>
        </nav>
    </header>
  );
};

export default Header;