export default function Footer() {
    const year = new Date().getFullYear(); // Get the current year
  
    return (
      <footer className="navbar-bg flex justify-center items-center even-shadow border-t-2 border-stone-950 text-white p-8 font-medium text-xl mx-auto">
        <p>Copyright © {year} Kyle Walker</p>
      </footer>
    );
  }
  