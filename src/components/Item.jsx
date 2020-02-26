import { h } from 'preact';


const liStyle = {
  display: 'flex',
  padding: '1rem 1.5rem',
  'background-color': 'white',
  margin: "1rem 0rem",
  'align-items': "center"
};

const figStyle = {
  display: "flex",
  height: "100px",
  width: "100px",
  border: "3px solid red",
  "align-items": "center"
};


const imageStyle = {
  width: "100%"
};

export default function Item({children, ...props}) {
  return(
    <li style={liStyle}>
        <div>
          <figure style={figStyle}>
            <img src={props.src} style={imageStyle} />
          </figure>
        </div>
        <div>
          <h2>{props.alt ? props.alt : "No Alt provided for this Image"}</h2>
        </div>
    </li>
  )
}

