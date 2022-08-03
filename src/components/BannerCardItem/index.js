import './index.css'

const Banner = props => {
  const {details} = props
  const {headerText, description, className} = details

  return (
    <li className={className}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
