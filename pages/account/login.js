import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Login() {
  // useEffect(() => {
  //   if (user.isAuthenticated === true && user.isAdmin === false) {
  //     router.push("/");
  //   }
  // }, []);
  const initialState = {
    username: '',
    password: '',
  };
  const [formdata, setFormdata] = useState(initialState);
  const onChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success('login');
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    //   axios
    //     .post("/api/user/auth", formdata, config)
    //     .then((res) => {
    //       console.log(res.data)

    //     })
    //     .catch((err) => {
    //       const msg = err.response.data.msg;
    //       alert(msg);
    //     });
  };
  return (
    <div className="bg-blue-900 py-20 h-screen">
      <div className="w-full sm:max-w-2xl sm:mx-auto max-h-full mt-24 p-10 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold tracking-widest text-blue-900 text-center">
          Login
        </h1>
        <div className=" items-center justify-center">
          <form onSubmit={onSubmit} className="flex flex-col space-y-5 py-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formdata.username}
              onChange={onChange}
              required
              className="px-10 py-2 outline-none focus:ring-1 ring-blue-400 rounded-md placeholder-gray-400"
            />
            <input
              type="password"
              required
              placeholder=" Password"
              name="password"
              value={formdata.password}
              onChange={onChange}
              className="px-10 mb-8 py-2 outline-none focus:ring-1 ring-blue-400 rounded-md placeholder-gray-400"
            />
            <button
              type="submit"
              className="mt-8 px-8 py-2 text-lg text-white bg-green-600 rounded-lg hover:bg-green-400 active:bg-green-300 focus:ring-1 ring-green-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
