// import React, { useRef } from 'react'

// type Props = {}

// const Component = (props: Props) => {
//     // declaration
//     const inputRef = useRef<HTMLInputElement | null>(null)

//     // side-effect
//     useEffect(() => {
//         inputRef.current.focus()
//     }, [])
//     return (
//         <div>

//             <input
//                 type="text"
//                 ref={(element) => {
//                     inputRef.current = element
//                 }}
//             />

//         </div>
//     )
// }

// export default Component