# Front-End Portfolio By Yon


Tujuan saya membuat project ini adalah untuk mem-push kemampuan saya sampai limit dan menggunakan pengetahuan saya yang sudah saya belajari 2 bulan lalu untuk membuat project ini. Untuk design awal saya terinspirasi dari Steam Big Pictures Mode

---
## Teknologi


- React JS
- Tailwind CSS
- React-Router-Dom
- i18next
- Framer-Motion
- Swipper Js

---

## CostumHooks


 pada Project ini saya menggunakan beberapa costum Hooks dari banyak Costum Hook yang saya dapat dari channel youtube [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) untuk link github-nya Klik [ini](https://github.com/WebDevSimplified/useful-custom-react-hooks) (Jangan lupa kasih star ya😊)




 - useEventListener
 seperti namanya Hooks ini berfungsi seperti EventListener pada umumnya dengan tambahan callback dan remove agar tidak terjadi nilai yang tak terduga

 
    ```javascript
    import { useEffect, useRef } from "react"

    export default function useEventListener(
    eventType, //Event type yang ingin di masukkan contoh "keydown"
    callback, //hal yang ingin anda lakukan dengan EvenListener
    element = window //optional parameter. default value EventListener di window
    ) {
    const callbackRef = useRef(callback)

    useEffect(() => {
    callbackRef.current = callback
    }, [callback]) //update callback ketika berubah

    useEffect(() => {
    if (element == null) return
        const handler = e => callbackRef.current(e) //simpan callback di handler
        element.addEventListener(eventType, handler)// tambah di addEventListener

    return () => element.removeEventListener(eventType, handler)
        }, [eventType, element])} //cleanup ketika informasi sudah berubah
     ```
    

    ##### Contoh Peggunan

    ```javascript
    import { useState } from "react"
    import useEventListener from "./useEventListener"

    export default function EventListenerComponent() {
    const [key, setKey] = useState("")
    useEventListener("keydown", e => {
        setKey(e.key) //callback untuk merekam key kemudian simpan di useState

    })

    return <div>Last Key: {key}</div>
    }
    ```
 - useClickOutside
    Hooks cocok untuk digunakan untuk Modal, sidebar atau sejenisnya yang click di luar ref akan melakukan sebaliknya 
    ```javascript
    import useEventListener from './useEventListener'

    export default function useClickOutside(ref, cb) {
    useEventListener(
        "click", // EventListener dari Hooks sebelumya dan menggunakan Event "Click"
        e => {
        if (ref.current == null || ref.current.contains(e.target)) return
        cb(e)// pada dasarnya ketika click di dalam ref jangan lakukan apapun dan jika tidak panggil callback-nya
        },
        document // pass parameter ke 3 yang mana menggunakan EventListener di document
    )
    }
    ```

    ##### Contoh Peggunaan 
    ```javascript

    import { useRef, useState } from "react"
    import useClickOutside from "./useClickOutside"

    export default function ClickOutsideComponent() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef() // ref untuk menetukan area yang ingin digunakan di useClilcOutside

    useClickOutside(modalRef, () => {
        if (open) // jika open true dan click di luar ref
        setOpen(false) //maka callback setOpen di panggil
    })

    return (
        <>
        <button onClick={() => setOpen(true)}>Open</button>
        <div
            ref={modalRef}
            style={{
            display: open ? "block" : "none",
            backgroundColor: "blue",
            color: "white",
            width: "100px",
            height: "100px",
            position: "absolute",
            top: "calc(50% - 50px)",
            left: "calc(50% - 50px)",
            }}
        >
            <span>Modal</span>
        </div>
        </>
    )
    }
    ```
 - useMediaQuery 
    ```javascript
    import { useState, useEffect } from "react"
    import useEventListener from "./useEventListener"

    export default function useMediaQuery(mediaQuery) {
    const [isMatch, setIsMatch] = useState(false)
    const [mediaQueryList, setMediaQueryList] = useState(null)

    useEffect(() => {
        const list = window.matchMedia(mediaQuery)
        setMediaQueryList(list)
        setIsMatch(list.matches)
    }, [mediaQuery])

    useEventListener("change", e => setIsMatch(e.matches), mediaQueryList)

    return isMatch
    }
    ```
- useStorage
    Hooks ini digunakan ketika ingin menyimpan value untuk jangka pendek atau lama 
    ```javascript
    import { useCallback, useEffect, useState } from "react";

    export  function useLocalStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.localStorage);
    }// digunakan jika ingin di simpan di localStorage

    export  function useSessionStorage(key, defaultValue) {
        return useStorage(key, defaultValue, window.sessionStorage);
    }// digunakan jika ingin di simpan di sessions storage

    function useStorage(key, defaultValue, storageObject) {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key);//useState mengakses value berdasarkan storageObject
        if (jsonValue !== null) return JSON.parse(jsonValue);// jika tidak null maka return value-nya

        //jika null cek apakah defaultValue == "function" jika true maka menggunakan defaultValue 
        if (typeof defaultValue == "function") {
        return defaultValue();
        } else return defaultValue;

    });

    useEffect(() => {
        if (value == undefined) return storageObject.removeItem(key); // jika value == undifined maka removeValue
        storageObject.setItem(key, JSON.stringify(value)); // jika tidak maka setItem sesuai key dan valuenya
    }, [key, value, storageObject]);
    const remove = useCallback(() => {
        setValue(undefined); // untuk remove value
    }, []);

    return [value, setValue, remove];
    }

    ```
    ###### Contoh penggunan

    ```javascript
    import { useSessionStorage, useLocalStorage } from "./useStorage"

    export default function StorageComponent() {
    const [name, setName, removeName] = useSessionStorage("name", "Kyle")// set key "name" dengan default value "Kyle" di sessionStorage
    const [age, setAge, removeAge] = useLocalStorage("age", 26)// set key "age" dengan default value "26" di LocalStorage

    return (
        <div>
        <div>
            {name} - {age}
        </div>
        <button onClick={() => setName("John")}>Set Name</button>
        <button onClick={() => setAge(40)}>Set Age</button>
        <button onClick={removeName}>Remove Name</button>
        <button onClick={removeAge}>Remove Age</button>
        </div>
    )
    }
    ```

 - useDarkMode
    Hooks ini berfungsi untuk melakukan spesifik style seperti mengubah gambar atau icon ketika Darkmode dan menyimpan value darkmode di local strorage agar tidak berubah ketika di refresh
    
    ```javascript
    import { useEffect } from 'react'
    import { useLocalStorage } from './useStorage'
    import useMediaQuery from './useMediaQuery'

    export default function useDarkMode() {
        
    const [darkMode, setDarkMode] = useLocalStorage("useDarkMode")// menggunakan useStorage untuk menyimpan value
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")// menggunakan useMediaQuery untuk mengikuti browser apakah menggunakan darkmode atau lightmode
    const enabled = darkMode ?? prefersDarkMode // ketika darkmode belum memiliki value maka enabled menggunakan prefersDarkMode
    
    useEffect(() => {
        document.body.classList.toggle("dark", enabled)
    }, [enabled])// ketika darkmode berubah menambahkan class dark di body

    return [enabled, setDarkMode]
    }

    ```

    DarkmodeComponent.jsx
    ```javascript
    import useDarkMode from "./useDarkMode"
    import "./body.css"

    export default function DarkModeComponent() {
    const [darkMode, setDarkMode] = useDarkMode()

    return (
        <button
        onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
        style={{
            border: `1px solid ${darkMode ? "white" : "black"}`,
            background: "none",
            color: darkMode ? "white" : "black",
        }}
        >
        Toggle Dark Mode
        </button>
    )}
    ```

    main.css
    ```css
    body.dark {
    background-color: #333;
    }
    ```
 