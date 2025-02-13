const Footer = () => {
  return (
    <>
      <footer className="flex flex-col space-y-10 justify-center p-3 dark:bg-neutral-800 dark:text-white">
        <p className="text-center text-gray-700 font-medium dark:text-white">
          © {new Date().getFullYear()} Blogging Ltd. All rights reservered.
        </p>
      </footer>
    </>
  );
};

export default Footer;
