import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/client.png";
import Benefit from "./Benefit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faHandshake,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import useMediaQuery from "@/hooks/useMediaQuery";

const benefits: Array<BenefitType> = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faUniversalAccess}
        className="flex h-6 w-6 justify-center align-middle"
      />
    ),
    title: "Accessibility",
    description:
      "Our personal shopping service is accessible to everyone, with in-person and virtual options for personalized wardrobe recommendations.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faHandHoldingDollar}
        className="flex h-6 w-6 justify-center align-middle"
      />
    ),
    title: "Money Efficient",
    description:
      "We offer stylish items within your budget and provide ongoing support to maximize the value of your purchases.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faHandshake}
        className="flex h-6 w-6 justify-center align-middle"
      />
    ),
    title: "Trustworthiness",
    description:
      "Our trustworthy stylists create a safe and welcoming environment through open communication and honesty, building lasting relationships with clients.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            ABOUT <span style={{ color: "#F39D1A" }}>DOOR</span>SHOP
          </HText>
          <p className="my-5 text-sm">
            At our personal shopping service, we provide a seamless shopping
            experience for all your needs. Whether you're looking for fashion
            and style advice or need assistance with gift shopping, we've got
            you covered. Our services include in-store and online shopping,
            wardrobe styling, personal styling, and gift shopping. We offer
            flexible packages to suit your needs, including hourly, per-project,
            and subscription packages. Our team is dedicated to providing
            world-class service and true care to each and every customer,
            ensuring you achieve your shopping goals with ease.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          {isAboveMediumScreens && (
            <img
              className="w-1/3"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
          )}
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              {/* <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"> */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF CLIENTS GETTING THE BEST{" "}
                  <span style={{ color: "brown" }}>SERVICE</span>
                </HText>
              </motion.div>
              {/* </div> */}
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                At our business, we are proud to provide millions of clients
                with the best service possible. Our team is dedicated to
                ensuring that each client receives personalized attention and
                support, no matter what their needs may be. We understand that
                our clients have different preferences, budgets, and goals,
                which is why we work closely with them to develop a customized
                plan that meets their unique needs.
              </p>
              <p className="mb-5">
                From our experienced stylists to our dedicated customer service
                team, we are committed to delivering a top-notch experience
                every step of the way. We strive to make our clients feel
                comfortable and confident, whether they are shopping in person
                or virtually. With our extensive selection of high-quality
                items, competitive pricing, and unparalleled customer service,
                it's no wonder that millions of clients continue to choose us
                for their personal shopping needs. When you choose us, you can
                trust that you are getting the best service possible.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              {/* <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"> */}
              <ActionButton setSelectedPage={setSelectedPage}>
                Enjoy a Service
              </ActionButton>
            </div>
          </div>
          {/* </div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
