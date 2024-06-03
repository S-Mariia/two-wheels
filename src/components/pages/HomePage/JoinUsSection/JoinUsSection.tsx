'use client';

import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import members from '@/../public/images/home-page/members-3.png';

type FormValues = {
  fullName: string;
  email: string;
  message: string;
};

const JoinUsSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    if (event) {
      event.preventDefault();
    }
    toast.success(`Message submitted successfully, ${data.fullName}!`);
    reset();
  };

  return (
    <div
      id="contactUs"
      className="w-full flex flex-col sm:justify-between gap-[30px] md:my-[50px] my-[30px]"
    >
      <div className="flex justify-center w-full">
        <h3 className="font-600 mid:text-46px md:text-40px text-30px text-primary leading-120%">
          1000+ Active Members in 2023
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src={members}
          alt={'members'}
          width={700}
          height={155}
          className={'w-full max-w-[350px] aspect-[4.55/1]'}
        />
        <p className="mt-[16px] font-500 mid:text-32px md:text-24px text-20px text-primary leading-120%">
          2345 Active Members
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[16px] items-center leading-120% md:text-[22px] text-[18px]"
      >
        <div className="w-full max-w-[680px] text-black">
          <input
            {...register('fullName', { required: true })}
            placeholder="Enter your Full Name"
            className="w-full border border-gray placeholder:text-black rounded-[12px] px-[20px] py-[15px]"
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">Full Name is required</span>
          )}
        </div>
        <div className="w-full max-w-[680px] text-black">
          <input
            {...register('email', { required: true })}
            placeholder="Enter your Email"
            className="w-full border border-gray placeholder:text-black rounded-[12px] px-[20px] py-[15px]"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>
        <div className="w-full max-w-[680px] text-black">
          <textarea
            {...register('message', { required: true })}
            placeholder="Write us a message"
            rows={5}
            className="w-full border border-gray placeholder:text-black rounded-[12px] px-[20px] py-[15px]"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">Message is required</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-green text-white rounded-[12px] p-[20px] mt-4 w-full max-w-[680px] font-600"
        >
          Submit Now
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default JoinUsSection;
