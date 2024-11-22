// import React, { useState } from "react";

// export default function About() {
//   const [myStyle, setMyStyle] = useState({
//     color: "white",
//     backgroundColor: "black",
//     border: "1px solid white ",
//   });
//   const [mybtnStyle, setMybtnStyle] = useState({
//     color: "white",
//     backgroundColor: "black",
//     outline: "none",

//   });

//   const [btntext, setBtbtext] = useState("Enable light mode");

//   const toggleStyle = () => {
//     if (myStyle.color === "white") {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setMybtnStyle({
//         color: "black",
//         backgroundColor: "white",
//         outline: "none",
//       });
//       setBtbtext("Enable Dark mode");
//     } else {
//       setMyStyle({
//         border: "1px solid white ",
//         color: "white",
//         backgroundColor: "black",
//       });
//       setMybtnStyle({
//         color: "white",
//         outline: "none",
//         backgroundColor: "black",
//       });
//       setBtbtext("Enable Light mode");
//     }
//   };

//   return (
//     <div className="container p-3 my-5 flex" style={myStyle}>
//       <h1 className="my-1">About Us</h1>
//       <div className="accordion my-4 border-none" style={myStyle} id="accordionExample">
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button outline-none"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//               style={mybtnStyle}
//             >
//               Accordion Item #1
//             </button>
//           </h2>
//           <div
//             id="collapseOne"
//             className="accordion-collapse collapse show"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body">
//               <strong>This is the first item's accordion body.</strong> It is
//               shown by default, until the collapse plugin adds the appropriate
//               classNamees that we use to style each element. These classNamees
//               control the overall appearance, as well as the showing and hiding
//               via CSS transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>

//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseTwo"
//               aria-expanded="false"
//               aria-controls="collapseTwo"
//               style={mybtnStyle}
//             >
//               Accordion Item #2
//             </button>
//           </h2>
//           <div
//             id="collapseTwo"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body">
//               <strong>This is the second item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classNamees that we use to style each element. These classNamees
//               control the overall appearance, as well as the showing and hiding
//               via CSS transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseThree"
//               aria-expanded="false"
//               aria-controls="collapseThree"
//               style={mybtnStyle}
//             >
//               Accordion Item #3
//             </button>
//           </h2>
//           <div
//             id="collapseThree"
//             className="accordion-collapse collapse"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body">
//               <strong>This is the third item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classNamees that we use to style each element. These classNamees
//               control the overall appearance, as well as the showing and hiding
//               via CSS transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <button
//           type="button"
//           onClick={toggleStyle}
//           className="btn btn-secondary"
//         >
//           {btntext}
//         </button>
//       </div>
//     </div>
//   );
// }

