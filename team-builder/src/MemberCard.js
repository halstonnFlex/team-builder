import React from 'react'

const MemberCard=props=>{
    return(
        <div>
            {props.memberlist.map((member,index)=>{
                return (
                    <>
                        <p>{member.name}</p>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </>
                )
            })}
        </div>
    )
}
export default MemberCard;