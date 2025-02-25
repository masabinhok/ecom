

const Stopwatch = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-7 text-xs">
        <p>Days</p>
        <span></span>
        <p>Hours</p>
        <span></span>
        <p>Minutes</p>
        <span></span>
        <p>Seconds</p>
      </div>
      <div className="grid grid-cols-7 text-3xl font-semibold ">
        <p>03</p>
        <span className="text-brand">:</span>
        <p>13</p>
        <span className="text-brand">:</span>
        <p>49</p>
        <span className="text-brand">:</span>
        <p>24</p>
      </div>
    </div>
  )
}

export default Stopwatch