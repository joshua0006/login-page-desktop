import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-[100vh] flex ">
        <div className="h-full w-1/2 flex flex-col items-center bg-[#E9EFEC] bg-opacity-60">
          <img className="w-60 h-60 mt-10" src="public/logo.png" alt="" />
          <div>
            <h2 className="text-[#16423C] text-4xl mb-5 font-bold">Log in</h2>
            <form action="">
              <label
                className="block text-xl text-[#16423C] "
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
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="block w-80 h-10 rounded-xl pl-2"
                id="password"
                type="text"
              />
              <input className="mt-5 mr-2" id="remember" type="checkbox" />
              <label className="text-[#16423C]" htmlFor="remember">
                Remember me
              </label>
              <br />
              <button className=" mt-5  bg-[#16423C] text-[#E9EFEC] px-10 py-3 rounded-md text-xl">
                Log in
              </button>
            </form>
            <p className="xl:mt-52 lg:mt-28">
              Don't have an account?{" "}
              <Link className="hover:underline text-blue-600" to="/signup">
                Sign up
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
    </div>
  );
};

export default Home;
