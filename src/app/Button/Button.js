function Button(props) {
  return (
    <button className={`bg-${props.background} py-4 px-5 rounded-xl text-${props.color} font-bold text-xl`}>
    Create a teacher profile for free
  </button>
  )
}

export default Button