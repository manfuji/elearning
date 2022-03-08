function Footer() {
  return (
    <div>
      <footer className="flex flex-col mt-10 items-center gap-6 justify-center w-full h-full py-10 border-t">
        <div>
          <h1 className="text-4xl text-center capitalize font-bold text-blue-800">
            contact
          </h1>
          <ul className="text-xl  ml-2">
            <li className=" ">call: 0000000000</li>
            <li>Whatsapp:000000000</li>
          </ul>
        </div>
        <div>
          <a
            className="flex items-center justify-center"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn And advance together with the world freely
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
