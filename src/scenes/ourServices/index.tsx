import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Service";

const classes: Array<ClassType> = [
  {
    name: "In-Store & Online Shopping",
    description:
      "Experience the ultimate shopping service with our in-store and online options. Accompanied by a personal shopper or have them search for products for you online. Convenient, effortless, and time-saving - enjoy the best of both worlds! Try it out today and see for yourself.",
    image: image1,
  },
  {
    name: "Gift Shopping",
    description:
      "Take the stress out of gift shopping with our gift shopping service. Our expert shoppers will help you find the perfect gift for any occasion. We can even wrap and deliver it for you! Enjoy the convenience of hassle-free gift shopping and make your loved ones feel special. Try it out today and experience the joy of giving without the stress!",
    image: image3,
  },
  {
    name: "Wardrobe & Personal Stylings",
    description:
      "Revamp your wardrobe and upgrade your style with our wardrobe and personal styling service. Our professional stylists will help you create a personalized look that suits your body type, lifestyle, and preferences. We can find the perfect pieces to enhance your style and bring out your best features. Experience the confidence-boosting power of a well-curated wardrobe and make a statement with your personal style. Try it out today and elevate your fashion game!",
    image: image4,
  },
  {
    name: "Project & Subscription Packages",
    description:
      "Transform your dream projects into reality with our Project & Subscription Packages. Our personal shoppers will help you plan and create unique experiences for any occasion, whether it's a wedding, birthday, or home decor. Also enjoy an ongoing personalized shopping services with our subscription packages that contain hourly, weekly and monthly packages. Let us bring your vision to life!",
    image: image5,
  },
  {
    name: "Logistics",
    description:
      "Let us take care of your shopping and delivery needs with our logistics service. We can shop for your desired products in-store or online, and deliver them straight to your doorstep. Alternatively, we can simply provide delivery services for items you've already purchased. Enjoy the convenience of hassle-free shopping and reliable delivery. Try it out today and let us handle the logistics for you!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR SERVICES</HText>
            <p className="py-5">
              Doorshop offers a range of services to suit your needs. In-store
              and online shopping options are available, with flat and hourly
              rates for each. Gift shopping, wardrobe styling, and personal
              styling services are also on offer, with charges based on
              transport and external costs. Hourly, per-project, and
              subscription packages are available to choose from.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-full whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
