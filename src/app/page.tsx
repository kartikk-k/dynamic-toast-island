"use client"

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

  const ref = useRef<HTMLDivElement>(null);
  const [currState, setCurrState] = useState(1);
  const [device, setDevice] = useState<"desktop" | "mobile">("mobile");

  const islands = [{
    label: "Idle",
    onClick: () => setCurrState(0),
    dimensions: { w: 100, h: 38, r: 28 },
  }, {
    label: "Face",
    onClick: () => setCurrState(1),
    dimensions: { w: 96, h: 96, r: 28 },
  }, {
    label: "Notifications",
    onClick: () => setCurrState(2),
    dimensions: { w: 290, h: 42, r: 28 },
  }, {
    label: "Delete",
    onClick: () => setCurrState(3),
    dimensions: { w: 320, h: 76, r: 42 },
  }, {
    label: "Post",
    onClick: () => setCurrState(4),
    dimensions: { w: 350, h: 170, r: 42 },
  }]

  useEffect(() => {
    if (!ref.current) return

    const timer = setTimeout(() => {
      setCurrState(0)
    }, 1000)

    return () => clearTimeout(timer)

  }, [ref])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen overflow-hidden"
    // className="h-screen w-screen overflow-hidden"
    >

      <div className="flex gap-6 mx-auto justify-center p-8 text-sm">

        <button className="">
          <span
            onClick={() => setCurrState(0)}
            className="text-white"
          >
            Idle
          </span>
        </button>
        <button className="">
          <span
            onClick={() => setCurrState(1)}
            className="text-white"
          >
            Face
          </span>
        </button>
        <button className="">
          <span
            onClick={() => setCurrState(2)}
            className="text-white"
          >
            Bell
          </span>
        </button>
        <button className="">
          <span
            onClick={() => setCurrState(3)}
            className="text-white"
          >
            Delete
          </span>
        </button>
        <button className="">
          <span
            onClick={() => setCurrState(4)}
            className="text-white"
          >
            Post
          </span>
        </button>
      </div>

      <div className="pt-52">

        <div className="flex justify-center w-full">

          <div className={`
              scale-[80%] sm:scale-100
              w-full flex items-center flex-col
              `}>

            {/* device switcher */}
            <div className="flex items-center gap-4 w-full justify-center p-6">
              <button onClick={() => setDevice("mobile")} className={`${device === "mobile" ? "opacity-100" : "opacity-60"} duration-200`}>
                <svg width="10" height="16" className="size-7" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.33594 15.875C1.16016 15.875 0.367188 15.1162 0.367188 13.9883V2.80469C0.367188 1.67676 1.16016 0.917969 2.33594 0.917969H7.70898C8.87109 0.917969 9.64355 1.67676 9.64355 2.80469V13.9883C9.64355 15.1162 8.87109 15.875 7.70898 15.875H2.33594ZM2.56152 14.501H7.45605C7.99609 14.501 8.31055 14.2002 8.31055 13.6807V3.1123C8.31055 2.59277 7.99609 2.29883 7.45605 2.29883H2.56152C2.02148 2.29883 1.70703 2.59277 1.70703 3.1123V13.6807C1.70703 14.2002 2.02148 14.501 2.56152 14.501ZM4.1543 3.85742C3.85352 3.85742 3.62109 3.625 3.62109 3.33105C3.62109 3.03711 3.85352 2.80469 4.1543 2.80469H5.87012C6.16406 2.80469 6.39648 3.03711 6.39648 3.33105C6.39648 3.625 6.16406 3.85742 5.87012 3.85742H4.1543ZM3.53906 13.9609C3.34082 13.9609 3.19043 13.8242 3.19043 13.6191C3.19043 13.4072 3.34082 13.2705 3.53906 13.2705H6.48535C6.68359 13.2705 6.82715 13.4072 6.82715 13.6191C6.82715 13.8242 6.68359 13.9609 6.48535 13.9609H3.53906Z" fill="white" />
                </svg>
              </button>
              <button
                onClick={() => {
                  // if (typeof window !== "undefined" && window.innerWidth < 800) return alert("Desktop view is only available on larger screens")
                  if (innerWidth !== undefined && innerWidth !== null) {
                    if (innerWidth < 800) return alert("Desktop view is only available on larger screens")
                  }
                  setDevice("desktop")
                }}
                className={`${device === "desktop" ? "opacity-100" : "opacity-60"} duration-200`}
              >
                <svg width="21" height="12" className="size-8" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.613281 11.0117C0.613281 10.5332 1.00293 10.1367 1.47461 10.1367H2.92383V2.07715C2.92383 1.01074 3.5459 0.450195 4.56445 0.450195H16.7871C17.8467 0.450195 18.4277 1.01074 18.4277 2.07715V10.1367H19.877C20.3486 10.1367 20.7383 10.5332 20.7383 11.0117C20.7383 11.4902 20.3486 11.8799 19.877 11.8799H1.47461C1.00293 11.8799 0.613281 11.4902 0.613281 11.0117ZM4.26367 10.1367H17.0879V2.42578C17.0879 1.99512 16.876 1.79004 16.4453 1.79004H12.6514C12.5352 1.79004 12.4805 1.83789 12.4805 1.9541V2.07031C12.4805 2.36426 12.2891 2.5625 11.9951 2.5625H9.37012C9.06934 2.5625 8.87109 2.36426 8.87109 2.07031V1.9541C8.87109 1.83789 8.81641 1.79004 8.71387 1.79004H4.90625C4.48242 1.79004 4.26367 1.99512 4.26367 2.42578V10.1367Z" fill="white" />
                </svg>
              </button>
            </div>

            <motion.div
              initial={{ width: 370, opacity: 0 }}
              animate={{ width: device === "desktop" ? "95%" : 420, opacity: 1 }}
              transition={{ ease: "easeOut", type: "spring", duration: 0.5 }}
              className={`relative
             h-[852px] border-[20px] rounded-[72px] border-white/40 pt-4
             `}
            >
              {/* ${window.innerWidth < 800 ? "scale-[80%]" : "scale-100"} */}
              {/* ${device === "desktop" ? "w-[1400px]" : "w-[420px]"}  */}

              {/* island */}
              <motion.div
                ref={ref}
                initial={{ width: 100, height: 28, borderRadius: 28 }}
                animate={{
                  width: islands[currState].dimensions.w,
                  height: islands[currState].dimensions.h,
                  borderRadius: islands[currState].dimensions.r,
                }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  ease: "linear",
                  damping: 13,
                  stiffness: 150,
                  // duration: 4,
                }}

                className={`bg-black/50 rounded-full relative flex items-center justify-center mx-auto overflow-hidden backdrop-blur-3xl`}
              >

                <AnimatePresence>
                  {currState === 1 && <FaceId />}
                  {currState === 2 && <Notifications />}
                  {currState === 3 && <DeleteToast />}
                  {currState === 4 && <Post />}
                </AnimatePresence>

              </motion.div>

              {/* desktop skeleton */}
              <AnimatePresence>
                {device === "desktop" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute w-full h-full -z-10 p-2 px-6 top-4"
                  >

                    {/* header */}
                    <div className="flex justify-between">
                      <div className="h-9 w-32 rounded-3xl bg-black/10" />
                      <div className="h-9 w-52 rounded-3xl bg-black/10" />
                    </div>

                    {/* sections */}
                    <div className="mt-24 space-y-6">
                      <div className="h-52 w-full rounded-3xl bg-black/10" />
                      <div className="h-52 w-full rounded-3xl bg-black/10" />
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>


            </motion.div>

          </div>
        </div>

      </div>

      <Link
        href={'https://github.com/kartikk-k/dynamic-toast-island/blob/main/src/app/page.tsx'}
        target="_blank"
        className="fixed bottom-[5%] right-5 z-40 p-2 bg-black/20 rounded-full backdrop-blur-md"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="white" />
        </svg>
      </Link>

    </motion.main>
  );
}


// island components

const Post = () => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    exit={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col gap-5 items-center justify-between w-full px-6"
  >
    <div className="flex gap-4">

      <svg width="27" height="27" className="shrink-0 size-6 mt-1" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5025 26.88C6.16321 26.88 0.0625 20.7793 0.0625 13.44C0.0625 6.08753 6.15003 0 13.4893 0C20.8418 0 26.9425 6.08753 26.9425 13.44C26.9425 20.7793 20.855 26.88 13.5025 26.88ZM13.5025 24.64C19.7218 24.64 24.7025 19.6593 24.7025 13.44C24.7025 7.22071 19.7086 2.24 13.4893 2.24C7.27003 2.24 2.31568 7.22071 2.31568 13.44C2.31568 19.6593 7.28321 24.64 13.5025 24.64ZM7.38862 13.44C7.38862 12.7812 7.83662 12.32 8.50862 12.32H12.3825V8.44612C12.3825 7.77412 12.8305 7.31294 13.4761 7.31294C14.135 7.31294 14.5961 7.77412 14.5961 8.44612V12.32H18.4832C19.142 12.32 19.6032 12.7812 19.6032 13.44C19.6032 14.0856 19.142 14.5205 18.4832 14.5205H14.5961V18.4075C14.5961 19.0795 14.135 19.5275 13.4761 19.5275C12.8305 19.5275 12.3825 19.0664 12.3825 18.4075V14.5205H8.50862C7.83662 14.5205 7.38862 14.0856 7.38862 13.44Z" fill="white" />
      </svg>

      <div>
        <p className="text-base line-clamp-1 shrink-0">Uploaded new post</p>
        <p className="line-clamp-2 opacity-50 shrink-0 w-60">Coded pixels from client project that take little effort but significantly</p>
      </div>

    </div>

    <button className="bg-white/20 rounded-full h-11 w-full hover:bg-white/30 duration-150">
      View post
    </button>

  </motion.div>
)

const DeleteToast = () => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    exit={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    // transition={{ duration: 0.3 }}
    className="flex items-center justify-between w-full px-4"
  >

    <div className="flex items-center gap-3 pl-2">
      <svg width="24" height="27" className="size-6 shrink-0" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.2717 26.86C4.42708 26.86 3.26081 25.7651 3.1775 23.9324L2.36825 6.77153H1.04727C0.47603 6.77153 0 6.3193 0 5.72426C0 5.14113 0.47603 4.6889 1.04727 4.6889H6.3312V2.90378C6.3312 1.08297 7.49747 0 9.4611 0H13.9834C15.9589 0 17.1133 1.08297 17.1133 2.90378V4.6889H22.4091C23.0042 4.6889 23.4683 5.14113 23.4683 5.72426C23.4683 6.3193 23.0042 6.77153 22.4091 6.77153H21.1L20.2908 23.9205C20.2075 25.7532 19.0293 26.86 17.2085 26.86H6.2717ZM8.52094 3.01089V4.6889H14.9235V3.01089C14.9235 2.39205 14.4951 1.99933 13.8287 1.99933H9.61581C8.94937 1.99933 8.52094 2.39205 8.52094 3.01089ZM6.49781 24.7536H16.9467C17.625 24.7536 18.101 24.2775 18.1248 23.5754L18.8984 6.77153H4.52229L5.33154 23.5754C5.36724 24.2775 5.84327 24.7536 6.49781 24.7536ZM8.22342 22.8375C7.74739 22.8375 7.41417 22.5281 7.40227 22.0521L7.04525 9.58011C7.03335 9.11598 7.35467 8.79466 7.8545 8.79466C8.33053 8.79466 8.66375 9.10408 8.67565 9.58011L9.03267 22.0521C9.04457 22.5162 8.72325 22.8375 8.22342 22.8375ZM11.7341 22.8375C11.2343 22.8375 10.9011 22.5162 10.9011 22.0521V9.58011C10.9011 9.11598 11.2343 8.79466 11.7341 8.79466C12.234 8.79466 12.5672 9.11598 12.5672 9.58011V22.0521C12.5672 22.5162 12.234 22.8375 11.7341 22.8375ZM15.2449 22.8375C14.745 22.8375 14.4118 22.5162 14.4237 22.0521L14.7926 9.58011C14.8045 9.10408 15.1378 8.79466 15.6138 8.79466C16.1017 8.79466 16.4349 9.11598 16.423 9.58011L16.0541 22.0521C16.0422 22.5281 15.7209 22.8375 15.2449 22.8375Z" fill="white" />
      </svg>
      <div>
        <p className="text-xs opacity-70 line-clamp-1 shrink-0">Action</p>
        <p className="shrink-0 line-clamp-1">Post deleted</p>
      </div>
    </div>

    <button className="flex items-center gap-2 h-11 px-3 rounded-full bg-white/20 hover:bg-white/30 duration-150">
      <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7744 8.84814C12.7744 11.3809 11.1113 13.0503 8.27393 13.0503H6.75049C6.33789 13.0503 6.0459 12.7393 6.0459 12.3584C6.0459 11.9712 6.33154 11.6602 6.75049 11.6602H8.22949C10.2734 11.6602 11.397 10.4478 11.397 8.79102C11.397 7.14062 10.2734 5.979 8.22949 5.979H4.18604L2.71338 5.91553L3.83057 6.85498L5.46826 8.44824C5.58887 8.5752 5.67139 8.72754 5.67139 8.93066C5.67139 9.32422 5.39844 9.60986 4.98584 9.60986C4.81445 9.60986 4.62402 9.52734 4.48438 9.39404L0.84082 5.80127C0.694824 5.66162 0.618652 5.47754 0.618652 5.28711C0.618652 5.09668 0.694824 4.90625 0.84082 4.77295L4.48438 1.18018C4.62402 1.04688 4.81445 0.964355 4.98584 0.964355C5.39844 0.964355 5.67139 1.25 5.67139 1.63721C5.67139 1.84668 5.58887 1.99902 5.46826 2.11963L3.83057 3.71289L2.71338 4.65869L4.18604 4.59521H8.18506C11.0732 4.59521 12.7744 6.32812 12.7744 8.84814Z" fill="white" />
      </svg>
      Undo
    </button>

  </motion.div>
)

const Notifications = () => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    exit={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    className="flex items-center justify-between w-full px-4"
  >
    <div className="flex items-center gap-1.5">
      {/* bell-icon */}
      <svg width="18" height="20" className="size-4" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.88867 15.4199C0.869141 15.4199 0.21875 14.8135 0.21875 13.9258C0.21875 12.915 0.992188 12.1064 1.82715 11.3857C2.50391 10.7969 2.62695 9.52246 2.81152 8.13379C3.04883 5.13672 4.07715 2.93066 6.25684 2.14844C6.66113 0.970703 7.69824 0.118164 8.99902 0.118164C10.2998 0.118164 11.3281 0.970703 11.7412 2.14844C13.9209 2.93066 14.9492 5.13672 15.1865 8.13379C15.3623 9.52246 15.4941 10.7969 16.1709 11.3857C16.9971 12.1064 17.7793 12.915 17.7793 13.9258C17.7793 14.8135 17.1289 15.4199 16.1094 15.4199H1.88867ZM8.99902 19.208C7.33789 19.208 6.125 18.0566 6.01953 16.6943H11.9785C11.873 18.0566 10.6602 19.208 8.99902 19.208Z" fill="white" />
      </svg>
      <p>Notifications</p>
    </div>

    <p>5+</p>

  </motion.div>
)

const FaceId = () => (
  <motion.svg
    initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    exit={{ opacity: 0, filter: "blur(4px)", y: -5 }}
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2222 2H7.11111C4.28832 2 2 4.28832 2 7.11111V12.2222"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.7778 2H42.8889C45.7117 2 48 4.28832 48 7.11111V12.2222"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.2222 14.7778V19.8889"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.7778 14.7778V19.8889"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.3333 35.2222C17.3333 35.2222 19.8889 37.7777 25 37.7777C30.1111 37.7777 32.6666 35.2222 32.6666 35.2222"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.9999 14.7778V27.5556H22.4444"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.2222 48H7.11111C4.28832 48 2 45.7118 2 42.8889V37.7778"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.7778 48H42.8889C45.7117 48 48 45.7118 48 42.8889V37.7778"
      stroke="#D9D9D9"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </motion.svg>
);
