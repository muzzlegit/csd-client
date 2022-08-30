
export default function FusesCurrent({fuses}) {

  return(
    <ul>
      { fuses.map((fuse) => {
        return (
          <li key={`fuse${fuse.step}`}>  
            {fuse.current}
          </li>
        )
      })}
    </ul>
  )
}