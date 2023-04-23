import Logo from "@/assets/Door.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} style={{ height: "50px" }} />
          <p className="my-5">
            DoorShop is a premier personal shopping service that caters to all
            your shopping needs. Whether you prefer in-store or online shopping,
            we offer customized packages to suit your lifestyle, budget, and
            preferences. Enjoy a hassle-free shopping experience and let us
            handle the details for you.
          </p>
          <p>© DoorShop All Rights Reserved.</p>
        </div>
        <div
          className="mt-16 basis-1/4 md:mt-0"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h4 className="font-bold">Socials</h4>
          <div className="flex gap-5 align-middle">
            <div>
              <a href="/">
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i className="fa-brands fa-twitter fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="mt-16 basis-1/4 md:mt-0"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h4 className="font-bold">Contact Us</h4>
          <div
            style={{
              justifyContent: "center",
              // alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <a href="mailto:udohdavid021@gmail.com">udohdavid021@gmail.com</a>
            <a href="tel:+2348022459734">+234-802-224-59734</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
