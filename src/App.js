import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || lname === "" || email === "" || password === "") {
      setFormError(true);
    } else {
      setFormError(false);
    }
  };

  return (
    <div className="  bg-red-400 bg-cover bg-no-repeat text-white"
     style={{
     backgroundImage: `url('${process.env.PUBLIC_URL}/bg-intro-desktop.png')`,
   }}
    >
      <div className="w-screen h-screen p-10 pt-8  block md:flex md:space-x-8 items-center justify-center  ">
        <div className="basis-1/3 ">
          <div className="md:pl-2">
            <h1 className="text-4xl md:text-4xl text-center md:text-start leading-12 md:leading-9 tracking-tight font-bold px-3">
              Learn to code by  watching others
            </h1>
            <p className="text-lg md:text-sm text-center md:text-start leading-relaxed tracking-tight p-3">
              See how experienced developers solve problems in real-time. Watching
              scripted tutorials is great, but understanding how developers think is
              invaluable.
            </p>
          </div>
        </div>
        <div className="basis-2/2">
          <div className="bg-purple-700 rounded-md text-center md:text-start p-4 grid justify-center shadow-md shadow-indigo-500/40">
            <h1>
              <strong className="text-white">
                Try it free for 7 days
              </strong>
              , then $20/mo. thereafter
            </h1>
          </div>
          <div className="bg-white p-8 mt-6 rounded-md shadow-md shadow-black-500/40">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 relative">
                <input
                  id="name-input"
                  type="text"
                  className="w-full border-2 pl-5 py-2 rounded-md text-black "
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {formError && name === "" && (
                  <p className="text-red-500 text-xs text-right">
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="absolute right-2 top-3 text-red-500"
                    />
                    First Name cannot be empty
                  </p>
                )}
              </div>
              <div className="mb-6 relative">
                <input
                  id="lname-input"
                  type="text"
                  className="w-full border-2 pl-5 py-2 rounded-md text-black "
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                {formError && lname === "" && (
                  <p className="text-red-500 text-xs text-right">
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="absolute right-2 top-3 text-red-500"
                    />
                    Last Name cannot be empty
                  </p>
                )}
              </div>
              <div className="mb-6 relative">
                <input
                  id="email-input"
                  type="email"
                  className={`w-full border-2 py-2 rounded-md text-black pl-5 ${
                    formError && email === "" ? "pr-12 placeholder-red-500 " : ""
                  }`}
                  placeholder={formError && email === "" ? "email@example.com" : "Email Address"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {formError && email === "" && (
                  <p className="text-red-500 text-xs text-right">
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="absolute right-2 top-3 text-red-500"
                    />
                    Looks like this is not an Email
                  </p>
                )}
              </div>
              <div className="mb-6 relative">
                <input
                  id="password-input"
                  type="password"
                  className="w-full border-2 pl-5 py-2 rounded-md text-black "
                  placeholder="Password"
                  maxLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {formError && password === "" && (
                  <p className="text-red-500 text-xs text-right">
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="absolute right-2 top-3 text-red-500"
                    />
                    Password cannot be empty
                  </p>
                )}
              </div>
              <button className="bg-green-400 w-full my-4 rounded-md p-4 grid justify-center shadow-md shadow-green-500/40" type="submit">
                CLAIM YOUR FREE TRIAL
              </button>
            </form>
            <p className="text-blue-500 text-xs">
              By Clicking the button you are agreeing to our
              <strong className="text-red-500">Terms and Services</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}