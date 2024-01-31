'use server';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border border-dotted border-b-white-700 border-r-0 fixed bottom-0 w-full h-10'>
      <small>&copy; Copyright {currentYear}</small>
    </footer>
  );
};

export default Footer;
