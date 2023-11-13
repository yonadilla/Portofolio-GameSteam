import React, { useCallback, useRef, useState } from 'react'
import useEventListener from './useEventListener'

export default function useLeftRight({defaultValue}) {
    const [value, setValue] = useState(defaultValue)
    const lefRighFocus = useRef([])
    const pointerRef = useRef(0)

    useEventListener("keydown", e => {
        switch (e.key) {
            case "ArrowLeft":
                back()
                break;
            case "ArrowRight":
                forward()
                break;
            default:
                break;
        }
    })

    const back = useCallback(() => {
        if (pointerRef.current <= 0) return
        pointerRef.current--
        setValue(lefRighFocus.current[pointerRef.current])
      }, [])
    
      const forward = useCallback(() => {
        if (pointerRef.current >= lefRighFocus.current.length - 1) return
        pointerRef.current++
        setValue(lefRighFocus.current[pointerRef.current])
      }, [])
      
      if (lefRighFocus.current[pointerRef.current]){
        lefRighFocus.current[pointerRef.current ].focus()
      }
  return {
    lefRighFocus, value, setValue, pointerRef
  }
}
