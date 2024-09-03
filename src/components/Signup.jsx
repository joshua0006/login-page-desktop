import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-[100vh] flex ">
      <div className="h-full w-1/2 flex flex-col items-center bg-[#E9EFEC] bg-opacity-60">
        <img className="w-60 h-60 mt-10" src="public/logo.png" alt="" />
        <div>
          <h2 className="text-[#16423C] text-4xl mb-5 font-bold">Sign up</h2>
          <form action="">
            <label
              className="block text-xl text-[#16423C] "
              htmlFor="firstName"
            >
              First name:
            </label>
            <input
              className="w-80 h-10 rounded-xl pl-2 focus:shadow-xl"
              id="firstName"
              type="text"
            />
            <label
              className="block text-xl text-[#16423C] mt-5"
              htmlFor="lastName"
            >
              Last name:
            </label>
            <input
              className="w-80 h-10 rounded-xl pl-2 focus:shadow-xl"
              id="lastName"
              type="text"
            />
            <label
              className="block text-xl text-[#16423C] mt-5"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              className="w-80 h-10 rounded-xl pl-2 focus:shadow-xl"
              id="username"
              type="text"
            />
            <label
              className="block text-xl mt-5 text-[#16423C] "
              htmlFor="username"
            >
              Password:
            </label>
            <input
              className="block w-80 h-10 rounded-xl pl-2"
              id="username"
              type="text"
            />

            <br />
            <button className=" mt-5  bg-[#16423C] text-[#E9EFEC] px-10 py-3 rounded-md text-xl">
              Sign up
            </button>
          </form>
          <p className="mt-10">
            Already have an account?{" "}
            <Link className="hover:underline text-blue-600" to="/">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <div className="w-2/4 h-96  m-auto mt-5 flex flex-col items-center justify-center">
        <h1 className="text-9xl  text-[#16423C] tracking-widest font-bold">
          WildPath
        </h1>
        <p className="text-2xl text-[#E9EFEC]">
          Blaze New Trails, Discover Nature's Wonders.
        </p>
      </div>
    </div>
  );
};

export default Signup;
