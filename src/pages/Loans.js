import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  useDisclosure,
  Box,
  Input,
  Textarea,
  Select,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormErrorMessage,
  useToast,
  Text,
} from '@chakra-ui/react';
import NavbarIcons from '../components/NavbarIcons';

export default function Loans() {
  const [active, setActive] = useState('request');

  const selectData = [
    { key: 'Months', value: null },
    { key: 'January', value: 1 },
    { key: 'Feburay', value: 2 },
    { key: 'March', value: 3 },
    { key: 'April', value: 4 },
    { key: 'May', value: 5 },
    { key: 'June', value: 6 },
    { key: 'July', value: 7 },
    { key: 'August', value: 8 },
    { key: 'September', value: 9 },
    { key: 'October', value: 10 },
    { key: 'November', value: 11 },
    { key: 'December', value: 12 },
  ];

  const planData = [
    { key: 'Pick a Plan', value: null },
    { key: 'Plan A', value: 1 },
    { key: 'Plan B', value: 2 },
    { key: 'Plan C', value: 3 },
  ];
  return (
    <div className="loans">
      {/* first section */}
      <div className="loans_firstsection">
        <div className="inner">
          <h1>Loans</h1>
          <div className="tabs">
            <span
              onClick={() => setActive('request')}
              className={active === 'request' && 'active'}
            >
              Request Loan
            </span>
            <span
              onClick={() => setActive('give')}
              className={active === 'give' && 'active'}
            >
              Give Loan
            </span>
            <span
              onClick={() => setActive('current')}
              className={active === 'current' && 'active'}
            >
              Current Loan
            </span>
          </div>
        </div>
        <div className="navicons">
          <NavbarIcons />
        </div>
      </div>
      {/* lower section */}
      <div className="loans_lower">
        {/* left */}
        <div className="left">
          <Formik
            initialValues={{
              amount: '',
              month: '',
              plan: '',
            }}
            validationSchema={Yup.object({
              amount: Yup.number()
                .typeError('amount must be a number')
                .required('amount is required')
                .positive('amount can only be positive')
                .integer('amount can only be an integer'),
              // amount: Yup.string()
              //   .max(40, 'Must be 40 characters or less 😱')
              //   .required('Title is Required'),
              month: Yup.mixed()
                .required('pick a month')
                .test('months', 'pick a month', (value) => !isNaN(value)),
              plan: Yup.mixed()
                .required('plan is required')
                .test('plan', 'plan is required', (value) => !isNaN(value)),
            })}
            onSubmit={async (values, actions) => {
              // try {
              //   await dispatch(
              //     createAdvice({ ...values, userName: state.user.userName })
              //   );
              //   actions.setSubmitting(false);
              //   onClose();
              // } catch (error) {
              //   actions.setSubmitting(false);
              //   onClose();
              //   toast({
              //     title: 'Check',
              //     description: 'session expired, login again',
              //     status: 'error',
              //     duration: 4000,
              //     isClosable: true,
              //     position: 'top',
              //   });
              // }
            }}
          >
            {(formik) => {
              return (
                <Form>
                  <Field>
                    {(props) => (
                      <FormControl
                        isInvalid={
                          props.form.errors.amount && props.form.touched.amount
                        }
                      >
                        <Text
                          mb="8px"
                          ml="4px"
                          color="#255380"
                          fontSize="0.9rem"
                        >
                          Amount
                        </Text>
                        <Input
                          {...formik.getFieldProps('amount')}
                          name="amount"
                          id="amount"
                        />
                        <FormErrorMessage mb="10px">
                          {props.form.errors.amount}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field>
                    {(props) => (
                      <FormControl
                        isInvalid={
                          props.form.errors.month && props.form.touched.month
                        }
                        mt={4}
                      >
                        <Text
                          mb="8px"
                          ml="4px"
                          color="#255380"
                          fontSize="0.9rem"
                        >
                          Duration
                        </Text>
                        <Select
                          {...formik.getFieldProps('month')}
                          name="month"
                          id="catagory"
                          fontSize="0.9rem"
                        >
                          {selectData.map((item) => (
                            <option key={item.key} value={item.value}>
                              {item.key}
                            </option>
                          ))}
                        </Select>
                        <FormErrorMessage mb="25px">
                          {props.form.errors.month}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field>
                    {(props) => (
                      <FormControl
                        isInvalid={
                          props.form.errors.plan && props.form.touched.plan
                        }
                        mt={4}
                      >
                        <Text
                          mb="8px"
                          ml="4px"
                          color="#255380"
                          fontSize="0.9rem"
                        >
                          Payment Plan
                        </Text>
                        <Select
                          {...formik.getFieldProps('plan')}
                          name="plan"
                          id="catagory"
                          mb="6px"
                          fontSize="0.9rem"
                        >
                          {planData.map((item) => (
                            <option key={item.key} value={item.value}>
                              {item.key}
                            </option>
                          ))}
                        </Select>
                        <FormErrorMessage>
                          {props.form.errors.plan}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <div className="bottom">
                    <span className="addC">Add Collateral(s)</span>
                    <div className="inner">
                      <button disabled className="request">
                        Request
                      </button>
                      <Text mt="8px" color="#999999" fontSize="0.9rem">
                        *Please add collaterals
                      </Text>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>

        {/* right */}
        <div className="right"></div>
      </div>
    </div>
  );
}
