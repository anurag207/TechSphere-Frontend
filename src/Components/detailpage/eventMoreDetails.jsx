// import styles from "./eventMoreDetails.module.css";
// import useFetchEvents from "../../hooks/useFetchEvents";
// import { useParams } from "react-router-dom";
// // import { eventMoreDetailsData } from "../../constants/eventmoredetails-data";
// const EventMoreDetails = () => {
//   const { eventId } = useParams();
//   const { eventData: registrationDetails, loading, error } = useFetchEvents(eventId);

//   if (loading) return <p>Loading event details...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!registrationDetails || registrationDetails.length === 0)
//     return <p>No event details available.</p>;

//   return (
//     <div className={styles.eventmoredetails_main_container}>
//       {/* Major container of event more detail(tab menu+details section)*/}
//       <div className={styles.eventmoredetails_tab_menu}>
//         {/*Major container of tab menu(flex inside which 4 div)*/}
//         {registrationDetails.map((elem) => {
//           return (
//             <button key={elem.id} className={styles.tab_menu_item}>
//               {elem.heading}
//             </button>
//           );
//         })}
//       </div>
//       <div className={styles.eventdetails_container}>
//         {/*eligibilty, timeline, details, speaker-info*/}
//         <div
//           className={`${styles.eventdetails_item} ${styles.eventdetails_eligibility}`}
//         >
//           {/*eligibilty main container*/}
//           <h1 className={styles.elgibility_heading}>
//             {registrationDetails[0].heading}
//           </h1>
//           <div className={styles.elgibility_text_container}> {/*FLEX container for eligibilty+ eligiblity text*/}
//           {registrationDetails[0].text.map((elem, idx) => {
//             return (
//             <span key={idx} className={styles.elgibility_text}>{elem}</span>
//           );
//           })}
//           </div>
//         </div>
//         <div
//           className={`${styles.eventdetails_item} ${styles.eventdetails_timeline}`}   /*FLEX column contianing timeline,day1,day2,day3*/
//         >
//           {/*timeline main container*/}
//           <h1 className={styles.timeline_heading}>
//             {registrationDetails[1].heading}
//           </h1>
//           {registrationDetails[1].days.map((elem, idx) => {
//             return (
//               <div key={idx} className={styles.timeline_days_container}> {/* Flex Container of days having day title and its text(time) */}
//                 <h3 key={idx}>{Object.keys(elem)[0]}</h3>
//                 {Object.values(elem)[0].map((arr, idx) => {
//                   return <h3 key={idx}>{arr}</h3>;
//                 })}
//                 {/* <h3 key={idx}>{Object.values(elem)[0]}</h3>  */}
//                 </div>
//             );
//           })}
//         </div>
//         <div
//           className={`${styles.eventdetails_item} ${styles.eventdetails_details}`} /*FLEX column contianing details+details text*/
//         >
//           {/*details main container*/}
//           <h1 className={styles.details_heading}>
//             {registrationDetails[2].heading}
//           </h1>
//           {registrationDetails[2].text.map((elem, idx) => {
//             return (
//               <div key={idx} className={styles.details_text_container}> {/* Flex Container of days having day title and its text(time) */}
//                 <h3 key={idx}>{Object.keys(elem)[0]}</h3>
//                 <div key={idx} className={styles.details_subtext_container}> {/* Container of subtext all text bullet points*/}
//                 {Object.values(elem)[0].map((arr, idx) => {
//                   return (
//                   <p key={idx}>{arr}</p>
//                   );
//                 })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div
//           className={`${styles.eventdetails_item} ${styles.eventdetails_speaker_info}`}
//         >
//           {/*speakerinfo main container*/}
//           <h1 className={styles.speaker_info_heading}>
//             {registrationDetails[3].heading}
//           </h1>
//           <img src={registrationDetails[3].imgSrc} />
//           <div className={styles.speakerinfo_text_container}>
//           <h3 className={styles.speaker_info_title}>{registrationDetails[3].title}</h3>
//           <p>{registrationDetails[3].subTitle}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default EventMoreDetails;


// import styles from "./eventMoreDetails.module.css";
// import useFetchEvents from "../../hooks/useFetchEvents";
// import { useParams } from "react-router-dom";

// const EventMoreDetails = ({ details }) => {
//   if (!details) return null;
//   // const { eventId } = useParams();
//   // const { eventData: registrationDetails, loading, error } = useFetchEvents(eventId);

//   // if (loading) return <p>Loading event details...</p>;
//   // if (error) return <p>Error: {error}</p>;
//   // if (!registrationDetails || registrationDetails.length === 0)
//   //   return <p>No event details available.</p>;

//   return (
//     <div className={styles.eventmoredetails_main_container}>
//       {/* Tab Menu */}
//       <div className={styles.eventmoredetails_tab_menu}>
//         {(details ?? []).map((elem) => (
//           <button key={elem?._id || elem?.heading || Math.random()} className={styles.tab_menu_item}>
//             {elem?.heading ?? "No Heading"}
//           </button>
//         ))}
//       </div>

//       <div className={styles.eventdetails_container}>
//         {/* Eligibility */}
//         {details?.[0] && (
//           <div className={`${styles.eventdetails_item} ${styles.eventdetails_eligibility}`}>
//             <h1 className={styles.elgibility_heading}>{details?.[0]?.heading ?? "Eligibility"}</h1>
//             <div className={styles.elgibility_text_container}>
//               {(details?.[0]?.text ?? ["No information available"]).map((elem, idx) => (
//                 <span key={idx} className={styles.elgibility_text}>{elem}</span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Timeline */}
//         {details?.[1] && (
//           <div className={`${styles.eventdetails_item} ${styles.eventdetails_timeline}`}>
//             <h1 className={styles.timeline_heading}>{details?.[1]?.heading ?? "Timeline"}</h1>
//             {(details?.[1]?.days ?? []).map((elem, idx) => (
//               <div key={idx} className={styles.timeline_days_container}>
//                 <h3>{Object.keys(elem ?? {})?.[0] ?? "No Day Info"}</h3>
//                 {(Object.values(elem ?? {})?.[0] ?? ["No Time Available"]).map((arr, idx) => (
//                   <h3 key={idx}>{arr}</h3>
//                 ))}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Details */}
//         {details?.[2] && (
//           <div className={`${styles.eventdetails_item} ${styles.eventdetails_details}`}>
//             <h1 className={styles.details_heading}>{details?.[2]?.heading ?? "Details"}</h1>
//             {(details?.[2]?.text ?? []).map((elem, idx) => (
//               <div key={idx} className={styles.details_text_container}>
//                 <h3>{Object.keys(elem ?? {})?.[0] ?? "No Detail Title"}</h3>
//                 <div className={styles.details_subtext_container}>
//                   {(Object.values(elem ?? {})?.[0] ?? ["No Details Available"]).map((arr, idx) => (
//                     <p key={idx}>{arr}</p>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Speaker Info */}
//         {details?.[3] && (
//           <div className={`${styles.eventdetails_item} ${styles.eventdetails_speaker_info}`}>
//             <h1 className={styles.speaker_info_heading}>{details?.[3]?.heading ?? "Speaker Information"}</h1>
//             <img src={details?.[3]?.imgSrc ?? "/default-image.jpg"} alt="Speaker" />
//             <div className={styles.speakerinfo_text_container}>
//               <h3 className={styles.speaker_info_title}>{details?.[3]?.title ?? "No Title"}</h3>
//               <p>{details?.[3]?.subTitle ?? "No Information Available"}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventMoreDetails;



// import styles from "./eventMoreDetails.module.css";

// const EventMoreDetails = ({ details }) => {
//   if (!details) return null;

//   return (
//     <div className={styles.eventmoredetails_main_container}>
//      {/* Major container of event more detail(tab menu+details section)*/}
//       <div className={styles.eventmoredetails_tab_menu}>
//          {/*Major container of tab menu(flex inside which 4 div)*/}
//         {(details ?? []).map((elem) => (
//           <button key={elem?._id || elem?.heading || Math.random()} className={styles.tab_menu_item}>
//             {elem?.heading ?? "No Heading"}
//           </button>
//         ))}
//       </div>

//       <div className={styles.eventdetails_container}>
//       {/*eligibilty, timeline, details, speaker-info*/}
//         {details?.[0] && (
//           <div className={`${styles.eventdetails_item} ${styles.eventdetails_eligibility}`}>
//               {/*eligibilty main container*/}
//             <h1 className={styles.elgibility_heading}>{details?.[0]?.heading ?? "Eligibility"}</h1>
//             <div className={styles.elgibility_text_container}>
//               {(Array.isArray(details?.[0]?.text) ? details?.[0]?.text : ["No information available"]).map((elem, idx) => (
//                 <span key={idx} className={styles.elgibility_text}>{elem}</span>
//               ))}
//             </div>
//           </div>
//         )}

//         {details?.[1] && (
//           <div className={`${styles.eventdetails_item} ${styles.eventdetails_timeline}`}>  {/*FLEX column contianing timeline,day1,day2,day3*/}
//           {/*timeline main container*/}
//             <h1 className={styles.timeline_heading}>{details?.[1]?.heading ?? "Timeline"}</h1>
//             {(Array.isArray(details?.[1]?.days) ? details?.[1]?.days : []).map((elem, idx) => {
//               const dayTitle = Object.keys(elem ?? {})?.[0] ?? "No Day Info";
//               const dayTimes = Array.isArray(Object.values(elem ?? {})?.[0])
//                 ? Object.values(elem ?? {})?.[0]
//                 : ["No Time Available"];

//               return (
//                 <div key={idx} className={styles.timeline_days_container}> {/* Flex Container of days having day title and its text(time) */}
//                   <h3>{dayTitle}</h3>
//                   {dayTimes.map((time, idx) => (
//                     <h3 key={idx}>{time}</h3>
//                   ))}
//                 </div>
//               );
//             })}
//           </div>
//         )}

       
//         {details?.[2] && (
//           <div className={`${styles.eventdetails_item} ${styles.eventdetails_details}`}> {/*FLEX column contianing details+details text*/}
//             {/*details main container*/}
//             <h1 className={styles.details_heading}>{details?.[2]?.heading ?? "Details"}</h1>
//             {(Array.isArray(details?.[2]?.text) ? details?.[2]?.text : []).map((elem, idx) => {
//               const detailTitle = Object.keys(elem ?? {})?.[0] ?? "No Detail Title";
//               const detailContent = Array.isArray(Object.values(elem ?? {})?.[0])
//                 ? Object.values(elem ?? {})?.[0]
//                 : ["No Details Available"];

//               return (
//                 <div key={idx} className={styles.details_text_container}>
//                   <h3>{detailTitle}</h3>
//                   <div className={styles.details_subtext_container}>
//                     {detailContent.map((text, idx) => (
//                       <p key={idx}>{text}</p>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {details?.[3] && (
//           <div className={`${styles.eventdetails_item} ${styles.eventdetails_speaker_info}`}>
//               {/*speakerinfo main container*/}
//             <h1 className={styles.speaker_info_heading}>{details?.[3]?.heading ?? "Speaker Information"}</h1>
//             <img src={details?.[3]?.imgSrc ?? "/default-image.jpg"} alt="Speaker" />
//             <div className={styles.speakerinfo_text_container}>
//               <h3 className={styles.speaker_info_title}>{details?.[3]?.title ?? "No Title"}</h3>
//               <p>{details?.[3]?.subTitle ?? "No Information Available"}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventMoreDetails;


import { useRef } from "react";
import styles from "./eventMoreDetails.module.css";

const EventMoreDetails = ({ details }) => {
  if (!details) return null;

  // Store refs for each section
  const sectionRefs = useRef(details.reduce((acc, elem) => {
    acc[elem?.heading] = null;
    return acc;
  }, {}));

  // Scroll to the respective section when a tab is clicked
  const handleTabClick = (heading) => {
    const ref = sectionRefs.current[heading];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.eventmoredetails_main_container}>
      {/* Tab Menu */}
      <div className={styles.eventmoredetails_tab_menu}>
        {details.map((elem) => (
          <button
            key={elem?._id || elem?.heading || Math.random()}
            className={styles.tab_menu_item}
            onClick={() => handleTabClick(elem?.heading)}
          >
            {elem?.heading ?? "No Heading"}
          </button>
        ))}
      </div>

      {/* Event Details Container */}
      <div className={styles.eventdetails_container}>
        {/* Eligibility Section */}
        {details?.[0] && (
          <div
            ref={(el) => (sectionRefs.current[details[0]?.heading] = el)}
            className={`${styles.eventdetails_item} ${styles.eventdetails_eligibility}`}
          >
            <h1 className={styles.elgibility_heading}>{details?.[0]?.heading ?? "Eligibility"}</h1>
            <div className={styles.elgibility_text_container}>
              {(Array.isArray(details?.[0]?.text) ? details?.[0]?.text : ["No information available"]).map((elem, idx) => (
                <span key={idx} className={styles.elgibility_text}>{elem}</span>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Section */}
        {details?.[1] && (
          <div
            ref={(el) => (sectionRefs.current[details[1]?.heading] = el)}
            className={`${styles.eventdetails_item} ${styles.eventdetails_timeline}`}
          >
            <h1 className={styles.timeline_heading}>{details?.[1]?.heading ?? "Timeline"}</h1>
            {(Array.isArray(details?.[1]?.days) ? details?.[1]?.days : []).map((elem, idx) => {
              const dayTitle = Object.keys(elem ?? {})?.[0] ?? "No Day Info";
              const dayTimes = Array.isArray(Object.values(elem ?? {})?.[0])
                ? Object.values(elem ?? {})?.[0]
                : ["No Time Available"];

              return (
                <div key={idx} className={styles.timeline_days_container}>
                  <h3>{dayTitle}</h3>
                  {dayTimes.map((time, idx) => (
                    <h3 key={idx}>{time}</h3>
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {/* Details Section */}
        {details?.[2] && (
          <div
            ref={(el) => (sectionRefs.current[details[2]?.heading] = el)}
            className={`${styles.eventdetails_item} ${styles.eventdetails_details}`}
          >
            <h1 className={styles.details_heading}>{details?.[2]?.heading ?? "Details"}</h1>
            {(Array.isArray(details?.[2]?.text) ? details?.[2]?.text : []).map((elem, idx) => {
              const detailTitle = Object.keys(elem ?? {})?.[0] ?? "No Detail Title";
              const detailContent = Array.isArray(Object.values(elem ?? {})?.[0])
                ? Object.values(elem ?? {})?.[0]
                : ["No Details Available"];

              return (
                <div key={idx} className={styles.details_text_container}>
                  <h3>{detailTitle}</h3>
                  <div className={styles.details_subtext_container}>
                    {detailContent.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Speaker Info Section */}
        {details?.[3] && (
          <div
            ref={(el) => (sectionRefs.current[details[3]?.heading] = el)}
            className={`${styles.eventdetails_item} ${styles.eventdetails_speaker_info}`}
          >
            <h1 className={styles.speaker_info_heading}>{details?.[3]?.heading ?? "Speaker Information"}</h1>
            <img src={details?.[3]?.imgSrc ?? "/default-image.jpg"} alt="Speaker" />
            <div className={styles.speakerinfo_text_container}>
              <h3 className={styles.speaker_info_title}>{details?.[3]?.title ?? "No Title"}</h3>
              <p>{details?.[3]?.subTitle ?? "No Information Available"}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventMoreDetails;
