// import Card from './card.js';
// import './slider.css';
// export default function Slider(){



//     const user1 = {
//         name : "Amit" ,
//         image : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" ,
//         designation : "Graphic Designer",
//         description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
//       }
      
//       const user2 = {
//         name : "Ruhi" ,
//         image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
//         description : "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands,  plays,and other types of music groups." ,
//         designation : "Singer"
//       }
      
          
//     return(
//         <>
//         <div className='cardCarousal'>
//             {/* <button>&lt</button>
//             <button>&gt</button> */}

//             <div className='cardContainer'>
//             <Card user={user1} />
//           <Card user={user2}/>
//           <Card user={user1}/>
//           <Card user={user2}/>
//           <Card user={user1}/>
//           <Card user={user2}/>
//           <Card user={user1}/>
//           <Card user={user2}/>
//           <Card user={user1}/>
//           <Card user={user1}/>
//           <Card user={user1}/>
//             </div>
//         </div>
//         </>
//     )
// }



import styles from './slider.module.css';
let Profile = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Vikrant Kumar",
        profession: "Software Engineer",
        experience: "2 year exp"
    },

    {
        id: 2,
        src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Neha Rajbhar",
        profession: "Full Stack developer",
        experience: "8 year exp"
    },

    {
        id: 3,
        src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Ankush Rai",
        profession: "Hr recruiter",
        experience: "7 year exp"
    },

    {
        id: 4,
        src: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Abhishek Bhaskar",
        profession: "DSA Specialist",
        experience: "6 year exp"
    },

    {
        id: 5,
        src: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Tasmin Ansari",
        profession: "Design Enginner",
        experience: "5 year exp"
    },

    {
        id: 1,
        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Vikrant Kumar",
        profession: "Software Engineer",
        experience: "2 year exp"
    },

    {
        id: 2,
        src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Neha Rajbhar",
        profession: "Full Stack developer",
        experience: "8 year exp"
    },

    {
        id: 3,
        src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Ankush Rai",
        profession: "Hr recruiter",
        experience: "7 year exp"
    },

    {
        id: 4,
        src: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Abhishek Bhaskar",
        profession: "DSA Specialist",
        experience: "6 year exp"
    },

    {
        id: 5,
        src: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Tasmin Ansari",
        profession: "Design Enginner",
        experience: "5 year exp"
    },

    {
        id: 1,
        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Vikrant Kumar",
        profession: "Software Engineer",
        experience: "2 year exp"
    },

    {
        id: 2,
        src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Neha Rajbhar",
        profession: "Full Stack developer",
        experience: "8 year exp"
    },

    {
        id: 3,
        src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Ankush Rai",
        profession: "Hr recruiter",
        experience: "7 year exp"
    },

    {
        id: 4,
        src: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Abhishek Bhaskar",
        profession: "DSA Specialist",
        experience: "6 year exp"
    },

    {
        id: 5,
        src: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Tasmin Ansari",
        profession: "Design Enginner",
        experience: "5 year exp"
    },

    {
        id: 6,
        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Vikrant Kumar",
        profession: "Software Engineer",
        experience: "2 year exp"
    },

    {
        id: 7,
        src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Neha Rajbhar",
        profession: "Full Stack developer",
        experience: "8 year exp"
    },

    {
        id: 8,
        src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Ankush Rai",
        profession: "Hr recruiter",
        experience: "7 year exp"
    },

    {
        id: 9,
        src: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Abhishek Bhaskar",
        profession: "DSA Specialist",
        experience: "6 year exp"
    },

    {
        id: 10,
        src: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Tasmin Ansari",
        profession: "Design Enginner",
        experience: "5 year exp"
    }

];

const ScrollerImg = () => (
    <>
        <div className={styles.title}>
            <p>Horizontal scroller</p>
        </div>
        <div className={styles.header}>
            <h1>Know your mentors</h1>
            <p>Works with amentor (senior data scientists from top companies) who closely looks your progress,give you personalizied<br /> feed back amd helps in your knowledge</p>
        </div>

        <div className={styles.imagescroller}>
            <p></p>
            {
                Profile.map((data) => (
                    <div key={data.id} className={styles.imagecard}>
                        <div className={styles.imagewrapper}>
                            <img src={data.src} alt={data.name} className={styles.imageround} />
                        </div>
                        <div className={styles.imagedetails}>
                            <h5>{data.name}</h5>
                            <h6>{data.profession}</h6>
                            <span>{data.experience}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
)

export default ScrollerImg;
