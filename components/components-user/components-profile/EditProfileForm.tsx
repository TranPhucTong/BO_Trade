import { useForm, SubmitHandler } from "react-hook-form";
import { BsCheckCircle } from "react-icons/bs";

interface FormValues {
  email: string;
  username: string;
  lastname: string;
  firstname: string;
}

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>(); // Sử dụng kiểu dữ liệu FormValues ở đây

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Xử lý dữ liệu khi người dùng submit form
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex  md:flex-row flex-col  w-full justify-between items-center gap-4 mt-2">
        <div className="md:w-[50%] w-full">
          <label
            htmlFor="email"
            className="block text-black dark:text-text_2 text-sm font-normal mb-2 "
          >
            Email Address
          </label>
          <div className="relative">
            <input
              type="text"
              id="email"
              {...register("email", { required: "Email is required" })}
              className={`shadow dark:bg-black relative appearance-none border rounded-[10px] w-full py-2 px-3 text-textGray bg-colorBgBoxMemberLight border-text_2 dark:border-text_4 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            <BsCheckCircle className="absolute top-[10px] right-[10px] w-4 h-4 text-primaryLight dark:text-primary" />
          </div>

          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="md:w-[50%] w-full">
          <label
            htmlFor="username"
            className="block text-black dark:text-text_2 text-sm font-normal mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
            className={`shadow dark:bg-black appearance-none border rounded-[10px] w-full py-2 px-3 text-textGray bg-colorBgBoxMemberLight border-text_2 leading-tight dark:border-text_4 focus:outline-none focus:shadow-outline ${
              errors.username ? "border-red-500" : ""
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">
              {errors.username.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center w-full gap-4 mt-6">
        <div className="md:w-[50%] w-full">
          <label
            htmlFor="lastname"
            className="block text-black dark:text-text_2 text-sm font-normal mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", { required: "Last name is required" })}
            className={`shadow dark:bg-black appearance-none border rounded-[10px] w-full py-2 px-3 text-textGray bg-colorBgBoxMemberLight border-text_2 leading-tight dark:border-text_4  focus:outline-none focus:shadow-outline ${
              errors.lastname ? "border-red-500" : ""
            }`}
          />
          {errors.lastname && (
            <p className="text-red-500 text-xs italic">
              {errors.lastname.message}
            </p>
          )}
        </div>
        <div className="md:w-[50%] w-full">
          <label
            htmlFor="firstname"
            className="block text-black dark:text-text_2 text-sm font-normal mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            {...register("firstname", { required: "First name is required" })}
            className={`shadow dark:bg-black appearance-none border rounded-[10px] w-full py-2 px-3 text-textGray bg-colorBgBoxMemberLight border-text_2 leading-tight dark:border-text_4 focus:outline-none focus:shadow-outline ${
              errors.firstname ? "border-red-500" : ""
            }`}
          />
          {errors.firstname && (
            <p className="text-red-500 text-xs italic">
              {errors.firstname.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center md:justify-between justify-center mt-6 mb-6">
        <button
          type="submit"
          className="bg-primaryLight dark:bg-primary dark:text-black text-white  font-medium text-sm py-2 px-6 rounded-[10px] focus:outline-none focus:shadow-outline"
        >
          Upgrade Profile
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
