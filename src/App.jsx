import { useState } from "react"
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

/* -------------------- CAROUSEL -------------------- */

function Carousel({items,type}){

const [index,setIndex]=useState(0)
const [expanded,setExpanded]=useState(null)

return(

<div className="relative flex justify-center items-center h-[520px]">

<button
onClick={()=>setIndex((index-1+items.length)%items.length)}
className="absolute left-0 text-gray-400 text-2xl"
>
←
</button>

{items.map((item,i)=>{

const offset=(i-index+items.length)%items.length
const position=offset>items.length/2?offset-items.length:offset
const active=position===0
const open=expanded===i

return(

<motion.div
layout
key={i}
drag="x"
dragConstraints={{left:0,right:0}}
dragElastic={0.2}
dragMomentum
onClick={()=>setExpanded(open?null:i)}
animate={{
x:position*420,
scale:active?1:0.82,
opacity:active?1:0.45
}}
transition={{type:"spring",stiffness:90,damping:20}}
className="absolute w-[380px] bg-[#1f2937] border border-white/10 rounded-xl p-6 shadow-xl cursor-pointer"
>

{type==="cert" && (
<img src={item.img} className="rounded-lg mb-4"/>
)}

<h3 className="text-xl font-semibold">{item.title}</h3>

<p className="text-gray-400">{item.company||item.org}</p>

<p className="text-gray-500 text-sm">{item.period}</p>

{item.summary && (
<p className="mt-3 text-gray-300">{item.summary}</p>
)}

{open && item.details && (

<motion.div initial={{opacity:0}} animate={{opacity:1}} className="mt-4">

<ul className="space-y-2 text-sm text-gray-300">
{item.details.map((d,i)=>(
<li key={i}>• {d}</li>
))}
</ul>

{item.link && (
<a href={item.link} target="_blank"
className="inline-flex items-center gap-2 mt-4 text-indigo-400">
View Project <ExternalLink size={16}/>
</a>
)}

</motion.div>

)}

{type==="cert" && item.link && (
<a href={item.link} target="_blank"
className="inline-flex items-center gap-2 mt-3 text-indigo-400">
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

/* -------------------- APP -------------------- */

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
summary:"Built healthcare ETL pipelines replacing manual research workflows.",
details:[
"Built Airflow pipeline saving 10+ hours weekly.",
"Designed optimized PostgreSQL schema.",
"Ingested FHIR JSON from eClinicalWorks.",
"Implemented validation pipelines preventing duplicates.",
"Reduced patient screening time by 40%."
]
},

{
title:"Engineering Intern",
company:"Honeywell Technologies",
period:"Bengaluru • Jan 2023 – Jun 2023",
summary:"Developed IoT diagnostic platform.",
details:[
"Built Azure IoT monitoring tool.",
"React + C# architecture.",
"Event pipelines with Azure Functions.",
"Reduced diagnostic time by 30%."
]
}

]

const projects=[

{
title:"CRO Finder",
summary:"AI platform connecting pharma sponsors with CRO partners.",
link:"https://cro-finder.vercel.app/",
details:[
"Vector embedding semantic search.",
"Next.js + Supabase + pgvector.",
"CRO ranking algorithm.",
"AI vendor discovery platform."
]
},

{
title:"Real-Time Graph Processing Pipeline",
summary:"Graph analytics system for taxi data.",
details:[
"Neo4j graph pipeline.",
"PageRank + BFS algorithms.",
"Kafka streaming ingestion.",
"Kubernetes deployment."
]
},

{
title:"CRM Application",
summary:"Full-stack CRM platform.",
details:[
"Customer profiles & analytics.",
"Management dashboard.",
"CRUD APIs.",
"Customer engagement tracking."
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

const techStack=[

{icon:<Code size={22}/>,label:"Python"},
{icon:<Code size={22}/>,label:"Java"},
{icon:<Code size={22}/>,label:"C++"},
{icon:<Database size={22}/>,label:"SQL"},

{icon:<Server size={22}/>,label:"React"},
{icon:<Server size={22}/>,label:"Next.js"},
{icon:<Server size={22}/>,label:"Node.js"},
{icon:<Server size={22}/>,label:"Django"},

{icon:<Database size={22}/>,label:"PostgreSQL"},
{icon:<Database size={22}/>,label:"MongoDB"},
{icon:<Database size={22}/>,label:"Neo4j"},

{icon:<Cloud size={22}/>,label:"AWS"},
{icon:<Cpu size={22}/>,label:"Docker"},
{icon:<Cpu size={22}/>,label:"Kubernetes"},
{icon:<Cpu size={22}/>,label:"Apache Airflow"},
{icon:<Terminal size={22}/>,label:"Linux"}

]

return(

<div className="bg-[#0f172a] text-gray-200 min-h-screen">

{/* HERO */}

<section className="max-w-6xl mx-auto px-6 py-32 flex justify-between items-start">

<div>

<h1 className="text-6xl font-bold">Amar Dodda</h1>

<p className="mt-6 text-gray-400 max-w-xl">
Software Engineer building scalable systems,
AI platforms and real-time data pipelines.
</p>

<p className="mt-3 text-gray-500">
Graduating May 2026 • GPA 4.0
</p>

</div>

<div>

<button
onClick={scrollToFooter}
className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
>
Let's Talk
</button>

</div>

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

{/* TECH STACK BELOW CERTIFICATIONS */}

<section className="max-w-6xl mx-auto px-6 mb-36">

<h2 className="text-sm uppercase tracking-widest text-gray-400 mb-12">
Tech Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{techStack.map((t,i)=>(

<div
key={i}
className="flex items-center gap-3 bg-[#1f2937] px-5 py-4 rounded-lg border border-white/10"
>

<div className="text-indigo-400">
{t.icon}
</div>

<span className="text-sm text-gray-300">
{t.label}
</span>

</div>

))}

</div>

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