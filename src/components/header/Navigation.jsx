import { motion } from "framer-motion";

export const Navigation = ({ open }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
            background: "red",
            zIndex: 1000,
          }}
        >
          <h1>Mobile Header</h1>
        </motion.div>
      </div>
    </>
  );
};
``;
