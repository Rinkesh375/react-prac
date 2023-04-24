const Avatar = ({userDetails}) => {
console.log(userDetails.rounded)
  return (
    <div >
    <img style={{borderRadius:userDetails.rounded?"50%":"1rem",border:"2px solid red"}} src={userDetails.image} alt={userDetails.name} />
    {!userDetails.hideName?<h1>{userDetails.name}</h1>:""}
    </div>
  )

}

export default Avatar