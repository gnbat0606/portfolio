export const Navigation = () => {
  return (
    <div className="hidden flex-col gap-2 text-2xl">
      <a href="">About</a>
      <a href="">Wrok</a>
      <a href="">Testimonials</a>
      <a href="">Contact</a>
      <button></button>
    </div>
  );
};

// endees
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Home() {
//   const [open, setOpen] = useState(false);

//   const variants = {
//     open: { x: 0 },
//     closed: { x: "100%" },
//   };

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//         {open === false ? (
//           <button
//             onClick={() => {
//               setOpen(true);
//             }}
//           >
//             {open === true ? "X" : "Burger"}
//           </button>
//         ) : (
//           <div onClick={() => setOpen(false)}>Hiiii</div>
//         )}

//         <motion.div
//           initial="closed"
//           animate={open ? "open" : "closed"}
//           variants={variants}
//           style={{
//             position: "fixed",
//             top: 0,
//             right: 0,
//             bottom: 0,
//             width: "80%",
//             background: "#fff",
//             zIndex: 1,
//           }}
//         >
//           <h1>Mobile Header</h1>
//         </motion.div>
//       </div>
//     </>
//   );
// }
// ``;
