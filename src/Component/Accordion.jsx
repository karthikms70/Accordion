import { useState } from "react";
import "./accordion.css"
 const data = [
    {
        id :1,
        question : "Question 1",
        answer : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id :2,
        question : "Question 2",
        answer : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id :3,
        question : "Question 3",
        answer : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id :4,
        question : "Question 4",
        answer : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
]

const Accordion = () => {
    const [ide,setIde] = useState(null)
    
    const Toggle =(id) =>{
        setIde(ide === id ? null : id);
        //setIde(id)
        
        
        
       
    }


    return (
     <>
       { data.map((pre,index) =>
       <>
        <div className="all">
            <div className="main" onClick={() =>Toggle(index)}>
                <section className="head">{pre.question}</section>
                <section className="btn"  >{ide === index ? "-" : "+"}</section>
            </div>
            <div className="new">
            { ide === index && (
                    <p  className="para">{pre.answer}</p>
            ) }
            </div>
        </div>
       </>
       
       )}
       
    </>
    )
}

export default Accordion