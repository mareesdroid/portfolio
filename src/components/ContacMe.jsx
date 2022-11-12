import React, { useEffect, useState, useRef } from "react";
import { CKEditor } from "ckeditor4-react";
import { usePortfolioUpdate } from "../MyContext";
import { toast } from 'react-toastify';

const ContactMe = () => {
  const [loader, setLoader] = useState(false);
  const [editor, setEditor] = useState(null);
  const updatePortfolio = usePortfolioUpdate()
  let contactRef = useRef(null);
  let getInTouchRef = useRef(null);

  useEffect(() => {
    if (getInTouchRef) {
        getInTouchRef.current.childNodes.forEach((e, i) => {
            e.removeAttribute('id');
           });
        const obs = new IntersectionObserver(
            function (entries) {
              const ent = entries[0];
              if (ent.isIntersecting === true) {
                getInTouchRef.current?.classList.add('get-in-touch-animate')
              }
            },
            {
              // In the viewport
              root: null,
              threshold: 0,
              rootMargin: '-80px',
            }
          );
          obs.observe(getInTouchRef.current);
    }
  }, [getInTouchRef]);

  useEffect(() => {
    if(contactRef.current){
      updatePortfolio({contactRef}, 'refs')
    }
  }, [contactRef])

  const initContact = {
    name: "",
    email: "",
    description: "",
  };
  const initError = {
    name: false,
    email: false,
    description: false,
  };
  const [error, setError] = useState(initError);
  const [contactDetails, setContactDetails] = useState(initContact);
  const sendMail = async (doc) => {
    setLoader(true);
    console.log(JSON.stringify(doc))

    const response = await fetch('https://z65eu8mnjg.execute-api.us-east-2.amazonaws.com/Prod/', {
        method: "POST", 
        body: JSON.stringify(doc),
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        }
    });
      console.log(response.json())
      setLoader(false)
      toast("Thanks for contacting Me! I'll reply your message soon!")
      return response.json(); // parses JSON response into native JavaScript objects
      
     
  };

  const ckConfig = {
    toolbar: [
      { name: "document", items: ["Print", "Source"] },
      { name: "clipboard", items: ["Cut", "Copy", "Undo", "Redo"] },
      { name: "styles", items: ["Format", "-", "Font", "-", "FontSize"] },
      {
        name: "basicstyles",
        items: [
          "Bold",
          "Italic",
          "Underline",
          "Strike",
          "RemoveFormat",
          "CopyFormatting",
        ],
      },
      { name: "colors", items: ["TextColor", "BGColor"] },
      {
        name: "align",
        items: [
          "AlignLeft",
          "JustifyLeft",
          "JustifyCenter",
          "JustifyRight",
          "JustifyBlock",
        ],
      },
      { name: "links", items: ["Link", "Unlink"] },
      {
        name: "paragraph",
        items: [
          "NumberedList",
          "BulletedList",
          "-",
          "Outdent",
          "Indent",
          "-",
          "Blockquote",
        ],
      },
      { name: "insert", items: ["Image", "Table"] },
      { name: "tools", items: ["Maximize"] },
    ],
    extraPlugins: "colorbutton,colordialog,font",
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const { name, email } = e.target;
    console.log(name);
    if (editor.getData() === "") {
      setError({
        ...error,
        description: true,
      });
    } else if (name.value.trim() === "") {
      setError({
        ...error,
        name: true,
      });
    } else if (email.value.trim() === "") {
      setError({
        ...error,
        email: true,
      });
    } else {
      setError(initError);
      sendMail({
        name: name.value,
        email: email.value,
        message: editor.getData(),
      });
    }
  };
  return (
    <div ref={contactRef} className="container mt-28 mb-8">
      <p className="text-lg mb-10 uppercase tracking-widest text-emerald-600 font-black">Contact</p>

          <div className="flex flex-col md:flex-row shadow-md rounded-xl">
        <div className="form-container  bg-emerald-800  rounded-xl md:w-8/12">
          <form className="p-8" onSubmit={handleValidation}>
            <label class="block">
              <span class="block mt-4 mb-2 text-sm md:text-md font-semi-bold text-emerald-300">Full Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                class={`${
                  error?.name &&
                  "peer invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                } block w-full px-3 py-2 bg-white border border-slate-100 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    `}
              />
              <p class="mt-2 hidden peer-invalid:visible text-pink-600 text-sm">
                Please provide your name.
              </p>
            </label>
            <label class="block">
              <span class="block mt-4 mb-2 text-sm md:text-md font-semi-bold text-emerald-300">E-mail</span>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email address"
                class={`${
                  error?.mail &&
                  "peer invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                } block w-full px-3 py-2 bg-white border border-slate-100 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    `}
              />
              <p class="mt-2 hidden peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            </label>

            <label class="block">
              <span class="block mt-4 mb-2 text-sm md:text-md font-semi-bold text-emerald-300">Message</span>
              <CKEditor
                className="peer"
                config={ckConfig}
                style={{ borderColor: "#f1f5f9", marginBottom: "2rem" }}
                onInstanceReady={({ editor }) => {
                  setEditor(editor);
                }}
              />
              <p
                class={`mt-2 ${
                  !error?.description && "hidden"
                } peer-invalid:visible text-pink-600 text-sm`}
              >
                Please provide your message.
              </p>
            </label>
            <div className="flex justify-center md:justify-center ">
              <button
                type="submit"
                className={`${loader ? 'btn loading' : 'text:emerald-900 p-3 px-6 pt-2 text-emrald-900 bg-emerald-100 rounded-full baseline hover:bg-brightemeraldLight hover:bg-emerald-500 hover:text-white'}`}
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div ref={getInTouchRef} className={'get-in-touch bg-white md:w-5/12 md:relative'}>
          <p className="text-3xl-light text-emerald-900 text-center mt-10 tracking-wide">Get in touch</p>
          <div className="flex items-center flex-col m-5 lg:mx-1 xl:m-10 p-2 lg:p-5 xl:p-8 backdrop-blur-md rounded-xl">
            <div>
            <div className="flex gap-2 items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-5 md:h-5 stroke-emerald-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
            <a className="text-md md:text-md text-emerald-700 lg:text-lg px-1" href="tel:8838742844">+91 8838742844</a>
            </div>
<div className="flex gap-2 items-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-5 md:h-5 stroke-emerald-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
            <a href="mailto:mareesdroid@icloud.com" className="text-md md:text-md lg:text-lg px-1 text-emerald-700">mareesdroid@icloud.com</a>

            </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-center ">
              <a
                href="https://marees-portfolio.s3.us-east-2.amazonaws.com/Marees+Resume.pdf" target="_blank"
                className="p-3 px-6 pt-2 mb-10 text-white bg-emerald-600 hover:bg-emerald-900 rounded-full baseline hover:bg-brightemeraldLight"
              >
                Resume
              </a>
            </div>
        </div>
        </div>
      </div>
  );
};

export default ContactMe;
