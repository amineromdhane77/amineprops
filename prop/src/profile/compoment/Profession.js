import React from "react";
const Profession=(prop2)=>{
    return(
        <>
        <div style={{backgroundColor:'blue', padding:'10px', width:'50vw'}}>
        <h1>{prop2.title}</h1>
        <h2>{prop2.title1}</h2>
        <h3>{prop2.paragraphe1}</h3>
        <h2>{prop2.title2}</h2>
        <h3>{prop2.paragraphe2}</h3>
        <h2>{prop2.title3}</h2>
        <h3>{prop2.paragraphe3}</h3>
        </div>

        </>
    )

}
export default Profession;