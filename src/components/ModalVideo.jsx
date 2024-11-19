import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ModalVideo = ({ thumb, thumbWidth, thumbHeight, thumbAlt, video }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <div>
      {/* Video thumbnail */}
      <button
        className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video">
        <img
          className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          alt={thumbAlt}
        />
        {/* Play icon */}
        <svg
          className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72">
          <circle
            className="fill-white"
            cx="36"
            cy="36"
            r="36"
            fillOpacity=".8"
          />
          <path
            className="fill-indigo-500 drop-shadow-2xl"
            d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
          />
        </svg>
      </button>

      {/* Modal */}
      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
        afterLeave={() => videoRef.current?.pause()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <Transition.Child
            as="div"
            className="fixed inset-0 z-[99] bg-black bg-opacity-70 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />

          {/* Modal dialog */}
          <Transition.Child
            as="div"
            className="fixed z-[9999] inset-0 flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75">
            <div className="w-full h-full flex justify-center items-center">
              <Dialog.Panel className="w-full max-w-4xl max-h-[80vh] rounded-3xl shadow-2xl bg-black z-20 overflow-hidden aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  loop
                  controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ModalVideo;
