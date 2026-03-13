import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
Github,
Linkedin,
Database,
Server,
Cpu,
Code,
Cloud,
Terminal,
ExternalLink
} from "lucide-react"

/* -------------------- CAROUSEL COMPONENT -------------------- */

function Carousel({items,type}){

const [index,setIndex]=useState(0)
const [expanded,setExpanded]=useState(null)

return(

<div className="relative flex justify-center items-center h-[500px]">

<button
onClick={()=>setIndex((index-1+items.length)%items.length)}
className="absolute left-0 text-gray-400 text-2xl"
>
←
</button>

{items.map((item,i)=>{

const offset = (i - index + items.length) % items.length
const position = offset > items.length / 2 ? offset - items.length : offset
const active= position===0
const open=expanded===i

return(

<motion.div
layout
key={i}
drag="x"
dragConstraints={{left:0,right:0}}
dragElastic={0.2}
dragMomentum={true}
onClick={()=>setExpanded(open?null:i)}
animate={{
x: position * 420,
scale: position === 0 ? 1 : 0.82,
opacity: position === 0 ? 1 : 0.45
}}
transition={{
type: "spring",
stiffness: 90,
damping: 20,
mass: 1
}}
className="absolute w-[380px] bg-[#1f2937] border border-white/10 rounded-xl p-6 shadow-xl cursor-pointer"
>

{type==="cert" && (
<img src={item.img} className="rounded-lg mb-4"/>
)}

<h3 className="text-xl font-semibold">{item.title}</h3>

<p className="text-gray-400">{item.company || item.org}</p>

<p className="text-gray-500 text-sm">{item.period}</p>

{item.summary && (
<p className="mt-3 text-gray-300">{item.summary}</p>
)}

{open && item.details && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="mt-4"
>

<ul className="space-y-2 text-sm text-gray-300">

{item.details.map((d,i)=>(
<li key={i}>• {d}</li>
))}

</ul>

{item.link && (
<a
href={item.link}
target="_blank"
className="inline-flex items-center gap-2 mt-4 text-indigo-400"
>
View Project <ExternalLink size={16}/>
</a>
)}

</motion.div>

)}

{type==="cert" && item.link && (

<a
href={item.link}
target="_blank"
className="inline-flex items-center gap-2 mt-3 text-indigo-400"
>
View Certificate <ExternalLink size={16}/>
</a>

)}

</motion.div>

)

})}

<button
onClick={()=>setIndex((index+1)%items.length)}
className="absolute right-0 text-gray-400 text-2xl"
>
→
</button>

</div>

)

}

/* -------------------- MAIN APP -------------------- */

export default function App(){

const scrollToFooter=()=>{
document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
}

/* -------------------- DATA -------------------- */

const internships=[

{
title:"Data Engineer Intern",
company:"Southern Endocrinology & Diabetes Associates",
period:"Dallas, TX • Jul 2025 – Aug 2025",
summary:"Built scalable healthcare data pipelines replacing manual patient search workflows.",
details:[
"Built automated ETL pipeline using Apache Airflow and Docker eliminating manual patient lookup workflows and saving over 10 staff hours weekly.",
"Designed denormalized PostgreSQL schema with optimized indexes enabling fast research queries across clinical datasets.",
"Ingested semi-structured FHIR JSON from eClinicalWorks API and orchestrated secure ingestion into AWS S3.",
"Implemented Python validation pipelines preventing duplicate records and ensuring healthcare data integrity.",
"Collaborated with research coordinators to build SQL views reducing patient eligibility screening time by 40%."
]
},

{
title:"Engineering Intern",
company:"Honeywell Technologies",
period:"Bengaluru • Jan 2023 – Jun 2023",
summary:"Built diagnostic platform improving IoT device monitoring efficiency.",
details:[
"Developed Integration Framework Diagnostic Tool enabling real-time Azure IoT Hub device monitoring.",
"Implemented scalable CRUD architecture using React frontend and C#/.NET backend.",
"Built event-driven automation pipelines using Azure Functions and Event Grid.",
"Reduced diagnostic processing time by 30% improving IoT maintenance workflows."
]
}

]

const projects=[

{
title:"CRO Finder",
summary:"AI-powered platform connecting pharmaceutical sponsors with CRO partners.",
link:"https://cro-finder.vercel.app/",
details:[
"Designed semantic search engine using vector embeddings to match clinical trial requirements with CRO capabilities.",
"Built full stack architecture using Next.js, Supabase and pgvector.",
"Implemented ranking algorithms evaluating CRO expertise and operational capacity.",
"Deployed as a SaaS prototype demonstrating AI-driven vendor discovery."
]
},

{
title:"Real-Time Graph Processing Pipeline",
summary:"Distributed graph analytics system for NYC taxi trip data.",
details:[
"Built graph analytics pipeline using Neo4j and Docker modeling NYC taxi relationships.",
"Implemented PageRank and BFS algorithms to analyze node centrality and shortest paths.",
"Developed distributed streaming pipeline using Kafka and Kafka Connect.",
"Deployed infrastructure on Kubernetes (Minikube) enabling real-time ingestion of 1500+ trip events."
]
},

{
title:"CRM Application",
summary:"Full-stack CRM platform for textile business operations.",
details:[
"Developed CRM system managing customer profiles, purchase history and textile preferences.",
"Built management dashboard enabling centralized monitoring of customer interactions.",
"Implemented CRUD APIs supporting contact management and campaign tracking.",
"Enabled communication history and feedback workflows improving customer engagement."
]
}

]

const certifications=[

{
title:"Database Structures and Management with MySQL",
org:"Meta",
img:"/certs/meta_mysql.png",
link:"https://www.coursera.org/account/accomplishments/verify/X7MGMNU6AALK"
},

{
title:"Artificial Intelligence Foundations",
org:"NASSCOM",
img:"/certs/ai-foundation.png"
},

{
title:"Full Stack Developer Program",
org:"GUVI",
img:"/certs/guvi.png"
}

]

/* -------------------- UI -------------------- */

return(

<div className="bg-[#0f172a] text-gray-200 min-h-screen">

{/* HERO */}

<section className="max-w-6xl mx-auto px-6 py-32">

<h1 className="text-6xl font-bold">Amar Dodda</h1>

<p className="mt-6 text-gray-400 max-w-xl">
Software Engineer building scalable systems,
AI platforms and real-time data pipelines.
</p>

<p className="mt-3 text-gray-500">
Graduating May 2026 • GPA 4.0
</p>

</section>

{/* EXPERIENCE */}

<section className="max-w-6xl mx-auto px-6 mb-36">

<h2 className="text-sm uppercase tracking-widest text-gray-400 mb-12">
Professional Experience
</h2>

<Carousel items={internships}/>

</section>

{/* PROJECTS */}

<section className="max-w-6xl mx-auto px-6 mb-36">

<h2 className="text-sm uppercase tracking-widest text-gray-400 mb-12">
Projects
</h2>

<Carousel items={projects}/>

</section>

{/* CERTIFICATIONS */}

<section className="max-w-6xl mx-auto px-6 mb-36">

<h2 className="text-sm uppercase tracking-widest text-gray-400 mb-12">
Certifications
</h2>

<Carousel items={certifications} type="cert"/>

</section>

{/* FOOTER */}

<footer id="contact" className="text-center border-t border-white/10 py-16">

<p className="text-gray-400">Want to know better?</p>

<div className="flex justify-center gap-8 mt-6">

<a href="https://github.com/AmarDodda">
<Github/>
</a>

<a href="https://linkedin.com/in/amar-dodda-128619216">
<Linkedin/>
</a>

</div>

</footer>

</div>

)

}