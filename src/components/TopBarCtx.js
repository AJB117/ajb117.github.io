import { createContext } from "react"

const topBarCtx = createContext({ isInBlog: false, setIsInBlog: () => {} })

export default topBarCtx
