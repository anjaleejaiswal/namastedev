import {useState} from "react";
import { AccordionData } from "./Config";

const Section = ({title, description, isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2 ">
            <h3 className="text-xl font-bold">{title}</h3>
            {!isVisible ? 
             <button className="p-2 underline" onClick={() => setIsVisible(true) }>Show</button> :
            <button className="p-2 underline" onClick={() => setIsVisible(false) }>Hide</button> 
            }
            {isVisible && <p className="text-sm">{description}</p>}
        </div>
    )
}

const InstaMart = () => {
    const [visibleSection, isVisibleSection] = useState("about")
    return (
        <div>
            <h1 className="text-2xl font-bold p-2 m-2">InstaMart</h1>
            {AccordionData.map((item) => 
                <Section 
                    title={item.title} 
                    description = {item.description}
                    isVisible= {visibleSection.toLowerCase() === item.title.toLowerCase() }
                    setIsVisible = {(e)=>{e ? isVisibleSection(item.title.toLowerCase()) : isVisibleSection("")}}
                />
            
            )}
            {/* <Section 
                title="About" 
                description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." 
                isVisible= {visibleSection === "about"}
                setIsVisible = {(e)=>{e ? isVisibleSection("about") : isVisibleSection("")}}
            />

            <Section 
                title="Details" 
                description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." 
                isVisible= {visibleSection === "details"}
                setIsVisible =  {(e)=>{e ? isVisibleSection("details") : isVisibleSection("")}}
            />

            <Section 
                title="Teams" 
                description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." 
                isVisible= {visibleSection === "teams"}
                setIsVisible =  {(e)=>{e ? isVisibleSection("teams") : isVisibleSection("")}}
            /> */}

            {/* <AboutInstamart />
            <DetailsInstamart />
            <TeamsInstamart />
            <CareersInstamart /> */}
        </div>
    )

}

export default InstaMart;