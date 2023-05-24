import satData from "./satData";

const Buttons = ({setSat, displaySats}) => {
  return (
    <div>
      {displaySats.map((sat, id)=>{
        return(
          <button key={id}>{sat} Orbit</button>
        );
      })}

      <button onClick={()=>setSat(satData)}
      >All Orbits</button>
    </div>
  );
};

export default Buttons;
