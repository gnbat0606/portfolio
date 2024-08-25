import { motion } from "framer-motion";
import { FiSun } from "react-icons/fi";

export const Navigation = ({ open }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <motion.div
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={variants}
          style={{
            position: "fixed",
            top: "60px",
            right: 0,
            bottom: 0,
            width: "80%",
            backgroundColor: "white",
            zIndex: 1000,
            padding: "16px",
          }}
        >
          <div>
            <div className="flex flex-col gap-4 p-4">
              <div>About</div>
              <div>Work</div>
              <div>Testimonials</div>
              <div>Contact</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Switch Theme</div>
              <FiSun />
            </div>
            <div>Download CV</div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
``;
