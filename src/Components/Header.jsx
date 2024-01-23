export default function Header() {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth', // Rola suavemente
      });
    }
  };

    return (
      
<header>
    <nav>
        <h1><a href="#">PagCode</a></h1>
      <ul className="ulh">
        <li onClick={() => handleScroll('home')}><a href="#home">Home</a></li>
        <li onClick={() => handleScroll('about')}><a href="#about">About</a></li>
        <li onClick={() => handleScroll('contact')} className="h-contact"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
</header>

    )
  }