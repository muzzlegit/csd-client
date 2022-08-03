
import getFuseCurrent from "../../helpers/getFuseCurrent"

export default function FusesCurrent({capacitors, capacitorCoefficient}) {

  return(
    <ul>
      { capacitors.map((capacitor) => {
        return (
          <li key={`fuse${capacitor.step}`}>  
            {getFuseCurrent(capacitor.current, capacitorCoefficient)}
          </li>
        )
      })}
    </ul>
  )

}