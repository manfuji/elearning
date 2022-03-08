import { useState } from 'react';
import { toast } from 'react-toastify';

function Register() {
  // useEffect(() => {
  //  if(user.isAuthenticated===true && user.isAdmin===false){
  //    router.push("/")
  //  }
  // }, [])
  const initialState = {
    username: '',
    password: '',
    password2: '',
    email: '',
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
    console.log(formdata);
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    if (formdata.password !== formdata.password2) {
      toast.warn('passwords do not match');
    }
    // axios.post("/api/user/user",formdata,config)
    // .then(res=>{
    //   console.log(res.data)
    // })
  };
  return (
    <div className="bg-blue-900 py-20">
      <div className="w-full sm:max-w-2xl sm:mx-auto max-h-full  p-10 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold tracking-widest text-blue-900 text-center">
          Register
        </h1>
        <div className=" items-center justify-center">
          <form onSubmit={onSubmit} className="flex flex-col space-y-2 py-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              value={formdata.username}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-blue-400 rounded-md placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              required
              value={formdata.email}
              onChange={onChange}
              placeholder="Email(very Important)"
              className="px-10 py-2 outline-none focus:ring-1 ring-blue-400 rounded-md placeholder-gray-400"
            />
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={onChange}
              required
              placeholder=" Password"
              className="px-10 py-2 outline-none focus:ring-1 ring-blue-400 rounded-md placeholder-gray-400"
            />
            <input
              type="password"
              required
              name="password2"
              value={formdata.password2}
              onChange={onChange}
              required
              placeholder="confirm Password"
              className="px-10 py-2 outline-none focus:ring-1 ring-blue-400 rounded-md placeholder-gray-400"
            />
            <button
              type="submit"
              className="mt-2 px-8 py-2 text-lg text-white bg-green-600 rounded-lg hover:bg-green-400 active:bg-green-500 focus:ring-1 ring-green-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
