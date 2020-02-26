
import { h, render } from 'preact';
import Item  from "../components/Item";

function DevTools({ children, ...props }){
    return(
      <div style="color:black">
        <h1>Juno - Image Auditor {props["images"].length}</h1>
        {props["images"].length > 0 ?  
        <ul>
          {props["images"].map((element, index) => (
            <Item src={element.src} alt={element.alt}/>
          ))}
        </ul>
      : <p>Refresha</p>
      
      }
       
      </div>
    );

    
}

export default DevTools;
