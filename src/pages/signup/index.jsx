import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log('data', data);
    // API REQUEST
  };

  const selectOptions = [
    {
      value: 1,
      label: 'red',
    },
    {
      value: 2,
      label: 'blue',
    },
    {
      value: 3,
      label: 'green',
    },
    {
      value: 4,
      label: 'white',
    },
  ];

  return (
    <div className='d-flex justify-content-center align-items-center flex-column '>
      <h2 className='my-5'>Create a new account</h2>
      <form className='border p-5 w-50' onSubmit={handleSubmit(onSubmit)}>
        <div className='email-wrapper input-group'>
          <input
          class="form-control"
            placeholder='User email'
            type='text'
            {...register('user_email', { required: true })}
          />
          {errors.user_email && errors.user_email.type === 'required' && (
            <p className='text-danger my-2'>User email is required</p>
          )}
        </div>



        <div className='gender-wrapper my-5 input-group'>
        <Controller
        className='w-100'
        name="select"
        control={control}
        render={({ field }) => <ReactSelect 
          {...field} 
          options={selectOptions} 
          isMulti
          isSearchable
          placeholder='Select color'
        />}
      />

        </div>

        <div className='desc-wrapper my-5 input-group'>
          <input
            class="form-control"
            placeholder='User Desc'
            type='text'
            {...register(
              'desc',
              {
                required: true,
                maxLength: 250,
                pattern: 'regex',
              }
            )}
          />
          {errors.desc && errors.desc.type === 'maxLength' && (
            <p className='text-danger my-2'>Desc max length is 250</p>
          )}
        </div>

        <div className='phone-wrapper my-5 input-group'>
          <input
            class="form-control"
            placeholder='Phone'
            type='number'
            {...register('phone', {
              required: true,
              maxLength: 11,
            })}
          />

          {errors.phone && errors.phone.type === 'required' && (
            <p className='text-danger my-2'>Phone is required</p>
          )}

          {errors.phone && errors.phone.type === 'maxLength' && (
            <p className='text-danger my-2'>Phone max length is 11</p>
          )}
        </div>

        <div className='password-wrapper input-group'>
          <input
            class="form-control"
            placeholder='Password'
            type='password'
            {...register('password')}
          />
        </div>

        <div className='submit-wrapper my-5 d-flex justify-content-center'>
          <button className='btn btn-primary btn-lg w-100' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
